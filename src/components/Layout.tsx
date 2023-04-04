import React, { FC, LabelHTMLAttributes } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

interface LayoutProps extends LabelHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  triangle: string;
  parallelogram: string;
}

const Layout: FC<LayoutProps> = ({ children, triangle, parallelogram }) => {
  return (
    <div className="z-0 w-full h-screen flex flex-col overflow-auto bg-[#f5f5f5]">
      <Navbar />
      <section className="h-screen overflow-auto">
        <section className="m-5 md:m-10">
          <article>
            <h1 className="text-3xl md:text-4xl text-center font-bold">
              Welcome to Katik{" "}
            </h1>
            <p className="text-sm md:text-lg mt-10 text-center">
              Hai sobat, selamat datang di Katik :)
            </p>
            <p className="text-sm md:text-lg text-center mb-16">
              Sebuah web app sederhana yang berfungsi untuk menghitung nilai
              luas dan keliling bangun datar.
            </p>
          </article>

          <section className="m-3 w-full flex justify-center">
            <div
              className={`justify-start mx-5 w-1/2 md:w-1/4 lg:w-1/6 hover:cursor-pointer ${triangle}`}
            >
              <Link to={"/"}>
                <div className={`text-center ${triangle} font-medium`}>
                  Segitiga
                </div>
              </Link>
            </div>
            <div
              className={`justify-start mx-5 w-1/2 md:w-1/4 lg:w-1/6 hover:cursor-pointer ${parallelogram}`}
            >
              <Link to={"/parallelogram"}>
                <div className={`text-center ${parallelogram} font-medium`}>
                  Jajar Genjang
                </div>
              </Link>
            </div>
          </section>
          <section className="my-5">{children}</section>
        </section>
      </section>
    </div>
  );
};

export default Layout;
