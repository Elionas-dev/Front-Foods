import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

const editFood = async ({ id, newData }: any) => {
  const response = await axios.put(`${API_URL}/food/${id}`, newData);
  return response.data;
};

export function useEditFood() {
  const queryClient = useQueryClient();

  const mutation = useMutation(editFood, {
    onSuccess: () => {
      // Após a edição bem-sucedida, você pode invalidar a query existente para atualizar os dados
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  const editFoodItem = async ({ id, newData }: any) => {
    try {
      await mutation.mutateAsync({ id, newData });
    } catch (error) {}
  };

  return {
    editFoodItem,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
}
