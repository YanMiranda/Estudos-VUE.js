<template>
  <div class="corpo">
    <meu-menu :rotas="routes"> </meu-menu>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template> 

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/MenuPage.vue";

export default {
  data() {
    return { 
      routes : routes.filter(route => route.menu)
      };
  },
  components: {
    "meu-menu": Menu,
  },
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
.pagina-leave-active,
.pagina-enter-active {
  transition: opacity 0.4s;
}
</style>
