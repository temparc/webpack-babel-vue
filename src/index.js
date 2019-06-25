/*
Main JS file
This is the starting point the JS application running through Webpack.
 */

/**
 * Dependencies and imports
 */
import _ from 'lodash';
import Vue from 'vue';
import './assets/scss/main.scss'; // main scss file
import {Dog} from './dog.js'; // named imports, export does not use "default" and curly braces required
import catSays from './cat.js'; //

let dog = new Dog('Barky', 'bulldog');

// Vue component imports
import AppComponent from './components/AppComponent.vue'

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        catMessage : catSays(),
        dogMessage : dog.sayHi()
    },
    components: {
        'app-component': AppComponent
    }
});



