"use server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main(texto: string) {
  const chatCompletion = await fetchInfo(texto);
  const content = chatCompletion.choices[0]?.message?.content || "";

  let jsonResponse;
  try {
    jsonResponse = JSON.parse(content);
  } catch (error) {
    console.error("Error al parsear el JSON:", error);
    jsonResponse = { error: "Error al parsear el JSON" };
  }

  //   console.log(jsonResponse);

  return jsonResponse;
}

export async function fetchInfo(texto: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Genera un grafo de conocimiento a partir del siguiente texto. El grafo debe contener nodos que representen personas, eventos y conceptos importantes del texto, y relaciones entre esos nodos, que sean muy sencillos de máximo 2 palabras.
      
          El formato de salida debe ser un JSON que siga este esquema exactamente:
          {
              "relationships": [
                  {
                      "node": "",
                      "relation": "",
                      "target": ""
                  },
                  {
                      "node": "",
                      "relation": "",
                      "target": ""
                  }
              ]
          }
      
          La respuesta debe contener:
          1. Un nodo (persona, concepto, evento, etc.)
          2. Una relación (por ejemplo: 'es', 'ocurrió', 'trabajó', etc.)
          3. Un nodo relacionado (que puede ser un lugar, un evento, otro concepto, etc.)
      
          El texto a analizar es el siguiente:
          ${texto}`,
      },
    ],
    model: "llama-3.1-8b-instant",
    response_format: { type: "json_object" },
  });
}
