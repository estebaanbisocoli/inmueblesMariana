<template>
  <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.domicilio }}</td>
      <td class="text-left">{{ props.item.estado}}</td>
      <td class="text-xs-left"><v-btn fab dark small color="primary" @click="alquilar(props.item.index)">    
      <v-icon dark>add</v-icon>
    </v-btn></td>
     <td class="text-xs-left"><v-btn fab dark small color="error" @click="eliminar(props.item.index)">    
      <v-icon dark>remove</v-icon>
    </v-btn></td>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    name: 'tabla-inmuebles',
    computed : {
        items() {
            return this.$store.getters.inmueblesIndex
        }
    },
    data () {
      return {
        headers: [
          {
            text: 'Domicilio',
            align: 'left',
            sortable: true,
            value: 'domicilio'
          },
          { text: 'Estado', value: 'estado', align: 'left', sortable: true },
          { text: 'Alquilar', align: 'left', value: 'value' },
          { text: 'Eliminar', align: 'left', value: 'value'}
        ]
      }
    },
    methods: {
        alquilar(index) {
            this.$store.commit('alquilarInmueble', index )
        },
        eliminar(index) {
            this.$store.commit('eliminarInmueble', index)
        }
    }
  }
</script>