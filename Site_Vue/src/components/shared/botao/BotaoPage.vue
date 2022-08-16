<template>
  <button class="botao" :class="estiloDoBotao()" type="tipo" @click="disparaAcao()">
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
       tipo: {
           type: String, 
           required: true
       },

       rotulo: {
           type: String, 
           required: true
       },

       confirmacao: Boolean,
       estilo: String
   },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operacao?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
 

    estiloDoBotao() {
      // se o valor é padrão ou não passou nada para estilo
      if (this.estilo == "padrao") {
        return "botao-padrao";
      }

      if (this.estilo == "perigo") {
        return "botao-perigo";
      }
    },
   },
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>