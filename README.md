# 🍖 Grill Brasas - Página Web del Restaurante

Página web moderna y responsive para el restaurante Grill Brasas, con menú por categorías, carrusel de imágenes, sección de contacto con WhatsApp y TikTok, y mapa de Google Maps.

## ✨ Características

- **Carrusel de Imágenes**: Imágenes que cambian automáticamente en la sección de inicio
- **Menú por Categorías**: Sistema de filtrado por categorías (Carnes, Pescados, Ensaladas, Bebidas, Postres)
- **Contacto Rápido**: Botones de un solo click para WhatsApp y TikTok
- **Mapa Interactivo**: Integración de Google Maps para mostrar la ubicación del restaurante
- **Diseño Responsive**: Adaptado para dispositivos móviles, tablets y desktop
- **Navegación Suave**: Scroll suave entre secciones

## 🚀 Cómo Usar

1. Abre el archivo `index.html` en tu navegador
2. Personaliza el contenido según tus necesidades

## ⚙️ Personalización

### 1. Agregar tu Logo

Agrega tu archivo de logo como `logo.png` en la raíz del proyecto. El logo aparecerá al lado de "GRILL BRASAS" en la barra de navegación.

**Tamaños del logo:**
- **Tamaño recomendado**: 200x200px o proporción similar (cuadrado)
- **Altura de visualización**: 50px (se ajusta automáticamente)
- **En móviles**: 40px de altura (tablets)
- **En móviles pequeños**: 35px de altura (teléfonos)
- **Formato**: PNG con fondo transparente
- **Peso**: Optimizar para web (máximo 100KB)

### 2. Favicon

Se ha creado un favicon básico (`favicon.svg`). Para personalizarlo:

1. **Opción 1**: Reemplaza `favicon.svg` con tu propio diseño SVG
2. **Opción 2**: Crea un `favicon.png` para mejor compatibilidad

**Tamaños del favicon:**
- **SVG**: Tamaño vectorial (recomendado, se escala automáticamente)
- **PNG**: 32x32px (tamaño estándar) o 64x64px (alta resolución)
- **Formato**: SVG o PNG
- **Peso**: Máximo 10KB para mejor rendimiento

### 3. Cambiar el Número de WhatsApp

En `index.html`, busca la línea con el enlace de WhatsApp y reemplaza el número:

```html
<a href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20hacer%20una%20reserva"
```

Reemplaza `1234567890` con tu número de WhatsApp (sin espacios ni caracteres especiales, solo números con código de país).

### 4. Cambiar el Enlace de TikTok

En `index.html`, busca el enlace de TikTok:

```html
<a href="https://www.tiktok.com/@grillbrasas"
```

Reemplaza `@grillbrasas` con tu usuario de TikTok.

### 5. Personalizar el Mapa de Google Maps

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca la ubicación de tu restaurante
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código iframe
5. Reemplaza el iframe en `index.html` en la sección de contacto

O modifica directamente las coordenadas en el iframe existente:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7854!2d-74.0721!3d4.7110!..."
```

### 6. Cambiar las Imágenes del Carrusel

Reemplaza las URLs de las imágenes en `index.html` en la sección `.carousel-slide`:

```html
<img src="TU_URL_DE_IMAGEN" alt="Descripción">
```

**Tamaños recomendados para imágenes del carrusel:**
- **Ancho**: 1920px (mínimo recomendado)
- **Alto**: 1080px o superior (proporción 16:9 recomendada)
- **Formato**: JPG o PNG
- **Peso**: Optimizar para web (máximo 500KB por imagen)
- Las imágenes se ajustan automáticamente al 100% del viewport

### 7. Personalizar el Menú

Modifica los items del menú en `index.html` dentro de `.menu-grid`. Cada item tiene:
- Imagen
- Título
- Descripción
- Precio
- Categoría (data-category)

**Tamaños recomendados para imágenes del menú:**
- **Ancho**: 400px (mínimo recomendado)
- **Alto**: 250px (se muestra a esta altura fija)
- **Proporción**: 1.6:1 (ancho:alto) para mejor visualización
- **Formato**: JPG o PNG
- **Peso**: Optimizar para web (máximo 200KB por imagen)
- Las imágenes se ajustan automáticamente al contenedor manteniendo la proporción

### 8. Cambiar Información de Contacto

En la sección de contacto, modifica:
- Dirección
- Horarios
- Teléfono

## 📱 Responsive

La página está completamente optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎨 Personalización de Colores

Los colores actuales del sitio son:
- **Color principal (Dorado)**: `#D2A06E`
- **Color secundario (Naranja)**: `#F26C2A`
- **Color oscuro (Negro)**: `#000000`

En `styles.css`, puedes cambiar los colores principales:

```css
:root {
    --primary-color: #D2A06E;    /* Color dorado/beige */
    --secondary-color: #F26C2A;  /* Color naranja */
    --dark-color: #000000;       /* Color negro */
    --light-color: #f5f5f5;      /* Color claro */
}
```

## 📐 Resumen de Tamaños de Imágenes

| Tipo de Imagen | Ancho    | Alto      | Proporción | Formato Recomendado |
|----------------|-------   |------     |------------|---------------------|
| **Carrusel**   |1920px    | 1080px+   | 16:9       | JPG/PNG             |
| **Menú**       | 400px    | 250px     | 1.6:1      | JPG/PNG             |
| **Logo**       | 200px    | 200px     | 1:1        | PNG (transparente)  |
| **Favicon**    |32px/64px | 32px/64px | 1:1        | SVG/PNG             |

**Nota**: Todas las imágenes se ajustan automáticamente mediante CSS para mantener la responsividad en diferentes dispositivos.

## 📝 Notas

- Las imágenes del carrusel y del menú usan URLs de Unsplash como placeholder. Reemplázalas con tus propias imágenes.
- El mapa de Google Maps requiere una conexión a internet para funcionar.
- Asegúrate de tener una API key de Google Maps si planeas usar muchas solicitudes (para uso básico no es necesario).
- Optimiza todas las imágenes antes de subirlas para mejorar el tiempo de carga de la página.

## 🌐 Navegadores Compatibles

- Chrome (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Edge (últimas versiones)

---

¡Disfruta de tu nueva página web! 🎉

