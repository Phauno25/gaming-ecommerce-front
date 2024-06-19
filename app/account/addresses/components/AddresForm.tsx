import InputField from "@/app/components/InputField";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserAddress } from "../../types/types";
import { useAuth } from "@/app/hooks/useAuth";
import { addressService } from "../../api/address";

const AddresForm: React.FC<{ address: UserAddress | null }> = ({
  address: selectedAddress,
}) => {
  const { user } = useAuth();
  const { city, name, title, state, zip_code, address, id } =
    selectedAddress || {};

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserAddress>({
    defaultValues: {
      title: title,
      name: name,
      address: address,
      city: city,
      state: state,
      zip_code: zip_code,
    },
  });

  const onSubmit: SubmitHandler<UserAddress> = (data) => {
    if (id) {
      const body = { ...data, id: id, ...{ user: user!.id } };
      const response = addressService.editAddress(id, body, user!.token);
    } else {
    }
  };

  return (
    <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <InputField
            label="Título de la direccion"
            placeholder="Ej: Oficina/Casa"
            error={errors.title !== undefined}
            helperText={errors.title?.message}
            {...register("title", {
              required: {
                value: true,
                message: "Este campo no puede quedar vacío",
              },
            })}
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="Calle"
            placeholder="Nombre de la calle"
            error={errors.name !== undefined}
            helperText={errors.name?.message}
            {...register("name", {
              required: {
                value: true,
                message: "Este campo no puede quedar vacío",
              },
            })}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <InputField
            label="Número"
            placeholder="Número de la calle"
            error={errors.address !== undefined}
            helperText={errors.address?.message}
            {...register("address", {
              required: {
                value: true,
                message: "Este campo no puede quedar vacío",
              },
            })}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <InputField
            label="Código Postal"
            placeholder="Ej: 1828"
            error={errors.zip_code !== undefined}
            helperText={errors.zip_code?.message}
            {...register("zip_code", {
              required: {
                value: true,
                message: "Este campo no puede quedar vacío",
              },
            })}
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="Barrio"
            placeholder="Barrio de tu localidad"
            error={errors.state !== undefined}
            helperText={errors.state?.message}
            {...register("state")}
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="Ciudad"
            placeholder="Ej: Oficina/Casa"
            error={errors.city !== undefined}
            helperText={errors.city?.message}
            {...register("city", {
              required: {
                value: true,
                message: "Este campo no puede quedar vacío",
              },
            })}
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="me-1 -ms-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Confirmar Dirección
      </button>
    </form>
  );
};

export default AddresForm;
