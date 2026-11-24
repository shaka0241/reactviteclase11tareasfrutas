export interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

export interface ButtonProps {
  texto: string;
  onClick: () => void;
  variante?: "primario" | "secundario" | "peligro";
}

export interface ListaFrutasProps {
  frutas: string[];
}

export interface ListaTareasProps {
  tareas: Tarea[];
}
