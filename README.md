<h1 align="center">
    <img alt="PlantManager" title="PlantManager" src=".github/logo.svg" />
</h1>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-architecture">Architecture</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=32B768" alt="License"> 
  <img src="https://img.shields.io/github/stars/jonyw4/plant-manager?label=stars&message=MIT&color=FFFFFF&labelColor=32B768" alt="Stars">
</p>

<br>

---

## 💻 Project

*App to always remember to water your plants 🌱*

This is a project for study purposed inspired by Plant Manager of **[Next Level Week](https://nextlevelweek.com/)**, presented by **[@Rocketseat](https://github.com/Rocketseat)**. 

I will try to apply some concepts that I learn by these years in a real life situation using:

- Clean Code
- Clean Architecture
- SOLID principles
- Unit and integration tests
- CI / CD
- Deploy (at least in Expo)

## 📱 Preview
Just enter in [Expo project page](https://expo.io/@jonycelio/projects/plantmanager) and scan the QR code using the Expo app.

## ⏳ Future / To do
You can see what need to be done in [issues section.](https://github.com/jonyw4/plant-manager/issues)


## 🏛 Architecture

This projects use Clean Architecture as principle to decide how to create boundaries in the application.
For now it have **four principal layers: Domain, Data, Infra and View**

### Layer: Domain
Business interfaces common for any application. For now its just interface representing data structures objects, but could be classes as well with methods.

### Layer: Data
Layer containing repositories and services to interact with domain layer. 

### Layer: Infra
Layer containing implementations of data layer

### Layer: View
Principal folder containing all view code. 
For now it have: *Containers, components, contexts, hooks, pages, routes and styles*

### App.tsx
Application entry point injecting all dependency's and instantiate the route.


## 🧪 Technologies

This project was developed using the following technologies:

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting started


Follow the steps below
```bash
# Install the dependencies
$ yarn install

# Start the project
$ yarn start
```

## 🔖 Layout

You can view the project layout through the links below:

- [Layout](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager) 

Remembering that you need to have a [Figma](http://figma.com/) account to access it.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.