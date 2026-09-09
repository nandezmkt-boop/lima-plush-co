# Lima Plush Co. — Sitio web corporativo

Landing page B2B de Lima Plush Co., fabricante de peluches corporativos personalizados. Construida con Next.js (App Router), TypeScript, Tailwind CSS y Framer Motion. Contenido en español e inglés.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) (redirige automáticamente a `/es`).

Otros comandos: `npm run build` (build de producción), `npm run start` (servir el build), `npm run lint` (ESLint).

## Configuración

Copia `.env.example` como `.env.local` y completa las variables:

### Email del formulario de presupuesto

El formulario (`/api/quote`) usa [Resend](https://resend.com) para enviar el email. Mientras no se configure `RESEND_API_KEY`, el formulario sigue funcionando con normalidad: los datos quedan registrados en los logs del servidor y el usuario recibe confirmación, pero no se envía email real.

Para activar el envío real:

1. Crea una cuenta en Resend y verifica un dominio (o usa el remitente de pruebas `onboarding@resend.dev`).
2. Define `RESEND_API_KEY` con tu clave de API.
3. Define `RESEND_FROM_EMAIL` con el remitente verificado.
4. Define `QUOTE_TO_EMAIL` con el email donde la propietaria quiere recibir las solicitudes.

### WhatsApp Business

Define `NEXT_PUBLIC_WHATSAPP_NUMBER` con el número en formato internacional, solo dígitos (ej. `51987654321`). El botón flotante y los enlaces de WhatsApp del sitio se generan automáticamente a partir de esta variable; si se deja vacía, el botón no se muestra.

### Imágenes

Las imágenes reales del catálogo y del taller están en `public/images/products/` y el logo en `public/images/brand/`. Para añadir o sustituir una imagen, coloca el archivo en esa carpeta y actualiza la ruta correspondiente en el componente de la sección (`src/components/sections/*`) o en el diccionario de la galería (`src/lib/i18n/dictionaries/es.ts` y `en.ts`, objeto `gallery.items`).

### Idiomas

El contenido vive en `src/lib/i18n/dictionaries/es.ts` (español, principal) y `en.ts` (inglés). Cada página se sirve bajo `/es` y `/en`; la raíz `/` redirige a `/es`. Para editar textos, modifica el diccionario correspondiente — ambos archivos comparten la misma estructura (tipada a partir de `es.ts`).

## Desplegar en Vercel

1. Importa el repositorio de GitHub en [vercel.com/new](https://vercel.com/new).
2. Añade las variables de entorno del paso anterior en la configuración del proyecto (Settings → Environment Variables).
3. Despliega. Cada push a la rama principal genera un nuevo despliegue automáticamente.

## Stack

Next.js · TypeScript · Tailwind CSS v4 · Framer Motion · Resend · Zod
