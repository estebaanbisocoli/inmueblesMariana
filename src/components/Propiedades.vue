<template>
  <v-container grid-list-md>
      <prop-table></prop-table>
  </v-container>
</template>
<script>
import PropTable from './PropTable'
export default {
    name: 'propiedades',
    components: {PropTable}
}
</script>

