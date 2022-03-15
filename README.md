# recipes-vue-app

This project was build with Vue.JS and employs libraries such as Axios and VuePersist. The main idea behind the project is to display a range of recipes that are pulled from freemealdb.
The app accesses assets from the REST API and utilizes local storage. The main functionality allows the user to view a whole list of recipes with images, search by characters, filter by tags, area and category. Moreover, the user is able to add/remove to/from favourites, and expand each one of the recipes in order to see the instructions and a YouTube (embedded player) video on how to prepare the meal in question. 

Stack:
Vue.Js 
Vuex
SCSS
Axios (Accessing the REST API)
Vue Persist (Local storage handling)
JavaScript

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
