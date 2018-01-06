<template>
<v-container grid-list-md>
    <v-layout wrap>
        <v-flex xs12 md6 class="mb-3">
            <nuevo-contrato></nuevo-contrato>
        </v-flex >
        <v-flex xs12 md6>
            <tabla-inmuebles></tabla-inmuebles>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
import NuevoContrato from '@/components/NuevoContrato'
import TablaInmuebles from '@/components/TablaInmuebles'
export default {
  name : 'inicio',
  data () {
      return {

      }
  },
  components: {NuevoContrato, TablaInmuebles}
}
</script>
