import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Propiedades from '@/components/Propiedades'
import NuevoContrato from '@/components/NuevoContrato' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/propiedades',
      name: 'Propiedades',
      component: Propiedades
    },
    {
      path: '/nuevocontrato',
      name: 'NuevoContrato',
      component: NuevoContrato

    }
  ]
})
