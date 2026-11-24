// Importamos React para definir el componente y su tipo funcional.
import React from "react";

// ButtonProps centraliza los tipos de las propiedades que recibe este botón.
import type { ButtonProps } from "../types";

// React.FC<Props> tipa un componente funcional y permite que TypeScript compruebe
// sus propiedades. Se usa si queremos declarar explícitamente ese tipo; es
// opcional, también puede tiparse el parámetro directamente.
// Desestructuramos las propiedades y usamos "primario" como variante por defecto.
export const Button: React.FC<ButtonProps> = ({
  texto,
  onClick,
  variante = "primario",
}) => {
  // Relacionamos cada variante con sus clases de Tailwind CSS.
  // La clave seleccionada más adelante depende del valor de "variante".
  const estilosVariante = {
    primario: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200",
    peligro: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200",
    neutro: "bg-slate-200 hover:bg-slate-300 text-slate-800 shadow-slate-100",
  };

  // Renderizamos un botón HTML y conectamos sus propiedades con las recibidas.
  return (
    <button
      // Ejecutamos la función proporcionada cuando el usuario hace clic.
      onClick={onClick}
      // Combinamos estilos comunes con los específicos de la variante elegida.
      className={`px-4 py-2 rounded-lg font-medium shadow-md cursor-pointer 
        transform transition-all duration-300 ease-in-out 
        hover:-translate-y-0.5 hover:shadow-lg active:scale-95 
        ${estilosVariante[variante]}`}
    >
      {/* Mostramos como contenido del botón el texto recibido por propiedades. */}
      {texto}
    </button>
  );
};
