"use client";
import AuthLayout from "@/app/auth/layouts/AuthLayout";
import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import Link from "next/link";
import InputField from "@/app/components/InputField";
import { useForm, type SubmitHandler } from "react-hook-form";
import { authService } from "../api/auth";
import { LoginFormValues } from "../types/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loginStatus, setLoginStatus] = useState<{
    ok: boolean;
    message: string;
  }>();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      await authService.login(data);
      setLoginStatus({ ok: true, message: "Login correcto" });
      router.push("/");
    } catch (error: any) {
      setLoginStatus({ ok: false, message: error?.error?.message });
    }
  };

  return (
    <AuthLayout>
      <AuthForm onSubmit={handleSubmit(onSubmit)} title="Iniciar Sesión">
        {loginStatus?.message && (
          <div
            className={clsx(
              "p-4 w-full",
              { " bg-red-900": !loginStatus.ok },
              { "bg-green-900": loginStatus.ok }
            )}
          >
            <p className=" text-white text-center">{loginStatus.message}</p>
          </div>
        )}
        <InputField
          label="Correo electrónico"
          placeholder="Ingrese su correo electronico"
          error={errors.identifier !== undefined}
          helperText={errors.identifier?.message}
          {...register("identifier", {
            required: {
              value: true,
              message: "Este campo no puede quedar vacío",
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Ingresá un email válido",
            },
          })}
        />
        <InputField
          type="password"
          label="Contraseña"
          placeholder="Contraseña"
          {...register("password")}
        />

        <button
          type="submit"
          className=" px-4 py-2 bg-orange-400 text-neutral-900 font-bold text-lg rounded-md"
        >
          Iniciar Sesión
        </button>

        <span>
          No eres miembro?{" "}
          <Link
            className=" text-blue-400 font-bold underline"
            href={"/auth/register"}
          >
            Registrate aquí
          </Link>
        </span>
      </AuthForm>
    </AuthLayout>
  );
};

export default Page;
