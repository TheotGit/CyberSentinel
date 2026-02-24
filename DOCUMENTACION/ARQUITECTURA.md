# Arquitectura del Proyecto CyberSentinel

CyberSentinel es una PWA orientada a ciberseguridad.  
La aplicación se compone de tres capas principales, orquestadas con Docker Compose:

## Componentes

- **Frontend (Angular PWA):**
  - Interfaz progresiva accesible desde navegador.
  - Servida con Nginx en contenedor Docker.
  - Se comunica con el backend vía API REST.

- **Backend (Node.js + Express):**
  - API que expone endpoints para consultar y registrar datos.
  - Conexión directa a la base de datos PostgreSQL.
  - Contenedor independiente para mayor seguridad.

- **Base de datos (PostgreSQL):**
  - Contenedor aislado con persistencia de datos.
  - Accesible únicamente desde el backend.
  - Inicializada con usuario `postgres`, password `postgres`, base `miapp`.

## Flujo de comunicación
