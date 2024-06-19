"use client";
import React, { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import Icon from "../components/icon/Icon";
import Tabs from "../components/tabs/Tabs";
import TabItem from "../components/tabs/TabItem";
import { useRouter } from "next/navigation";

const layout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const userDate = new Date(user?.createdAt!).toLocaleDateString("es");
  const router = useRouter();

  const logout = (): void => {
    localStorage.removeItem(process.env.NEXT_PUBLIC_AUTH_USER!);
    router.push("/auth/login");
  };
  return (
    <div className="py-4 px-6 items-center gap-2 bg-neutral-800 min-h-screen ">
      <div className="container p-6 flex flex-col gap-4">
        <h2>Mi cuenta</h2>
        <div className="py-4 flex flex-col justify-center items-center gap-2">
          <Icon name="person" variant="outline" />
          <h2 className=" text-xxl">{user?.username}</h2>
          <h5>
            {user?.firstName} {user?.lastName}
          </h5>
          <p className=" text-neutral-200">Miembro desde {userDate} </p>
        </div>
        <div className=" border-b-red-500 border-b-2 container w-full flex justify-between">
          <Tabs>
            <TabItem href="/pedidos">Mis Pedidos</TabItem>
            <TabItem href="/wishlist">Lista de deseos</TabItem>
            <TabItem href="/account/addresses">Direcciones</TabItem>
          </Tabs>
          <Tabs>
            <TabItem href="/account/edit">
              <Icon name="edit" />
              Editar Perfil
            </TabItem>
            <TabItem onClick={logout}>
              <Icon name="logout" />
              Cerrar sesión
            </TabItem>
          </Tabs>
        </div>
        <div className="container p-6">{children}</div>
      </div>
    </div>
  );
};

export default layout;
