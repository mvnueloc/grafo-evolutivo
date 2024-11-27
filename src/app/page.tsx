"use client";

import React from "react";
import { Input, LetterFx } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
});

export default function Home() {
  const [key, setKey] = useState(0);

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
          <section className="flex justify-center items-center mt-14">
            <div className="w-[75dvw]">
              <Input
                id="example"
                label="Agrega conocimientos..."
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
