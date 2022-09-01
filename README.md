 # TODO APP

That is a simple project aiming to work like a TO DO List, may work as well like a pomodoro. This frontend depends on backend existing in [TODO App Backend](https://github.com/matheusolivesilva/todo-app-nestjs).

## 🗂️ Table of Contents

<p align="center">
  <a href="#%EF%B8%8F-tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#--project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-start">How to Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-test-in-web">Test in web</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-good-practices">Good Practices</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-useful-commands">Useful Commands</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-references">References</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-author">Author</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## ⚒️ Tecnologies

- [React 17.0.2](https://reactjs.org/);
- [Styled Components 5.3.0](https://styled-components.com/);
- [Typescript 4.1.2](https://www.typescriptlang.org/);
- [Eslint 7.11.0](https://eslint.org/);
- [Prettier 2.7.1](https://prettier.io/).

## 📝  Project
This section describes and explain in details how this project works and what it tries to solve.

### ✅  Features
You'll see in this section how to use this app to manage your tasks.

#### Creating and starting tasks
At first, you may want to create some tasks where you are gonna work on to, and then press "play" button to starts:

![Creating and starting tasks](public/create-task.gif)


#### Finishing and restarting tasks
When the timer finish, you are able to restart it again until finish the task or, in another hand, you may click on ✅ button in order to end that task:

![Finishing and restarting tasks](public/finishing-task.gif)

## 🚀 How to start

### 📦 With NPM

1. Clone this repo using `git clone git@github.com:matheusolivesilva/todo-app-reactjs.git`;
2. Install dependencies with `npm install`;
3. Run `npm start --watch` (`--watch` flag is optional, use it in order to enable hot reload);
4. Enjoy!😉

### 🐋 With Docker

1. Clone this repo using `git clone git@github.com:matheusolivesilva/todo-app-reactjs.git`;
2. Run the project with `docker-compose up --build`;
   2.1. You'll need to use the flag `--build` only in the first run, after you may run only `docker-compose up`.
3. Have a fun! 😉

## 🕸️ Test in WEB

Open Browser in [`localhost:3000/`](http://localhost:3000/).

## 🏅 Good practices
This projects applies good practices, such as linter and code conventtions:
- Access [.eslintrc.js](.eslintrc.js) to see linter settings and run the command `npm run lint` to applies it;
- Access [.prettierrc](.prettierrc) to see prettier settings and run the command `npm run format` to applies it.


## 💻 Useful Commands
- `npm run lint` - Run linter configured with eslint;
- `npm run format` - Run prettier that applies code formatting and code conventions;
- `docker-compose down` - Stops containers , networks, volumes and images created by `docker-compose up` or `docker-compose up --build`;
- `docker-compose exec app sh` - Open terminal inside docker container;
- `docker stop $(docker ps -q) && docker container prune -f && docker volume prune -f && docker rmi $(docker images -q)` - This command chain must be used if you want to remove all data about your envinronment, use it carefully, because it stops all containers, delete all containers, delete all images and volumes.

## 📖 References
Project created during [this course](https://youtube.com/playlist?list=PLiPDj1LrYXr0M1gXepUacs9FvL4dJU40q).

## 🧑🏻‍💻 Author
*Matheus Oliveira da Silva* - [Github](https://github.com/matheusolivesilva) | [Linkedin](https://www.linkedin.com/in/matheusoliveirasilva/)
