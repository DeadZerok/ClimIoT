# 🌦️ ClimIoT: Estación Meteorológica con ESP 32 wroom 32U y DHT11
---

Un proyecto para monitorear las condiciones climáticas en tiempo real utilizando hardware de bajo costo y la potencia del Internet de las Cosas (IoT)! Esta estación meteorológica personal mide la **temperatura**, la **humedad** y la **punto de rosio** y **Sencsacion termica** envía los datos a la nube para su visualización y análisis.

## 📝 Descripción General

**ClimIoT**  En este apartado nos encontraremos un acceso al sitio web, una visualización gráfica de las variables con una actualizacion cada 2 segundos en el tiempo real. Es una solución ideal para entusiastas de la electrónica, estudiantes y cualquiera interesado en recolectar datos meteorológicos locales.

El objetivo principal es **presentar la informacion**,en una **intefaz sensilla** y **conectividad con la base de tiempo real**  permitiento tener los datos del entorno en cualquier lugar o cualquier momento.

***

## 🧠 ¿Cómo Funciona?
El sistema es una plataforma web con next.JS y backend en firebase  personalizada que gestiona los datos enviados por la base y los muestra en tiempo real.
---

## ⚙️ Tecnologías y Herramientas

* **Next.js:** Un framework de React para construir aplicaciones web rápidas y modernas.
* **Firebase:** Una plataforma de Google usada como backend que provee servicios como base de datos en tiempo real.
* **Tailwind CSS:** Un framework de CSS que facilita el diseño de interfaces de usuario directamente en el HTML.
* **TypeScript:** Un lenguaje de programación construido sobre JavaScript que añade tipado estático para un código más robusto.
* **JavaScript:** Lenguaje de programación esencial para el desarrollo web, que da vida a la interactividad de la aplicación.

---
## 🚀 Instalación y Uso
Este es un [Next.js](https://nextjs.org) proyecto iniciado con [`create-next-app`](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

```bash
npx create-next-app@latest my-project --typescript --eslint --app
cd my-project
```
## Primeros pasos

primero, ejecute el servidor de desarrollo:

```bash
npm run dev

```

Abra [http://localhost:3000](http://localhost:3000) en su navegador.



## Para mayor informacion

Lea los recursos o documentacion oficial de next.js:

- [Next.js Documentation](https://nextjs.org/docs) - Obtenga más información sobre las características y la API de Next.js.
- [Learn Next.js](https://nextjs.org/learn) -  un tutorial interactivo de Next.js.

## 📊 Visualización de Datos

Puedes visualizarlo en: [ClimIoT](https://climiot.netlify.app/)
---
# Importante !!
Para que funcione correctamente tienes que seguir tambien:  [ClimIoT_Firmware](https://github.com/DeadZerok/ClimIoT_firmware)
