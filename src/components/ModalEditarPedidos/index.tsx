// Modal.js
import { useFoodDataMutate } from "@/hooks/useFoodDataMutate";
import React, { useEffect, useState } from "react";
import { FoodData } from "../../interface/FoodData";
import { useEditFood } from "@/hooks/useEditFood";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ value, updateValue, ...rest }: InputProps) => {
  return (
    <>
      <input
        {...rest}
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

interface ModalPedidosProps {
  initialData: FoodData;
  foodId?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalEditarPedidos = ({
  isOpen,
  onClose,
  initialData,
  foodId,
}: ModalPedidosProps) => {
  const [editedTitle, setEditedTitle] = useState(initialData.title);
  const [editedPrice, setEditedPrice] = useState(initialData.price);
  const [editedImage, setEditedImage] = useState(initialData.image);
  const { editFoodItem, isLoading } = useEditFood();

  const submit = () => {
    const foodData: FoodData = {
      title: editedTitle,
      price: editedPrice,
      image: editedImage,
    };
    if (foodId !== undefined) {
      editFoodItem({ id: foodId, newData: foodData });
      onClose();
    }
  };
  return (
    <>
      {isOpen && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow p-6 w-1/4">
            {/* Conteúdo do Modal */}
            <h3 className="text-xl font-semibold text-gray-900">
              Cadastre um novo pedido
            </h3>
            <p className="text-base text-gray-500">
              <form>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <div className="relative">
                    <Input
                      type="input"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Nome do produto"
                      required
                      value={editedTitle}
                      updateValue={setEditedTitle}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="input"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Valor"
                      required
                      value={editedPrice}
                      updateValue={setEditedPrice}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="input"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Imagem URL"
                      required
                      value={editedImage}
                      updateValue={setEditedImage}
                    />
                  </div>
                </div>
              </form>
            </p>

            <div className="mt-4 flex justify-end">
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
                  onClick={submit}
                >
                  {isLoading ? "Criando..." : "Criar Pedido"}
                </button>
                <button
                  type="button"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
                  onClick={onClose}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
