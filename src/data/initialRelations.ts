type Relation = {
  id: number;
  node: string;
  relation: string;
  target: string;
};

export const initialAIRelations: Relation[] = [
  // Aprendizaje
  { id: 1, node: "aprendizaje", relation: "tiene", target: "tecnicas" },
  { id: 2, node: "tecnicas", relation: "incluye", target: "supervisado" },
  { id: 3, node: "tecnicas", relation: "incluye", target: "nosupervisado" },
  { id: 4, node: "tecnicas", relation: "incluye", target: "refuerzo" },
  { id: 5, node: "aprendizaje", relation: "aplicaciones", target: "inteligencia-artificial" },
  { id: 6, node: "aprendizaje", relation: "relevante-en", target: "ciencia-de-datos" },

  // Supervisado
  { id: 7, node: "supervisado", relation: "usa", target: "clasificacion" },
  { id: 8, node: "supervisado", relation: "usa", target: "regresion" },
  { id: 9, node: "supervisado", relation: "ejemplo", target: "prediccion-de-ventas" },

  // No supervisado
  { id: 10, node: "nosupervisado", relation: "usa", target: "agrupamiento" },
  { id: 11, node: "nosupervisado", relation: "usa", target: "reduccion" },
  { id: 12, node: "nosupervisado", relation: "ejemplo", target: "segmentacion-clientes" },

  // Refuerzo
  { id: 13, node: "refuerzo", relation: "modelo", target: "recompensa" },
  { id: 14, node: "refuerzo", relation: "aplica", target: "juegos" },
  { id: 15, node: "refuerzo", relation: "aplicacion", target: "robotica" },

  // Inteligencia Artificial
  { id: 16, node: "inteligencia-artificial", relation: "subcampos", target: "aprendizaje-automatico" },
  { id: 17, node: "inteligencia-artificial", relation: "subcampos", target: "vision-computadora" },
  { id: 18, node: "inteligencia-artificial", relation: "subcampos", target: "procesamiento-lenguaje-natural" },
  { id: 19, node: "inteligencia-artificial", relation: "conceptos", target: "heuristicas" },
  { id: 20, node: "inteligencia-artificial", relation: "conceptos", target: "redes-neuronales" },

  // Programación
  { id: 21, node: "programacion", relation: "tiene", target: "lenguajes" },
  { id: 22, node: "lenguajes", relation: "incluye", target: "python" },
  { id: 23, node: "lenguajes", relation: "incluye", target: "java" },
  { id: 24, node: "lenguajes", relation: "incluye", target: "c" },
  { id: 25, node: "lenguajes", relation: "incluye", target: "javascript" },
  { id: 26, node: "lenguajes", relation: "incluye", target: "ruby" },

  // Python
  { id: 27, node: "python", relation: "librerias", target: "numpy" },
  { id: 28, node: "python", relation: "librerias", target: "pandas" },
  { id: 29, node: "python", relation: "librerias", target: "scikit-learn" },
  { id: 30, node: "python", relation: "librerias", target: "matplotlib" },

  // Bases de Datos
  { id: 31, node: "bases-de-datos", relation: "tipos", target: "relacional" },
  { id: 32, node: "bases-de-datos", relation: "tipos", target: "no-relacional" },
  { id: 33, node: "relacional", relation: "ejemplos", target: "mysql" },
  { id: 34, node: "relacional", relation: "ejemplos", target: "postgresql" },
  { id: 35, node: "no-relacional", relation: "ejemplos", target: "mongodb" },
  { id: 36, node: "no-relacional", relation: "ejemplos", target: "redis" },

  // Algoritmos
  { id: 37, node: "algoritmos", relation: "tipos", target: "ordenamiento" },
  { id: 38, node: "ordenamiento", relation: "ejemplos", target: "burbuja" },
  { id: 39, node: "ordenamiento", relation: "ejemplos", target: "quicksort" },
  { id: 40, node: "ordenamiento", relation: "ejemplos", target: "mergesort" },
  { id: 41, node: "algoritmos", relation: "tipos", target: "búsqueda" },
  { id: 42, node: "búsqueda", relation: "ejemplos", target: "binaria" },
  { id: 43, node: "búsqueda", relation: "ejemplos", target: "lineal" },

  // Herramientas de Desarrollo
  { id: 44, node: "herramientas", relation: "incluye", target: "git" },
  { id: 45, node: "herramientas", relation: "incluye", target: "docker" },
  { id: 46, node: "herramientas", relation: "incluye", target: "vscode" },

  // Matemáticas para IA
  { id: 47, node: "matematicas", relation: "conceptos", target: "algebra-lineal" },
  { id: 48, node: "matematicas", relation: "conceptos", target: "calculo" },
  { id: 49, node: "matematicas", relation: "conceptos", target: "estadistica" },

  // Ampliación de conceptos avanzados
  { id: 50, node: "aprendizaje-profundo", relation: "usa", target: "redes-convolucionales" },
  { id: 51, node: "aprendizaje-profundo", relation: "usa", target: "transformers" },
  { id: 52, node: "procesamiento-lenguaje-natural", relation: "tareas", target: "traduccion-automatica" },
  { id: 53, node: "procesamiento-lenguaje-natural", relation: "tareas", target: "clasificacion-de-texto" },
  { id: 54, node: "procesamiento-lenguaje-natural", relation: "modelos", target: "bert" },

  // Ética en IA
  { id: 55, node: "etica", relation: "temas", target: "privacidad" },
  { id: 56, node: "etica", relation: "temas", target: "sesgo-algoritmico" },
  { id: 57, node: "etica", relation: "temas", target: "transparencia" },

  // Conexión entre áreas
  { id: 58, node: "aprendizaje", relation: "aplicacion-en", target: "biomedicina" },
  { id: 59, node: "aprendizaje", relation: "aplicacion-en", target: "finanzas" },
  { id: 60, node: "aprendizaje", relation: "aplicacion-en", target: "marketing" },

  // Más herramientas
  { id: 61, node: "docker", relation: "concepto", target: "contenedores" },
  { id: 62, node: "git", relation: "comando", target: "commit" },
  { id: 63, node: "git", relation: "comando", target: "push" },
  { id: 64, node: "git", relation: "comando", target: "merge" },

  // Frameworks adicionales
  { id: 65, node: "javascript", relation: "frameworks", target: "react" },
  { id: 66, node: "javascript", relation: "frameworks", target: "angular" },
  { id: 67, node: "javascript", relation: "frameworks", target: "vue" },

  // Sistemas Operativos
  { id: 68, node: "sistemas-operativos", relation: "conceptos", target: "procesos" },
  { id: 69, node: "sistemas-operativos", relation: "conceptos", target: "hilos" },
  { id: 70, node: "sistemas-operativos", relation: "conceptos", target: "memoria" },

  // Sistemas Operativos
  { id: 71, node: "sistemas-operativos", relation: "conceptos", target: "sistemas-de-archivos" },
  { id: 72, node: "sistemas-operativos", relation: "conceptos", target: "planificacion" },
  { id: 73, node: "sistemas-operativos", relation: "conceptos", target: "interbloqueos" },
  { id: 74, node: "sistemas-operativos", relation: "herramientas", target: "bash" },
  { id: 75, node: "sistemas-operativos", relation: "herramientas", target: "powershell" },

  // Redes
  { id: 76, node: "redes", relation: "protocolos", target: "http" },
  { id: 77, node: "redes", relation: "protocolos", target: "https" },
  { id: 78, node: "redes", relation: "protocolos", target: "ftp" },
  { id: 79, node: "redes", relation: "conceptos", target: "dns" },
  { id: 80, node: "redes", relation: "conceptos", target: "tcp" },
  { id: 81, node: "redes", relation: "conceptos", target: "udp" },
  { id: 82, node: "redes", relation: "conceptos", target: "ip" },

  // Seguridad Informática
  { id: 83, node: "seguridad-informatica", relation: "conceptos", target: "cifrado" },
  { id: 84, node: "seguridad-informatica", relation: "conceptos", target: "firewall" },
  { id: 85, node: "seguridad-informatica", relation: "conceptos", target: "vpn" },
  { id: 86, node: "seguridad-informatica", relation: "conceptos", target: "phishing" },
  { id: 87, node: "seguridad-informatica", relation: "conceptos", target: "malware" },
  { id: 88, node: "seguridad-informatica", relation: "conceptos", target: "spyware" },
  { id: 89, node: "seguridad-informatica", relation: "conceptos", target: "ransomware" },
  { id: 90, node: "seguridad-informatica", relation: "herramientas", target: "wireshark" },
  { id: 91, node: "seguridad-informatica", relation: "herramientas", target: "nmap" },

  // Desarrollo Web
  { id: 92, node: "desarrollo-web", relation: "tecnologias", target: "html" },
  { id: 93, node: "desarrollo-web", relation: "tecnologias", target: "css" },
  { id: 94, node: "desarrollo-web", relation: "tecnologias", target: "javascript" },
  { id: 95, node: "desarrollo-web", relation: "frameworks", target: "react" },
  { id: 96, node: "desarrollo-web", relation: "frameworks", target: "vue" },
  { id: 97, node: "desarrollo-web", relation: "frameworks", target: "angular" },
  { id: 98, node: "desarrollo-web", relation: "herramientas", target: "webpack" },
  { id: 99, node: "desarrollo-web", relation: "herramientas", target: "babel" },

  // Cloud Computing
  { id: 100, node: "cloud-computing", relation: "servicios", target: "iaas" },
  { id: 101, node: "cloud-computing", relation: "servicios", target: "paas" },
  { id: 102, node: "cloud-computing", relation: "servicios", target: "saas" },
  { id: 103, node: "cloud-computing", relation: "plataformas", target: "aws" },
  { id: 104, node: "cloud-computing", relation: "plataformas", target: "azure" },
  { id: 105, node: "cloud-computing", relation: "plataformas", target: "google-cloud" },
  { id: 106, node: "cloud-computing", relation: "conceptos", target: "virtualizacion" },
  { id: 107, node: "cloud-computing", relation: "conceptos", target: "escalabilidad" },

  // Algoritmos avanzados
  { id: 108, node: "algoritmos", relation: "avanzados", target: "divide-y-venceras" },
  { id: 109, node: "algoritmos", relation: "avanzados", target: "backtracking" },
  { id: 110, node: "algoritmos", relation: "avanzados", target: "programacion-dinamica" },
  { id: 111, node: "algoritmos", relation: "avanzados", target: "algoritmo-genetico" },

  // Matemáticas avanzadas
  { id: 112, node: "matematicas", relation: "conceptos", target: "optimizacion" },
  { id: 113, node: "matematicas", relation: "conceptos", target: "teoria-de-grafos" },
  { id: 114, node: "matematicas", relation: "conceptos", target: "ecuaciones-diferenciales" },

  // Desarrollo móvil
  { id: 115, node: "desarrollo-movil", relation: "plataformas", target: "android" },
  { id: 116, node: "desarrollo-movil", relation: "plataformas", target: "ios" },
  { id: 117, node: "desarrollo-movil", relation: "frameworks", target: "flutter" },
  { id: 118, node: "desarrollo-movil", relation: "frameworks", target: "react-native" },
  { id: 119, node: "desarrollo-movil", relation: "lenguajes", target: "kotlin" },
  { id: 120, node: "desarrollo-movil", relation: "lenguajes", target: "swift" },

  // Inteligencia Artificial (IA) avanzada
  { id: 121, node: "inteligencia-artificial", relation: "tecnicas", target: "aprendizaje-por-transferencia" },
  { id: 122, node: "inteligencia-artificial", relation: "tecnicas", target: "aprendizaje-federado" },
  { id: 123, node: "inteligencia-artificial", relation: "tecnicas", target: "generative-adversarial-networks" },

  // Big Data
  { id: 124, node: "big-data", relation: "herramientas", target: "hadoop" },
  { id: 125, node: "big-data", relation: "herramientas", target: "spark" },
  { id: 126, node: "big-data", relation: "conceptos", target: "mapreduce" },
  { id: 127, node: "big-data", relation: "conceptos", target: "procesamiento-en-lote" },
  { id: 128, node: "big-data", relation: "conceptos", target: "procesamiento-en-tiempo-real" },

  // Robots
  { id: 129, node: "robotica", relation: "conceptos", target: "cinematica" },
  { id: 130, node: "robotica", relation: "conceptos", target: "control" },
  { id: 131, node: "robotica", relation: "conceptos", target: "percepcion" },
  { id: 132, node: "robotica", relation: "conceptos", target: "autonomia" },

  // Gestión de proyectos
  { id: 133, node: "gestion-de-proyectos", relation: "metodologias", target: "agile" },
  { id: 134, node: "gestion-de-proyectos", relation: "metodologias", target: "scrum" },
  { id: 135, node: "gestion-de-proyectos", relation: "metodologias", target: "kanban" },
  { id: 136, node: "gestion-de-proyectos", relation: "herramientas", target: "jira" },
  { id: 137, node: "gestion-de-proyectos", relation: "herramientas", target: "trello" },

  // Criptografía
  { id: 138, node: "criptografia", relation: "conceptos", target: "cifrado-simetrico" },
  { id: 139, node: "criptografia", relation: "conceptos", target: "cifrado-asimetrico" },
  { id: 140, node: "criptografia", relation: "conceptos", target: "hashing" },
  { id: 141, node: "criptografia", relation: "protocolos", target: "ssl" },
  { id: 142, node: "criptografia", relation: "protocolos", target: "tls" },
];
