import { createInterface } from "readline";
import chalk from "chalk";
import {
  verificarArchivo,
  write,
  read,
  eliminarElemento,
  marcarComoCompletado,
} from "./datosJson.js";

const filePath = "./tareas.json";
verificarArchivo(filePath);
let tasks = read(filePath);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  let titulo = chalk.yellow.bold("______📝To Do App______");
  let subTitulo = chalk.blue("Menu de Opciones");

  console.log(`
  \n
  \t+-----------------------+
  \t|${titulo}|
  \t|   ${subTitulo}    |
  \t+-----------------------+
  \t| 1.✍️  Agregar tarea    |
  \t| 2.✍️  Listar tareas    |
  \t| 3.✍️  Completar tarea  |
  \t| 4.✍️  Eliminar tareas  |
  \t| 5.✍️  Salir            |
  \t+-----------------------+
  \n
  `);
}

function addTask() {
  rl.question(chalk.bgMagenta(" Escribe la tarea:"), (task) => {
    write(filePath, { task, completed: false });
    console.log(chalk.green.bold("\tTarea agregada con éxito\n"));
    tasks = read(filePath);
    displayMenu();
    chooseOption();
  });
}

function deleteTask() {
  rl.question(
    chalk.bgMagenta(" Digita el número de la tarea a aliminar:"),
    (indice) => {
      const index = parseInt(indice) - 1;
      eliminarElemento(filePath, index);
      console.log(chalk.green.bold("\tTarea eliminada con éxito\n"));
      tasks = read(filePath);
      displayMenu();
      chooseOption();
    }
  );
}

function listsTasks() {
  console.log(chalk.yellow.bold("\n\t+---------Tareas---------+\n"));
  if (tasks.length === 0) {
    console.log(chalk.bgRed("\tNo hay tareas por hacer 😉 👌"));
  } else {
    tasks.forEach((task, index) => {
      let status = task.completed ? "✅" : "❌";

      if (task.completed) {
        console.log(
          chalk.greenBright(`\t ${index + 1}. ${status} - ${task.task}`)
        );
      } else {
        console.log(
          chalk.redBright(`\t ${index + 1}. ${status} - ${task.task}`)
        );
      }
    });
    console.log(chalk.yellow.bold("\t+------------------------+\n"));
  }
  displayMenu();
  chooseOption();
}

function completeTask() {
  rl.question(" Digita el número de la tarea a completar:", (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index <= tasks.length) {
      marcarComoCompletado(filePath, index);
      console.log(chalk.green.bold("\tTarea marcada con exito ✅\n"));
    } else {
      console.error(chalk.red.bold("\tNumero de tarea invalido ❌\n"));
    }
    tasks = read(filePath);
    displayMenu();
    chooseOption();
  });
}

function chooseOption() {
  rl.question(" Digita el numero de tu opción:", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        listsTasks();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        deleteTask();
        break;
      case "5":
        console.log(chalk.yellow("\tAdios"));
        rl.close();
        break;
      default:
        console.log(chalk.red("\tERROR Opcion Invalida\n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();
