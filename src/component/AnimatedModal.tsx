"use client";
import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  concept: string;
  setValue: (value: string) => void;
  relations: Relation[];
}

interface Relation {
  id: number;
  node: string;
  relation: string;
  target: string;
}

const AnimatedModal: FC<AnimatedModalProps> = ({
  isOpen,
  setIsOpen,
  concept,
  setValue,
  relations,
}) => {
  // console.log(relations);

  function buscarEnGrafo(palabra: string): Relation[] {
    return relations.filter(
      (rel) =>
        rel.node.includes(palabra) ||
        rel.relation.includes(palabra) ||
        rel.target.includes(palabra)
    );
  }

  const resultados = buscarEnGrafo(concept);

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setValue("");
                }}
                className="absolute top-4 right-4 text-gray-100 hover:text-gray-300">
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">Motor de busqueda</h2>
              <p className="text-gray-400 mb-4">{concept}</p>
              <div className="">
                {resultados.map((item) => (
                  <p key={item.id}>
                    ➤ {item.node} {item.relation} {item.target}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AnimatedModal;
