"use client";

import { useAuth } from "@/app/hooks/useAuth";
import React, { useEffect, useState } from "react";
import { addressService } from "../api/address";
import { UserAddress } from "../types/types";
import Modal from "@/app/components/modal/Modal";
import AddresForm from "./components/AddresForm";

const page = () => {
  const { user } = useAuth();
  const [addreses, setAddresses] = useState<UserAddress[]>([]);
  const [selectedAddres, setSelectedAddres] = useState<UserAddress | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getAddress = async () => {
      if (user) {
        const data: UserAddress[] = await addressService.getAllByUserId(
          user.id,
          user.token
        );
        console.log(data);
        setAddresses(data);
      }
    };
    getAddress();
    return () => {};
  }, [user]);

  const handleEdit = (address: UserAddress) => {
    setModalOpen(true);
    console.log("CILICK");
    setSelectedAddres(address);
  };

  return addreses.length > 0 ? (
    <>
      <Modal isOpen={modalOpen} title="">
        <AddresForm address={selectedAddres} />
      </Modal>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="row" className="px-6 py-3">
                Mis direcciones
              </th>
              <th className="px-6 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {addreses.map((address) => {
              const { name, title, city, zip_code, address: number } = address;
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="ps-3">
                      <div className="text-base font-semibold">{title}</div>
                      <div className="font-normal text-gray-500">
                        {name} {number} - {city} - CP {zip_code}
                      </div>
                    </div>
                  </th>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(address)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <p>No tienes direcciones cargadas aun</p>
  );
};

export default page;
