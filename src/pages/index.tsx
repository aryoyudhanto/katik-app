import { useState } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import triangle from "../assets/segitiga.jpg";
import Button from "../components/Button";
import { CustomInput } from "../components/Input";

const index = () => {
  const [circumference, setCircumference] = useState<number>(0);
  const [tinggi, setTinggi] = useState<number>(0);
  const [sisiA, setSisiA] = useState<number>(0);
  const [sisiB, setSisiB] = useState<number>(0);
  const [sisiC, setSisiC] = useState<number>(0);
  const [alas, setAlas] = useState<number>(0);
  const [area, setArea] = useState<number>(0);

  function areaTriangle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let res = 0;
    try {
      res += (alas * tinggi) / 2;
      setArea(res);
    } catch (error) {
      alert("Error harap ulang kembali");
    }
  }
  function circumferenceTriangle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let res = 0;
    try {
      res += sisiA + sisiB + sisiC;
      setCircumference(res);
    } catch (error) {
      alert("Error harap ulang kembali");
    }
  }

  function reset() {
    setArea(0);
    setAlas(0);
    setTinggi(0);
    setCircumference(0);
    setSisiA(0);
    setSisiB(0);
    setSisiC(0);
  }
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
          <>
            <form className="w-full" onSubmit={areaTriangle}>
              <CustomInput
                label="Alas (cm)"
                inputSet="my-2"
                type="number"
                min={0}
                onChange={(e) => setAlas(e.target.valueAsNumber)}
              />
              <CustomInput
                label="Tinggi (cm)"
                inputSet="mb-5"
                type="number"
                min={0}
                onChange={(e) => setTinggi(e.target.valueAsNumber)}
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
                onClick={() => reset()}
              />
            </form>
            <p>
              {area === 0 ? null : (
                <>
                  <p className="capitalize text-lg font-semibold mb-2">
                    penjelasan:{" "}
                  </p>
                  <p className="text-lg font-semibold">L= 1/2 x a x t</p>
                  <p className="text-lg font-semibold">
                    L= 1/2 x {alas} x {tinggi}
                  </p>
                  <p className="text-lg font-semibold">L = {area} cm</p>
                </>
              )}
            </p>
          </>
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
          <>
            <form className="w-full" onSubmit={circumferenceTriangle}>
              <CustomInput
                label="Sisi 1 (cm)"
                inputSet="my-2"
                type="number"
                min={0}
                onChange={(e) => setSisiA(e.target.valueAsNumber)}
              />
              <CustomInput
                label="Sisi 2 (cm)"
                inputSet="mb-2"
                type="number"
                min={0}
                onChange={(e) => setSisiB(e.target.valueAsNumber)}
              />
              <CustomInput
                label="Sisi 3 (cm)"
                inputSet="mb-5"
                type="number"
                min={0}
                onChange={(e) => setSisiC(e.target.valueAsNumber)}
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
                onClick={() => reset()}
              />
            </form>
            <p>
              {circumference === 0 ? null : (
                <>
                  <p className="capitalize text-lg font-semibold mb-2">
                    penjelasan:{" "}
                  </p>
                  <p className="text-lg font-semibold">K= s1 + s2 + s3</p>
                  <p className="text-lg font-semibold">
                    K= {sisiA} x {sisiB} x {sisiC}
                  </p>
                  <p className="text-lg font-semibold">K = {circumference} cm</p>
                </>
              )}
            </p>
          </>
        }
      />
    </Layout>
  );
};

export default index;
