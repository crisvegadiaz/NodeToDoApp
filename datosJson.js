import { openSync, statSync, readFileSync, writeFileSync } from "fs";

export function verificarArchivo(ruta) {
  try {
    statSync(ruta);
    console.log(" El archivo existe");
  } catch (error) {
    if (error.code === "ENOENT") {
      openSync(ruta, "w");
      const contenidoInicial = { datos: [] };
      writeFileSync(ruta, JSON.stringify(contenidoInicial, null, 2));
      console.log("\t🗒️ El archivo ha sido creado");
    } else {
      console.error("\t😵 Ocurrió un error al verificar el archivo: ", error);
    }
  }
}

export function write(ruta, datos) {
  try {
    const contenido = JSON.parse(readFileSync(ruta, "utf-8"));
    contenido.datos.push(datos);

    writeFileSync(ruta, JSON.stringify(contenido, null, 2));

    console.log("\n\tDatos guardados correctamente");
  } catch (error) {
    console.error("\t😵 Falló la escritura: ", error);
  }
}

export function read(ruta) {
  try {
    const contenido = readFileSync(ruta, "utf-8");

    const array = JSON.parse(contenido).datos;
    if (Array.isArray(array)) {
      return array;
    } else {
      console.error("\t😵 El contenido del archivo no es un array válido.");
      return [];
    }
  } catch (error) {
    console.error("\t😵 Ocurrió un error al leer el archivo: ", error);
    return [];
  }
}

export function eliminarElemento(ruta, indice) {
  try {
    const contenido = readFileSync(ruta, "utf-8");

    const json = JSON.parse(contenido);

    if (json && Array.isArray(json.datos)) {
      json.datos.splice(indice, 1);

      writeFileSync(ruta, JSON.stringify(json, null, 2));

      console.log(
        `\n\tElemento en el índice ${indice + 1} eliminado correctamente.`
      );
    } else {
      console.error(
        "\t😵 El contenido del archivo no es un objeto válido con un array 'datos'."
      );
    }
  } catch (error) {
    console.error("\t😵 Ocurrió un error al eliminar el elemento: ", error);
  }
}

export function marcarComoCompletado(ruta, indice) {
  try {
    const contenido = readFileSync(ruta, "utf-8");

    const json = JSON.parse(contenido);

    if (json && Array.isArray(json.datos)) {
      if (indice >= 0 && indice < json.datos.length) {
        json.datos[indice].completed = true;
        writeFileSync(ruta, JSON.stringify(json, null, 2));

        console.log(
          `\n\tLa tarea en el índice ${indice} ha sido marcada como completada.`
        );
      } else {
        console.error(" 😵 Índice proporcionado fuera de rango.");
      }
    } else {
      console.error(
        " 😵 El contenido del archivo no es un objeto válido con un array 'datos'."
      );
    }
  } catch (error) {
    console.error(
      " 😵 Ocurrió un error al marcar como completada la tarea: ",
      error
    );
  }
}
