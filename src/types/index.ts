export interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

export interface ButtonProps {
  texto: string;
  onClick: () => void;
  variante?: "primario" | "peligro" | "neutro";
}

export interface ListaFrutasProps {
  frutas: string[];
}

export interface ListaTareasProps {
  tareas: Tarea[];
}
