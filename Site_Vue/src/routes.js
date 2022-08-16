import CadastroPage from './components/cadastro/CadastroPage.vue';
import  HomePage from './components/home/HomePage.vue';

export const routes = [
    { path: '', name:'home', component: HomePage, titulo: 'Home', menu: true },
    { path: '/Cadastro', name:'cadastro', component: CadastroPage, titulo: 'Cadastro', menu: true },
    { path: '/Cadastro/:id', name:'altera', component: CadastroPage, titulo: 'Cadastro', menu: false },
    { path: '*', component: HomePage, menu: false }
];