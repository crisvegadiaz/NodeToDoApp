# Documentación del Programa Node To-Do App

Este documento proporciona una descripción y documentación para el programa Node To-Do App. Este programa utiliza Node.js y algunas bibliotecas externas como "readline" y "chalk" para crear una aplicación de lista de tareas simple que permite al usuario agregar, listar, completar y eliminar tareas.

## Estructura del Proyecto

El proyecto está organizado en dos archivos principales:

1. **app.js**: Contiene la lógica principal del programa.
2. **datosJson.js**: Contiene funciones relacionadas con la manipulación del archivo JSON que almacena las tareas.

## Dependencias

El programa utiliza las siguientes dependencias externas:

- **readline**: Utilizado para interactuar con la línea de comandos.
- **chalk**: Utilizado para dar estilo y colorear la salida en la consola.

## Instalación

Antes de ejecutar el programa, asegúrate de tener Node.js instalado en tu sistema. Puedes instalar las dependencias ejecutando el siguiente comando en la terminal:

```bash
npm install
```

## Uso del Programa

Para ejecutar la aplicación, utiliza el siguiente comando:

```bash
node app.js
```

Una vez ejecutado, la aplicación mostrará un menú con diferentes opciones que el usuario puede elegir para interactuar con la lista de tareas.

## Funciones Principales

### 1. `verificarArchivo(ruta)`

Verifica la existencia del archivo en la ruta proporcionada. Si no existe, crea el archivo y lo inicializa con un objeto JSON que contiene un array llamado "datos".

### 2. `write(ruta, datos)`

Añade una nueva tarea al archivo JSON en la ruta especificada.

### 3. `read(ruta)`

Lee y devuelve las tareas almacenadas en el archivo JSON en la ruta especificada.

### 4. `eliminarElemento(ruta, indice)`

Elimina una tarea en el índice especificado del archivo JSON.

### 5. `marcarComoCompletado(ruta, indice)`

Marca una tarea como completada en el índice especificado del archivo JSON.

## Funciones en `app.js`

### 1. `displayMenu()`

Muestra el menú de opciones en la consola.

### 2. `addTask()`

Permite al usuario agregar una nueva tarea.

### 3. `deleteTask()`

Permite al usuario eliminar una tarea existente.

### 4. `listsTasks()`

Lista todas las tareas actuales junto con su estado (completado o no completado).

### 5. `completeTask()`

Permite al usuario marcar una tarea como completada.

### 6. `chooseOption()`

Maneja la lógica de selección de opción del usuario y llama a la función correspondiente.

## Conclusiones

Este programa proporciona una aplicación básica de lista de tareas con una interfaz de línea de comandos. Puede ser utilizado como punto de partida para desarrollar aplicaciones más complejas basadas en Node.js y archivos JSON.
