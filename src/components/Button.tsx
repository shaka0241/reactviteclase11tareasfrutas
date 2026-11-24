import type { ButtonProps } from "../types";

export const Button = ({
  texto,
  onClick,
  variante = "primario",
}: ButtonProps) => {
  const estilosVariante = {
    primario: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30",
    secundario:
      "bg-slate-700 hover:bg-slate-800 text-white shadow-slate-500/30",
    peligro: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/30",
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2.5 rounded-lg font-medium shadow-md cursor-pointer
        transition-all duration-200 ease-in-out
        hover:-translate-y-0.5 hover:shadow-lg active:scale-95
        ${estilosVariante[variante]}
      `}
    >
      {texto}
    </button>
  );
};
