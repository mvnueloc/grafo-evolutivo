"use client";

import React from "react";
import { Input, LetterFx, Switch } from "@/once-ui/components";
import { useEffect, useState } from "react";

import { main } from "@/info/fetch";
import Graph from "@/component/Graph";
import AnimatedModal from "@/component/AnimatedModal";
import { initialAIRelations } from "@/data/initialRelations";

type Relation = {
  id: number;
  node: string;
  relation: string;
  target: string;
};

export default function Home() {
  const [key, setKey] = useState(0);
  const [value, setValue] = useState("");
  const [browser, setBrowser] = useState(false);
  const [title, setTitle] = useState("evolutivo");
  const [placeHolder, setPlaceHolder] = useState("Agrega conocimientos...");
  const [isOpen, setIsOpen] = useState(false);

  const [relations, setRelations] = useState<Relation[]>(initialAIRelations);

  const handleSend = () => {
    if (value) {
      if (browser) {
        setIsOpen(!isOpen);
      } else {
        main(value).then((result) => {
          console.log(result);
          setRelations((prevRelations) => {
            const newRelations = result.relationships.map(
              (
                rel: { node: string; relation: string; target: string },
                index: number
              ) => ({
                id: prevRelations.length + index + 1,
                node: rel.node,
                relation: rel.relation,
                target: rel.target,
              })
            );
            return [...prevRelations, ...newRelations];
          });
        });
        setValue("");
      }
    }
  };

  const handleSwith = () => {
    setBrowser(!browser);
    if (browser) {
      setPlaceHolder("Agrega conocimientos...");
    } else setPlaceHolder("Escribe tu busqueda...");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className={`h-[100vh] flex justify-center items-center`}>
        <div className="container">
          <section className="animate-pulse flex space-x-3 justify-center text-5xl text-transparent bg-clip-text bg-gradient-to-r to-[#41ccd0] from-[#7d2de6] font-bold">
            <p>Grafo </p>
            <LetterFx
              key={key}
              trigger="instant">
              {title}
            </LetterFx>
          </section>
          <section className="flex justify-center items-center mt-14 space-x-5">
            <div className="w-[40dvw]">
              <Input
                id="example"
                label={placeHolder}
                required={true}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handleSend}
              className="hover:scale-110 transition-all duration-300">
              <span>Enviar</span>
            </button>
          </section>
          <section className="flex justify-center mt-6">
            <Switch
              label="Motor de busqueda"
              description=""
              onToggle={handleSwith}
              isChecked={browser}
            />
          </section>
        </div>
      </main>
      <Graph relations={relations} />
      <AnimatedModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        concept={value}
        setValue={setValue}
        relations={relations}
      />
    </>
  );
}
