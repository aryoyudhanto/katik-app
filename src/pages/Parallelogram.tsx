import React from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import parallelogram from "../assets/jajar-genjang.jpeg";
import Button from "../components/Button";
import { CustomInput } from "../components/Input";

const Parallelogram = () => {
  return (
    <Layout
      triangle="text-black"
      parallelogram="border-b-2 border-blue-400 text-blue-400"
    >
      <Card
        name="Luas Jajar Genjang"
        image={parallelogram}
        alt="parallelogram-image-area"
        formula="luas jajar genjang"
        mathForm="L= a x t"
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
        name="Keliling Jajar Genjang"
        image={parallelogram}
        alt="parallelogram-image-Circumference "
        formula="keliling jajar genjang"
        mathForm="K= 2 (AB+BC)"
        explain={
          <>
            <li className="text-lg">AB = Sisi A-B</li>
            <li className="text-lg">BC= Sisi B-C</li>
          </>
        }
        form={
          <form className="w-full">
            <CustomInput
              label="Sisi A-B"
              inputSet="my-2"
              type="number"
              min={0}
            />
            <CustomInput
              label="Sisi B-C"
              inputSet="mb-5"
              type="number"
              min={0}
            />
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

export default Parallelogram;
