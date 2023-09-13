import { useEffect, useState } from "react";
import "./index.css";

import { FoodData } from "../../interface/FoodData";
import { CardPedidos } from "../CardPedidos";
import { useFoodData } from "@/hooks/useFoodData";
import { ModalPedidos } from "../ModalPedidos";
import { ModalEditarPedidos } from "../ModalEditarPedidos";

function Pedidos() {
  const { data, refetch } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  return (
    <>
      <div className="min-h-screen relative">
        {/* Botão no canto direito inferior */}
        <button
          onClick={handleOpenModal}
          className="fixed bottom-4 right-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full shadow-lg"
        >
          Novo
        </button>

        {/* Cards em uma grade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-6">
          {data?.map((foodData) => (
            <CardPedidos
              key={foodData.id}
              price={foodData.price}
              title={foodData.title}
              image={foodData.image}
              id={foodData.id}
            />
          ))}
        </div>
      </div>
      <ModalPedidos isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Pedidos;
