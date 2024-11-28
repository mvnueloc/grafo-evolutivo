"use client";

import React from "react";
import { Input, LetterFx } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { Onest } from "next/font/google";
import { main } from "@/info/fetch";

const onest = Onest({
  subsets: ["latin"],
});

export default function Home() {
  const [key, setKey] = useState(0);
  const [value, setValue] = useState("");

  const handleToggle = () => {
    setValue("");
    if (value) {
      main(value).then((result) => {
        console.log(result);
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main
        className={`h-[100vh] flex justify-center items-center ${onest.className}`}>
        <div className="container">
          <section className="animate-pulse flex justify-center text-6xl text-transparent bg-clip-text bg-gradient-to-r to-[#41ccd0] from-[#7d2de6]">
            <LetterFx
              key={key}
              trigger="instant">
              Grafo Evolutivo
            </LetterFx>
          </section>
          <section className="flex justify-center items-center mt-14 space-x-5">
            <div className="w-[40dvw]">
              <Input
                id="example"
                label="Agrega conocimientos..."
                required={true}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handleToggle}
              className="hover:scale-110 transition-all duration-300">
              <span>Enviar</span>
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
