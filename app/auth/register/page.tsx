"use client";
import AuthLayout from "@/app/auth/layouts/AuthLayout";
import React from "react";
import AuthForm from "../components/AuthForm";
import Link from "next/link";
import InputField from "@/app/components/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { authService } from "../api/auth";
import { type RegisterFormValues } from "../types/types";

const Page = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    try {
      authService.register;
      alert("Todo Ok");
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthLayout>
      <AuthForm onSubmit={handleSubmit(onSubmit)} title="Registrarme">
        <InputField
          label="Correo electrónico"
          placeholder="Ingrese su correo electronico"
          error={errors.email !== undefined}
          helperText={errors.email?.message}
          {...register("email", {
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
          type="username"
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
          type="password"
          label="Contraseña"
          placeholder="Contraseña"
          error={errors.password !== undefined}
          helperText={
            errors.password?.message ||
            "Debe contener minimo 8 caracteres, una letra y un número."
          }
          {...register("password", {
            required: {
              value: true,
              message: "Este campo no puede quedar vacío",
            },
            pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
          })}
        />
        <InputField
          type="password"
          label="Repetir Contraseña"
          placeholder="Repetir contraseña"
          error={errors.repeatPassword !== undefined}
          helperText={errors.repeatPassword?.message}
          {...register("repeatPassword", {
            validate: (value) =>
              value == watch("password") || "Las contraseñas no coinciden",
          })}
        />

        <button
          type="submit"
          className=" px-4 py-2 bg-orange-400 text-neutral-900 font-bold text-lg rounded-md"
        >
          Registrarme
        </button>

        <span>
          Ya eres miembro?{" "}
          <Link
            className=" text-blue-400 font-bold underline"
            href={"/auth/login"}
          >
            Inicia sesión
          </Link>
        </span>
      </AuthForm>
    </AuthLayout>
  );
};

export default Page;
