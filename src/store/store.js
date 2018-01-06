import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)
const existeInmueble = (state, inmueble) => {
    if (_.findIndex(state.inmuebles, (domicilio) => {
        return (domicilio.calle == inmueble.calle) && (domicilio.numero == inmueble.numero)
    }) === -1) {
       return true
    }
    else {
        return false
    }
}
export const store = new Vuex.Store({
    state: {
        inmuebles: [
        ],
        contratos: [
            {
                direccion: 'Belgrano 1266',
                inquilino: 'Esteban Bisocoli Contrera',
                vencimiento: '6/11/2018'

            },
            {
                direccion: 'Constitucion 484',
                inquilino: 'Sebastian Villegas Zorita',
                vencimiento: '08/06/2018'
            }
        ]
    },
    getters: {
        // solo devuelve el index xheck
        inmueblesIndex : (state) => {
            var nueArr = []
            for(var i =0 ; i< state.inmuebles.length; i++) {
                var dom = state.inmuebles[i].calle + ' ' + state.inmuebles[i].numero
                var obj = {
                    value: false,
                    domicilio: dom,
                    estado: state.inmuebles[i].estado,
                    index : i
                }
                nueArr.push(obj)
            }
            console.log(nueArr)
            return nueArr
        }
    },
    mutations: {
        agregarInmueble(state, inmueble) {
            if(existeInmueble(state, inmueble)) {
            inmueble.estado = 'Libre'
            state.inmuebles.push(inmueble)
            console.log(state.inmuebles)
        }
    },
        alquilarInmueble(state, index) {
            if(state.inmuebles[index].estado === "Libre") {
                state.inmuebles[index].estado = "Alquilado"
            }
        },
        eliminarInmueble(state, index) {
            state.inmuebles.splice(index, 1)
        }
    
    }

})