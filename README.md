
# TaskApp

Aplicación de gestión de tareas desarrollada con **Ionic y Angular**. Permite crear tareas, asignar prioridades, marcar tareas como completadas y eliminar las que ya no sean necesarias.

## Características

- Crear tareas con título y descripción.
- Asignar prioridad alta, media o baja.
- Validar que el título sea obligatorio y tenga al menos 5 caracteres.
- Marcar tareas como completadas.
- Mostrar el texto tachado cuando una tarea está completada.
- Eliminar tareas.
- Guardar las tareas en el navegador mediante `localStorage`.
- Interfaz desarrollada con componentes de Ionic.

## Tecnologías utilizadas

- Ionic
- Angular
- TypeScript
- HTML y SCSS
- Reactive Forms
- localStorage

## Requisitos previos

Antes de ejecutar el proyecto, debes tener instalado:

- Node.js y npm.
- Ionic CLI.

Para instalar Ionic CLI, ejecuta:

```bash
npm install -g @ionic/cli
```

## Instalación del proyecto

1. Descarga o clona el repositorio.
2. Abre una terminal en la carpeta raíz del proyecto, donde se encuentra `package.json`.
3. Instala las dependencias:

```bash
npm install
```

## Ejecutar en modo de desarrollo

Ejecuta el siguiente comando desde la carpeta raíz:

```bash
ionic serve
```

La aplicación se abrirá en el navegador o la terminal mostrará la dirección local para acceder a ella.

## Compilar para producción

Para comprobar que el proyecto se puede compilar, ejecuta:

```bash
ionic build
```

## Cómo utilizar la aplicación

1. Pulsa el botón flotante para abrir el formulario.
2. Escribe un título de al menos cinco caracteres.
3. Añade una descripción y selecciona una prioridad.
4. Pulsa **Guardar tarea**.
5. Usa la casilla para marcar la tarea como completada.
6. Pulsa el icono de papelera para eliminar una tarea.

Las tareas se guardan en el almacenamiento local del navegador. Los datos permanecen en ese navegador y dispositivo, pero no se sincronizan automáticamente con otros dispositivos.

## Estructura del proyecto

- `src/`: contiene el código fuente de la aplicación.
- `package.json`: define las dependencias y los comandos del proyecto.
- `README.md`: contiene la documentación y las instrucciones de uso.

## Autor

**Estudiante:** Michael Ramirez Feliz 
**Proyecto:** TaskApp  
**Especialidad:** Desarrollo y Administración de Aplicaciones