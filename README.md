- Nombre de la Aplicación:

  FutbolLive

- Objetivo General y Descripción de la Aplicación:
  FutbolLive es una aplicación móvil desarrollada con Expo y React Native que permite a los usuarios consultar los partidos de fútbol  programados y recibir notificaciones antes de que comiencen. La aplicación obtiene la información de la API de Football Data y la muestra de forma clara y accesible.

- Tipo de Arquitectura y Justificación:
  Se utiliza una arquitectura basada en **Componentes y Hooks de React**, siguiendo el patrón **MVU (Model-View-Update)** para la actualización eficiente de la interfaz de usuario. Esto permite:
- Separación de responsabilidades mediante componentes reutilizables.
- Manejo eficiente del estado con `useState` y `useEffect`.
- Facilidad de escalabilidad y mantenimiento.

- Framework Seleccionado para Desarrollo:
  Se ha seleccionado **Expo + React Native** debido a:
  - Su facilidad de configuración y desarrollo rápido.
  - Compatibilidad con dispositivos Android e iOS sin necesidad de código nativo adicional.
  - Soporte para notificaciones push y acceso a APIs del dispositivo.

- Estrategia de Versionamiento:
  Se usará **Git Flow** como estrategia de versionamiento con las siguientes ramas:
  - `main`: Contendrá la versión estable de la aplicación.
  - `develop`: Integración de nuevas características antes de fusionarlas en `main`.
  - `feature/nombre_funcionalidad`: Para el desarrollo de nuevas funcionalidades.
  - `bugfix/nombre_bug`: Para corregir errores detectados.

- Wireframes/Mockups de la Aplicación:
  link: https://www.figma.com/proto/tJpovV8BW1krUuwFIlOnC7/FutbolLive?node-id=15-9&p=f&t=iOcXqNxLSyj73jVH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1

- Diagrama de Flujo de la Aplicación:
  link: https://lucid.app/lucidchart/c91c1c22-1b48-437a-bb14-f86b12ccac74/edit?invitationId=inv_da32ce4e-0c36-4d37-b9bc-709a49822af1&page=xRqSZOCHk9x3#

- Repositorio GitHub (primera versión):
  link: [https://github.com/Alfonso-RTX/api-futbol](https://github.com/Alfonso-RTX/futbol-live)
