"use client";
import InputField from "@/app/components/InputField";
import { useAuth } from "@/app/hooks/useAuth";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditUserFormValues } from "../types/types";
import { accountService } from "../api/account";

const page = () => {
  const { user } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<EditUserFormValues>({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
    },
  });

  const onSubmit: SubmitHandler<EditUserFormValues> = async (data) => {
    try {
      if (
        await accountService.usernameExist(data.username, user!.id, user!.token)
      ) {
        return;
      }
      const result = await accountService.editUser(
        user?.id as number,
        data,
        user!.token
      );
      alert("ok");
      localStorage.setItem(
        process.env.NEXT_PUBLIC_AUTH_USER!,
        JSON.stringify({ ...result, ...{ token: user?.token } })
      );
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setValue("username", user?.username as string);
    setValue("firstName", user?.firstName as string);
    setValue("lastName", user?.lastName as string);
  }, [user]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 flex flex-col justify-center items-center gap-8 p-4 bg-neutral-800 rounded-md"
    >
      <InputField
        label="Usuario"
        placeholder="Nombre de usuario"
        error={errors.username !== undefined}
        helperText={errors.username?.message}
        {...register("username", {
          required: {
            value: true,
            message: "Este campo no puede quedar vacío",
          },
        })}
      />
      <InputField
        label="Nombre"
        placeholder="Cambiar nombre"
        error={errors.firstName !== undefined}
        helperText={errors.firstName?.message}
        {...register("firstName", {
          required: {
            value: true,
            message: "Este campo no puede quedar vacío",
          },
        })}
      />

      <InputField
        label="Apellido"
        placeholder="Cambiar apellido"
        error={errors.lastName !== undefined}
        helperText={errors.lastName?.message}
        {...register("lastName", {
          required: {
            value: true,
            message: "Este campo no puede quedar vacío",
          },
        })}
      />

      <button
        type="submit"
        className=" px-4 py-2 bg-orange-400 text-neutral-900 font-bold text-lg rounded-md"
      >
        Modificar
      </button>
    </form>
  );
};

export default page;
