<template>
  <v-card>
    <v-card-title>
      <span class="headline">Nuevo Inmueble</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
          <v-layout row>
            <v-flex xs12>
              <h4>Domicilio</h4>
            </v-flex>
          </v-layout>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
                label="Calle"
                v-model="calle"
               
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                label="Numero"
               v-model="numero"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>


    <v-btn
      @click="submit"
    >
      Agregar
    </v-btn>
 
 </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name:'nuevo-contrato',
    data: () => ({
      valid: true,
      numero: '',
  
      calle: '',

    }),
    methods: {
      submit () {
        if(Number(this.numero) && this.calle) {
          console.log('entro a submit')
          this.$store.commit('agregarInmueble',{numero: this.numero,
          calle: this.calle})
        }
      }
    },
    computed: {
      getInmueblesIndex () {
        return this.$store.getters.inmueblesIndex
      }
    }
  }
</script>