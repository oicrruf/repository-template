# repository-template

#### Description

Este repositorio ha sido creado para ser utilizado como plantilla al iniciar un nuevo proyecto. He intentado incluir "hacks" para el buen manejo de tu nuevo repositorio.

#### Usage

Puedes usar este repositorio como base para tus proyectos de las siguientes maneras:

-   Importa este código a tu nuevo repositorio o descarga el archivo zip y luego inicializa un nuevo repositorio `git init`.
-   El detalle del uso y contenido de este repositorio lo encontrarás en [DOCUMENTATION.md](https://github.com/oicrruf/repository-template/blob/develop/DOCUMENTATION.md).
-   Si consideras necesario cambia el tipo de licencia para tu proyecto [LICENSE.md](https://github.com/oicrruf/repository-template/blob/develop/LICENSE.md).
-   Para finalizar debes sustituir el contenido de este [README.md](https://github.com/oicrruf/repository-template/blob/develop/README.md) por el correspondiente a tu proyecto.

#### Comandos que debes ejecutar

###### CommitLint

`npx husky install`
`npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"`

###### CommitLint

`npx eslint --init`

#### Configurar formato de código

Ingresa a [prettier.io](https://prettier.io/playground/) y puedes hacer pruebas del formato de codigo que deseas configurar y luego da click en el botón _Copy config JSON_ y luego sustituye el contenido del archivo _.prettierrc.json_
