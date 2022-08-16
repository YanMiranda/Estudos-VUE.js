import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transforms';
import VeeValidate from 'vee-validate'
import msg from './pt_BR'

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.use(VeeValidate,{
  locale:'pt_BR',
  dictionary:{
    pt_BR:{
      messages: msg
    }
  }
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
