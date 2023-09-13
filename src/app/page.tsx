"use client";

import Pedidos from "@/components/Pedidos";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pedidos />
    </QueryClientProvider>
  );
}
