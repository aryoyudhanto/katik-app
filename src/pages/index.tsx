import React from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import triangle from "../assets/segitiga.jpg";
import Button from "../components/Button";
import { CustomInput } from "../components/Input";

const index = () => {
  return (
    <Layout
      triangle="border-b-2 border-blue-400 text-blue-400"
      parallelogram="text-black"
    >
      <Card
        name="Luas Segitiga"
        image={triangle}
        alt="triangle-image-area"
        formula="luas segitiga"
        mathForm="L= 1/2 x a x t"
        explain={
          <>
            <li className="text-lg">L = Luas</li>
            <li className="text-lg">a= Panjang Alas</li>
            <li className="text-lg">t = Tinggi</li>
          </>
        }
        form={
          <form className="w-full">
            <CustomInput label="Alas" inputSet="my-2" type="number" min={0} />
            <CustomInput label="Tinggi" inputSet="mb-5" type="number" min={0} />
            <Button
              label="Hitung"
              type="submit"
              buttonSet="bg-blue-500 hover:bg-blue-600"
            />
            <Button
              label="Reset"
              type="reset"
              buttonSet="bg-yellow-500 hover:bg-yellow-600"
            />
          </form>
        }
      />
      <Card
        name="Keliling Segitiga"
        image={triangle}
        alt="triangle-image-Circumference "
        formula="keliling segitiga"
        mathForm="K= s1 + s2 + s3"
        explain={
          <>
            <li className="text-lg">s1 = Sisi A-B</li>
            <li className="text-lg">s2= Sisi B-C</li>
            <li className="text-lg">s3= Sisi C-A</li>
          </>
        }
        form={
          <form className="w-full">
            <CustomInput label="Sisi 1" inputSet="my-2" type="number" min={0} />
            <CustomInput label="Sisi 2" inputSet="mb-2" type="number" min={0} />
            <CustomInput label="Sisi 3" inputSet="mb-5" type="number" min={0} />
            <Button
              label="Hitung"
              type="submit"
              buttonSet="bg-blue-500 hover:bg-blue-600"
            />
            <Button
              label="Reset"
              type="reset"
              buttonSet="bg-yellow-500 hover:bg-yellow-600"
            />
          </form>
        }
      />
    </Layout>
  );
};

export default index;
