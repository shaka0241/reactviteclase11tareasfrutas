import React from "react";
import type { ButtonProps } from "../types";

// Botón reutilizable: su aspecto y comportamiento se configuran mediante props.
export const Button: React.FC<ButtonProps> = ({
  texto,
  onClick,
  variante = "primario",
}) => {
  // Cada variante traduce una intención (acción normal, peligrosa o neutra)
  // a las clases visuales correspondientes de Tailwind.
  const estilosVariante = {
    primario: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200",
    peligro: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200",
    neutro: "bg-slate-200 hover:bg-slate-300 text-slate-800 shadow-slate-100",
  };

  return (
    // El evento se delega a la función recibida y la variante selecciona
    // las clases dinámicas que completan los estilos comunes del botón.
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium shadow-md cursor-pointer 
        transform transition-all duration-300 ease-in-out 
        hover:-translate-y-0.5 hover:shadow-lg active:scale-95 
        ${estilosVariante[variante]}`}
    >
      {texto}
    </button>
  );
};
