<template>
  <div>
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.direccion }}</td>
      <td class="text-xs-left">{{ props.item.inquilino }}</td>
      <td class="text-xs-left" ><v-icon @click='openDialog(props.item)'>phone</v-icon></td>
      <td class="text-xs-left">{{ props.item.vencimiento }}</td>
    </template>
  </v-data-table>
  </div>
</template>
<script>
  import Contacto from './Contacto'
  export default {
    name: 'prop-table',
    components: {Contacto},
    data () {
      return {
        dialog: 'false',
        propiedadTarget: null,
        headers: [
          {
            text: 'Direccion',
            align: 'left',
            sortable: true,
            value: 'direccion'
          },
          { text: 'Inquilino', align:'left', value: 'inquilino'},
          { text: 'Contacto', align:'left', value: 'contacto' },
          { text: 'Vencimiento de Contrato', align: 'left', value: 'vencimiento' },
        ]
      }
    },
    methods: {
    },
    computed: {
      items() {
        return this.$store.state.contratos;
      }
    }
  }
</script>