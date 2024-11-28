type Relation = {
  id: number;
  node: string;
  relation: string;
  target: string;
};

export const initialAIRelations: Relation[] = [
    { id: 1, node: "aprendizaje", relation: "tiene", target: "tecnicas" },
    { id: 2, node: "tecnicas", relation: "incluye", target: "supervisado" },
    { id: 3, node: "tecnicas", relation: "incluye", target: "nosupervisado" },
    { id: 4, node: "tecnicas", relation: "incluye", target: "refuerzo" },
  
    { id: 5, node: "supervisado", relation: "usa", target: "clasificacion" },
    { id: 6, node: "supervisado", relation: "usa", target: "regresion" },
  
    { id: 7, node: "nosupervisado", relation: "usa", target: "agrupamiento" },
    { id: 8, node: "nosupervisado", relation: "usa", target: "reduccion" },
  
    { id: 9, node: "refuerzo", relation: "modelo", target: "recompensa" },
    { id: 10, node: "refuerzo", relation: "aplica", target: "entrenamiento" },
  
    { id: 11, node: "aprendizaje", relation: "requiere", target: "datos" },
    { id: 12, node: "datos", relation: "tipos", target: "estructurado" },
    { id: 13, node: "datos", relation: "tipos", target: "no-estructurado" },
  
    { id: 14, node: "aprendizaje", relation: "herramientas", target: "python" },
    { id: 15, node: "aprendizaje", relation: "herramientas", target: "r" },
  
    { id: 16, node: "python", relation: "librerias", target: "scikit" },
    { id: 17, node: "python", relation: "librerias", target: "tensorflow" },
    { id: 18, node: "python", relation: "librerias", target: "pytorch" },
  
    { id: 19, node: "clasificacion", relation: "ejemplos", target: "imagenes" },
    { id: 20, node: "clasificacion", relation: "ejemplos", target: "texto" },
  
    { id: 21, node: "agrupamiento", relation: "tecnicas", target: "kmeans" },
    { id: 22, node: "agrupamiento", relation: "tecnicas", target: "jerarquico" },
  ];
