// pages/Cozinha.js
"use client";

import { Kitchen } from "@/components/Cozinha";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Cozinha = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <Kitchen />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default Cozinha;
