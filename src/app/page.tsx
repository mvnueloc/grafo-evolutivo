"use client";

import React from "react";
import { Input, LetterFx, ToggleButton } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { Onest } from "next/font/google";
import getInfo from "@/info/fetch";

const onest = Onest({
  subsets: ["latin"],
});

export default function Home() {
  const [key, setKey] = useState(0);
  const [value, setValue] = useState("");

  const handleToggle = () => {
    setValue("");
    //   const url = new URL("http://localhost:8080/info");
    //   url.searchParams.append("texto", value);

    //   fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.error("Error:", error));
    console.log(getInfo(value));
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
