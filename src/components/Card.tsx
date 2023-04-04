import React, { FC } from "react";

interface CardProps {
  name: string;
  image: string;
  alt: string;
  formula: string;
  mathForm: string;
  explain: any;
  form: any;
}

const Card: FC<CardProps> = ({
  name,
  image,
  alt,
  formula,
  mathForm,
  explain,
  form,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl mt-10 border-2 border-blue-500">
      <div className="flex w-full h-20 bg-blue-500 rounded-xl">
        <p className="flex w-full justify-center items-center text-xl md:text-2xl lg:text-3xl text-white">
          {name}
        </p>
      </div>
      <figure className="px-10 pt-10">
        <img src={image} alt={alt} className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-normal text-sm md:text-lg">
          Rumus {formula} yaitu:{" "}
        </h2>
        <p className="text-center font-bold text-base md:text-xl">{mathForm}</p>
        <p className="text-sm md:text-lg">Dimana: </p>
        <ul>{explain}</ul>
        <hr />
        <p className="text-center font-bold text-lg md:text-2xl my-5 capitalize">
          Hitung {formula}
        </p>
        <div className="card-actions justify-center">{form}</div>
      </div>
    </div>
  );
};

export default Card;
