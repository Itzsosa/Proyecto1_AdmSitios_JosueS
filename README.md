# Sistema de Tickets - Aplicación de Gestión

Una aplicación sencilla de sistema de tickets desarrollada con Astro y Tailwind CSS que permite a los usuarios crear tickets y a los administradores gestionarlos. Todos los datos se guardan en localStorage para una experiencia sin servidor.

## 📋 Características

- **Sistema de autenticación**: Registro e inicio de sesión de usuarios
- **Diferentes roles**: Usuario y Administrador
- **Panel de Usuario**: Creación y seguimiento de tickets
- **Panel de Administrador**: Gestión y respuesta de tickets
- **Diseño responsive**: Adaptado a móviles y escritorio
- **Almacenamiento local**: Datos persistentes en localStorage

## 🚀 Cómo empezar

### Requisitos previos
- Node.js 18 o superior
- npm o yarn

### Clonar e instalar

1. Clona este repositorio:
```sh
git clone https://github.com/tu-usuario/sistema-tickets.git
cd sistema-tickets
```

2. Instala las dependencias:
```sh
npm install
```

3. Inicia el servidor de desarrollo:
```sh
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 👤 Credenciales predeterminadas

La aplicación inicializa automáticamente un usuario administrador con las siguientes credenciales:

- **Email**: admin@admin.com
- **Contraseña**: admin1234

## 🔄 Flujo de trabajo

1. **Registro de usuario**: Cualquier persona puede registrarse como usuario regular
2. **Inicio de sesión**: Los usuarios y administradores utilizan sus credenciales para acceder
3. **Usuario**:
   - Crea tickets con asunto y descripción
   - Visualiza todos sus tickets y su estado
   - Revisa las respuestas de los administradores
4. **Administrador**:
   - Visualiza todos los tickets de todos los usuarios
   - Filtra tickets por estado
   - Actualiza el estado de los tickets (Abierto, En Progreso, Resuelto, Cerrado)
   - Responde a los tickets

## 🧞 Comandos disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza la construcción antes de desplegar  |

## 🏗️ Estructura del proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── login.astro
│   │   ├── register.astro
│   │   ├── admin/
│   │   │   └── index.astro
│   │   └── user/
│   │       └── index.astro
│   ├── services/
│   │   └── localStorage.js
│   └── styles/
│       └── global.css
└── package.json
```

## 📝 Notas técnicas

- **Persistencia de datos**: Todos los datos (usuarios y tickets) se almacenan en localStorage
- **Seguridad**: Este es un proyecto de demostración - en un entorno de producción, se recomienda:
  - Utilizar una base de datos real
  - Implementar autenticación segura con hashing de contraseñas
  - Añadir validación de datos más robusta

## 📱 Responsive

La aplicación está completamente adaptada para dispositivos móviles y de escritorio, proporcionando una experiencia de usuario óptima en ambos casos.

---

Desarrollado con ❤️ utilizando [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com)
