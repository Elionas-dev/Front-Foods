import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

const deleteFood = async (foodId: any) => {
  const response = await axios.delete(`${API_URL}/food/${foodId}`);
  return response.data;
};

export function useDeleteFood() {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteFood, {
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  const deleteFoodItem = async (foodId: any) => {
    try {
      await mutation.mutateAsync(foodId);
    } catch (error) {}
  };

  return {
    deleteFoodItem,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
}
