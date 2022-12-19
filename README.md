# NodeTS server con MongoDB y Prisma

> Servidor de pruebas en express con typescript, en este caso el objetivo es probar la integración de [Prisma](https://www.prisma.io/)  y [MongoDB](https://www.mongodb.com/) así como una libreria de mixin para schemas de prisma: [prismix](https://github.com/jamiepine/prismix) y de esta forma intentar llevar el desarrollo a través de DDD

## Usage

Clonar el proyecto, y crear un archivo .env con las siguientes variables
```
    PORT=<El puerto donde se va a inicializar la aplicacion (Opcional)>
    DATABASE_URL=<URL de la base de datos de MongoDB>
```
 y ejecutar instalación para desplegar la api en el puerto especificado o por defecto en el puerto 3000.

## Installation

```shell
    # Instalar dependencias
    yarn

    # Ejecutar proyecto
    yarn dev

    # Buildear esquema de prisma (Incluido en el comando para Ejecutar proyecto)
    yarn prismix
```

## Stack

Algunos links the licéncias Open source para copiar y pegar:

- [NodeJS](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/)
- [Prismix](https://github.com/jamiepine/prismix)
- [DDD](https://es.wikipedia.org/wiki/Dise%C3%B1o_guiado_por_el_dominio)

## Contact info

> [Alejandro Martinez](https://www.linkedin.com/in/amdevelop/)
## License

TuColegaDev - [MIT](https://opensource.org/licenses/MIT)