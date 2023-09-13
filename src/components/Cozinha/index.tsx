/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { FoodData } from "../../interface/FoodData";
import { CardCozinha } from "../CardCozinha";
import { useFoodData } from "@/hooks/useFoodData";

export const Kitchen = () => {
  const { data, refetch } = useFoodData();

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[-2rem] p-6">
      {data?.map((foodData) => (
        <CardCozinha
          key={foodData.id}
          price={foodData.price}
          title={foodData.title}
          image={foodData.image}
          id={foodData.id}
        />
      ))}
    </div>
  );
};
