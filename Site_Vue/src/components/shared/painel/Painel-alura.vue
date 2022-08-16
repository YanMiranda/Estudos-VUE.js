<template>
  <div class="painel">
    <h1 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h1>
    <transition name="painel-fade">
    <div class="painel-conteudo" v-show="visivel">
      <slot> </slot>
    </div>
    </transition>
  </div>
</template> 

<script>
export default {
  props: ["titulo"],

  data() {
    return{
        visivel: true
      }
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 100%;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 5px 5px 5px black;
}
.painel-fade-enter, .painel-fade-leave-active{
  opacity: 0;
}
.painel-fade-leave-active, .painel-fade-enter-active{
  transition: opacity .4s;
}
.painel-conteudo{
  overflow: hidden;
}
</style>
