# Autenticación con Google OAuth 2.0

Este proyecto es una aplicación Node.js que implementa la autenticación de usuarios utilizando Google OAuth 2.0. Permite a los usuarios autenticarse con sus cuentas de Google y acceder a rutas protegidas.

## Características

- Autenticación de usuarios con Google OAuth 2.0
- Sesiones de usuario
- Rutas protegidas que requieren autenticación
- Cierre de sesión de usuarios

## Requisitos previos

- Node.js
- npm (Node Package Manager)
- Credenciales de OAuth 2.0 de Google (ID de cliente y Secreto de cliente)

## Configuración

### Registro de la aplicación en Google Developers Console

1. Ve a [Google Developers Console](https://console.developers.google.com/).
2. Crea un nuevo proyecto o selecciona un proyecto existente.
3. En el menú de la izquierda, ve a **Credentials** (Credenciales).
4. Haz clic en **Create Credentials** (Crear credenciales) y selecciona **OAuth 2.0 Client ID** (ID de cliente de OAuth 2.0).
5. Configura la pantalla de consentimiento de OAuth si no lo has hecho ya. Proporciona la información requerida y guarda los cambios.
6. Selecciona **Web application** (Aplicación web) como el tipo de aplicación.
7. Configura las **Authorized redirect URIs** (URI de redireccionamiento autorizadas). Añade `http://localhost:5000/auth/google/callback` como una URI autorizada.
8. Haz clic en **Create** (Crear). Esto generará tu ID de cliente y Secreto de cliente.
9. Copia el ID de cliente y el Secreto de cliente y pégalos en tu archivo `.env` como se muestra a continuación.

### Configuración del proyecto

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

    ```bash
    GOOGLE_CLIENT_ID=tu_id_de_cliente_aquí
    GOOGLE_CLIENT_SECRET=tu_secreto_de_cliente_aquí
    ```

4. Asegúrate de que la URL de callback en tu configuración de Google OAuth coincida con `http://localhost:5000/auth/google/callback`

## Uso

1. Para instalar las dependencias, ejecuta `npm install`
2. Inicia la aplicación con `npm start`
3. Abre un navegador y ve a `http://localhost:5000`
4. Haz clic en "Authenticate with Google" para iniciar el proceso de autenticación

## Rutas

- `/`: Página de inicio con enlace para autenticación
- `/auth/google`: Inicia el proceso de autenticación de Google
- `/auth/google/callback`: Callback para la autenticación de Google
- `/protected`: Ruta protegida que requiere autenticación
- `/logout`: Cierra la sesión del usuario
- `/auth/google/failure`: Página mostrada en caso de fallo en la autenticación

## Tecnologías utilizadas

- Express.js
- Passport.js
- passport-google-oauth2
- express-session

## Créditos

Este proyecto fue desarrollado con la valiosa guía y enseñanzas de:

**Prof. Mario Moreno**
- GitHub: [Mario Moreno](https://github.com/mariomorenor)
  
**Dev Kris Foster**
- GitHub: [Kris Foster](https://github.com/kriscfoster) 

Agradezco enormemente su contribución y mentoría en el desarrollo de esta aplicación.

## Notas

- Esta aplicación está configurada para ejecutarse en el puerto 5000
- Asegúrate de manejar adecuadamente las credenciales y no las compartas públicamente
