import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import GatesComponent from './components/GatesComponent.vue'
import GateEntryComponent from './components/GateEntryComponent.vue'
import GateExitComponent from './components/GateExitComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/gates', component: GatesComponent },
        { path: '/gateEntry', component: GateEntryComponent },
        { path: '/gateExit', component: GateExitComponent }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
