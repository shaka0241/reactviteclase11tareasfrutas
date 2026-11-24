// StrictMode ayuda a detectar prácticas problemáticas durante el desarrollo.
import { StrictMode } from 'react'
// createRoot conecta React con el elemento HTML donde se dibuja la aplicación.
import { createRoot } from 'react-dom/client'
// Carga los estilos globales, incluida la directiva de Tailwind CSS.
import './index.css'
// Importa el componente que representa la pantalla principal.
import App from './App.tsx'

// Busca el contenedor definido en index.html y monta dentro el árbol de React.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
