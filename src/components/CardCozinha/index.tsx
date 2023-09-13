/* eslint-disable @next/next/no-img-element */
interface CardProps {
  price: number;
  title: string;
  image: string;
  id?: number;
}

export const CardCozinha = ({ price, image, title, id }: CardProps) => {

const status = "Aguardando aprovação";

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-[-10rem]">
      <img
        className="object-cover w-full md:h-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <b>R$:</b> {`${price}.00`}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <b>ID:</b> {id}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <b>Status:</b> {status}
        </p>
        <div className="flex space-x-4">
          <a
            onClick={() => alert("Rejeitar")}
            className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            Rejeitar
          </a>
          <a
            onClick={() => alert("Aceitar")}
            className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Aceitar
          </a>
        </div>
      </div>
    </div>
  );
};
