# 🌄 Voyage Slider

Un elegante slider de imágenes construido con React y TypeScript, inspirado en destinos de viaje alrededor del mundo. Presenta transiciones suaves, efectos de paralaje y una interfaz moderna.

## ✨ Características

- Slider de imágenes con transiciones 3D
- Efectos de paralaje en el fondo
- Animaciones suaves y elegantes
- Diseño responsivo
- Contador de carga animado
- Tipografía moderna con Archivo y Clash Display
- Totalmente tipado con TypeScript
- Construido con Vite para un desarrollo rápido

## 🚀 Tecnologías Utilizadas

- React 19
- TypeScript
- Vite
- CSS Moderno (Variables CSS, Flexbox, Grid)

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/voyage-slider.git
cd voyage-slider
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🛠️ Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye el proyecto para producción
- `pnpm preview` - Previsualiza la construcción de producción
- `pnpm lint` - Ejecuta el linter

## 🎨 Estructura del Proyecto

```
voyage-slider/
├── src/
│   ├── components/
│   │   ├── Arrow/
│   │   ├── CountUp/
│   │   └── Slide/
│   ├── hooks/
│   ├── types.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## 🖼️ Destinos Incluidos

- Highlands, Escocia
- Machu Picchu, Perú
- Chamonix, Francia

## 🔧 Personalización

El slider puede ser personalizado a través de variables CSS en `App.css`:

```css
:root {
  --slide-width: min(25vw, 300px);
  --slide-aspect: 2 / 3;
  --slide-transition-duration: 800ms;
  --slide-transition-easing: ease;
}
```

## 📝 Licencia

MIT

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 💐 Agradecimientos

- Inspirado en el diseño original de [DevLoop01](https://github.com/devloop01)
- Imágenes de demostración cortesía de sus respectivos autores
