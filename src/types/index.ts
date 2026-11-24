// Describe la forma de cada tarea para que TypeScript compruebe su uso.
export interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

// Contrato de propiedades del botón: onClick es una función sin argumentos
// y variante es opcional, con un conjunto limitado de valores permitidos.
export interface ButtonProps {
  texto: string;
  onClick: () => void;
  variante?: "primario" | "peligro" | "neutro";
}

// Contrato de datos que necesita cada componente de lista.
export interface ListaFrutasProps {
  frutas: string[];
}

export interface ListaTareasProps {
  tareas: Tarea[];
}
