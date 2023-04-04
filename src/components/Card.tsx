import React, { FC } from "react";
import Button from "./Button";
import { CustomInput } from "./Input";

interface CardProps {
  image: string;
  alt: string;
}

const Card: FC<CardProps> = ({ image, alt }) => {
  return (
    <div className="card bg-base-100 shadow-xl mt-10">
      <div className="flex w-full h-20 bg-blue-500 rounded-2xl">
        <p className="flex w-full justify-center items-center text-3xl text-white">
          Luas Segitiga
        </p>
      </div>
      <figure className="px-10 pt-10">
        <img src={image} alt={alt} className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-normal text-lg">
          Rumus Luas Segitiga yaitu:{" "}
        </h2>
        <p className="text-center font-bold text-xl">L= 1/2 x a x t</p>
        <p>Dimana: </p>
        <ul>
          <li className="text-lg">L= Luas</li>
          <li className="text-lg">a= Panjang Alas</li>
          <li className="text-lg">t= Tinggi</li>
        </ul>
        <hr />
        <p className="text-center font-bold text-2xl mt-5">Hitung Luas Segitiga</p>
        <div className="card-actions justify-center">
          <form className="w-full">
            <CustomInput label="Alas" inputSet="my-2"/>
            <CustomInput label="Tinggi" inputSet="mb-5"/>
            <Button label="Hitung"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
