/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useDeleteFood } from "../../hooks/useDeleteFood";
import { ModalEditarPedidos } from "../ModalEditarPedidos";
// import { EditModal } from "../edit-modal/edit-modal";

interface CardProps {
  price: number;
  title: string;
  image: string;
  id?: number;
}

export function CardPedidos({ price, image, title, id }: CardProps) {
  const { deleteFoodItem, isLoading, isError } = useDeleteFood();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleDeleteClick = () => {
    if (window.confirm("Tem certeza que deseja deletar este item?")) {
      // Chama a função de exclusão quando o usuário confirma a deleção
      deleteFoodItem(id);
    }
  };

  const status = "Aguardando aprovação";

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-48 md:h-32"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="mb-3 text-gray-700 dark:text-gray-400">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>R$:</b> {`${price}.00`}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>ID:</b> {id}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>Status:</b> {status}
          </p>
        </div>
        <div className="flex justify-between">
          <a
            onClick={handleDeleteClick}
            className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            Deletar
          </a>
          <a
            onClick={handleOpenModal}
            className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Editar
          </a>
        </div>
      </div>
      <ModalEditarPedidos
        initialData={{ title, price, image }}
        foodId={id}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
