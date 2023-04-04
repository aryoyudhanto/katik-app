import { useState } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import parallelogram from "../assets/jajar-genjang.jpeg";
import Button from "../components/Button";
import { CustomInput } from "../components/Input";

const Parallelogram = () => {
  const [circumference, setCircumference] = useState<number>(0);
  const [tinggi, setTinggi] = useState<number>(0);
  const [sisiA, setSisiA] = useState<number>(0);
  const [sisiB, setSisiB] = useState<number>(0);
  const [alas, setAlas] = useState<number>(0);
  const [area, setArea] = useState<number>(0);

  function areaParallelogram(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let res = 0;
    try {
      res += alas * tinggi;
      setArea(res);
    } catch (error) {
      alert("Error harap ulang kembali");
    }
  }

  function circumferenceParallelogram(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let res = 0;
    try {
      res += 2*(sisiA + sisiB);
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
  }

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
          <>
            <form className="w-full" onSubmit={areaParallelogram}>
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
                  <p className="text-lg font-semibold">L= a x t</p>
                  <p className="text-lg font-semibold">
                    L= {alas} x {tinggi}
                  </p>
                  <p className="text-lg font-semibold">L = {area} cm</p>
                </>
              )}
            </p>
          </>
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
          <>
          <form className="w-full" onSubmit={circumferenceParallelogram}>
            <CustomInput
              label="Sisi A-B (cm)"
              inputSet="my-2"
              type="number"
              min={0}
              onChange={(e) => setSisiA(e.target.valueAsNumber)}
            />
            <CustomInput
              label="Sisi B-C (cm)"
              inputSet="mb-5"
              type="number"
              min={0}
              onChange={(e) => setSisiB(e.target.valueAsNumber)}
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
                  <p className="text-lg font-semibold">K= 2 (AB+BC)</p>
                  <p className="text-lg font-semibold">
                    K= 2 ({sisiA} + {sisiB} )
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

export default Parallelogram;
