import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HomeInventario from '../views/inventario/HomeInventario.vue';
import CrearInventario from '../views/inventario/CrearInventario.vue';
import EditarInventario from '../views/inventario/EditarInventario.vue';
import HomeActivo from '../views/activo/HomeActivo.vue';
import CrearActivo from '../views/activo/CrearActivo.vue';
import EditarActivo from '../views/activo/EditarActivo.vue';
import HomeUsuario from '../views/usuario/HomeUsuario.vue';
import CrearUsuario from '../views/usuario/CrearUsuario.vue';
import EditarUsuario from '../views/usuario/EditarUsuario.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/homeinventario',
    name: 'homeinv',
    component: HomeInventario
  },
  {
    path: '/crearinventario',
    name: 'crearinv',
    component: CrearInventario
  },
  {
    path: '/editarinventario/:id',
    name: 'editarinv',
    component: EditarInventario
  },
  {
    path: '/homeactivo',
    name: 'homeact',
    component: HomeActivo
  },
  {
    path: '/crearactivo',
    name: 'crearact',
    component: CrearActivo
  },
  {
    path: '/editaractivo/:id',
    name: 'editaract',
    component: EditarActivo
  },
  {
    path: '/homeusuario',
    name: 'homeusu',
    component: HomeUsuario
  },
  {
    path: '/crearusuario',
    name: 'crearusu',
    component: CrearUsuario
  },
  {
    path: '/editarusuario/:id',
    name: 'editarusu',
    component: EditarUsuario
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
