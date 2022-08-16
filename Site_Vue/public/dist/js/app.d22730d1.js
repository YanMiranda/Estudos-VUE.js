(function(){var t={8693:function(t,e,o){"use strict";var r=o(6369),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"corpo"},[e("meu-menu",{attrs:{rotas:t.routes}}),e("transition",{attrs:{name:"pagina"}},[e("router-view")],1)],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"centralizado"},[t._v("Cadastro")]),e("h2",{staticClass:"centralizado"},[t._v(t._s(t.foto.titulo))]),t.foto._id?e("h2",{staticClass:"centralizado"},[t._v("Alterando")]):e("h2",{staticClass:"centralizado"},[t._v("Incluindo")]),e("form",{on:{submit:function(e){return e.preventDefault(),t.grava()}}},[e("div",{staticClass:"controle"},[e("label",{attrs:{for:"titulo"}},[t._v("TÍTULO")]),e("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.titulo,expression:"foto.titulo"}],attrs:{"data-vv-as":"título",name:"titulo","data-vv-rules":"required|min:3|max:30",id:"titulo",autocomplete:"off"},domProps:{value:t.foto.titulo},on:{input:function(e){e.target.composing||t.$set(t.foto,"titulo",e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("titulo"),expression:"errors.has('titulo')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("titulo")))])]),e("div",{staticClass:"controle"},[e("label",{attrs:{for:"url"}},[t._v("URL")]),e("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.url,expression:"foto.url"}],attrs:{name:"url","data-vv-rules":"required",id:"url",autocomplete:"off"},domProps:{value:t.foto.url},on:{input:function(e){e.target.composing||t.$set(t.foto,"url",e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("url"),expression:"errors.has('url')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("url")))]),e("imagem-responsiva",{attrs:{url:t.foto.url,titulo:t.foto.titulo}})],1),e("div",{staticClass:"controle"},[e("label",{attrs:{for:"descricao"}},[t._v("DESCRIÇÃO")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.foto.descricao,expression:"foto.descricao"}],attrs:{id:"descricao",autocomplete:"off"},domProps:{value:t.foto.descricao},on:{input:function(e){e.target.composing||t.$set(t.foto,"descricao",e.target.value)}}})]),e("div",{staticClass:"centralizado"},[e("meu-botao",{attrs:{rotulo:"GRAVAR",tipo:"submit"}}),e("router-link",{attrs:{to:{name:"home"}}},[e("meu-botao",{attrs:{rotulo:"VOLTAR",tipo:"button"}})],1)],1)])])},n=[],l=function(){var t=this,e=t._self._c;return e("img",{staticClass:"imagem-responsiva",attrs:{src:t.url,alt:t.titulo}})},u=[],c={props:["url","titulo"]},m=c,d=o(1001),p=(0,d.Z)(m,l,u,!1,null,"485ffa6c",null),v=p.exports,f=function(){var t=this,e=t._self._c;return e("button",{staticClass:"botao",class:t.estiloDoBotao(),attrs:{type:"tipo"},on:{click:function(e){return t.disparaAcao()}}},[t._v(" "+t._s(t.rotulo)+" ")])},h=[],_={props:{tipo:{type:String,required:!0},rotulo:{type:String,required:!0},confirmacao:Boolean,estilo:String},methods:{disparaAcao(){this.confirmacao?confirm("Confirma operacao?")&&this.$emit("botaoAtivado"):this.$emit("botaoAtivado")},estiloDoBotao(){return"padrao"==this.estilo?"botao-padrao":"perigo"==this.estilo?"botao-perigo":void 0}}},g=_,$=(0,d.Z)(g,f,h,!1,null,"57c7cd8a",null),b=$.exports;class O{constructor(t="",e="",o=""){this.titulo=t,this.url=e,this.descricao=o}}o(1703);class w{constructor(t){this._resource=t("v1/fotos{/id}")}cadastra(t){return t._id?this._resource.update({id:t._id},t):this._resource.save(t)}lista(){return this._resource.query().then((t=>t.json()),(t=>{throw console.log(t),new Error("Não foi possivel obter as fotos. Tente mais tarde")}))}apaga(t){return this._resource.delete({id:t}).then(null,(t=>{throw console.log(t),new Error("Não foi possivel remover a foto")}))}busca(t){return this._resource.get({id:t}).then((t=>t.json()))}}var C={components:{"imagem-responsiva":v,"meu-botao":b},data(){return{foto:new O,id:this.$route.params.id}},methods:{grava(){this.$validator.validateAll().then((t=>{t&&this.service.cadastra(this.foto).then((()=>{this.id&&this.$router.push({name:"home"}),this.foto=new O}),(t=>console.log(t)))}))}},created(){this.service=new w(this.$resource),this.id&&this.service.busca(this.id).then((t=>this.foto=t))}},x=C,y=(0,d.Z)(x,i,n,!1,null,"1c7f7a67",null),Z=y.exports,P=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"texto-central"},[t._v(t._s(t.titulo))]),e("p",{staticClass:"texto-central"},[t._v(t._s(t.mensagem))]),e("input",{staticClass:"filtro",attrs:{type:"search",placeholder:"filtre por titulo"},on:{input:function(e){t.filtro=e.target.value}}}),e("ul",{staticClass:"lista-fotos"},t._l(t.fotosComFiltro,(function(o){return e("li",{key:o.url,staticClass:"lista-fotos-item"},[e("meu-painel",{attrs:{titulo:o.titulo}},[e("imagem-responsiva",{directives:[{name:"meu-transform",rawName:"v-meu-transform:rotate.animate",value:15,expression:"15",arg:"rotate",modifiers:{animate:!0}}],attrs:{url:o.url,titulo:o.titulo}}),e("router-link",{attrs:{to:{name:"altera",params:{id:o._id}}}},[e("meu-botao",{attrs:{tipo:"button",rotulo:"ALTERAR"}})],1),e("meu-botao",{attrs:{tipo:"button",rotulo:"REMOVER",confirmacao:!0,estilo:"perigo"},on:{botaoAtivado:function(e){return t.remove(o)}}})],1)],1)})),0)])},k=[],A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"painel"},[e("h1",{staticClass:"painel-titulo",on:{dblclick:function(e){t.visivel=!t.visivel}}},[t._v(t._s(t.titulo))]),e("transition",{attrs:{name:"painel-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visivel,expression:"visivel"}],staticClass:"painel-conteudo"},[t._t("default")],2)])],1)},R=[],q={props:["titulo"],data(){return{visivel:!0}}},N=q,T=(0,d.Z)(N,A,R,!1,null,"0735b9de",null),E=T.exports,j={components:{"meu-painel":E,"imagem-responsiva":v,"meu-botao":b},data(){return{titulo:"Testando api",fotos:[],filtro:"",mensagem:""}},computed:{fotosComFiltro(){if(this.filtro){let t=new RegExp(this.filtro.trim(),"i");return this.fotos.filter((e=>t.test(e.titulo)))}return this.fotos}},methods:{remove(t){this.service.apaga(t._id).then((()=>{let e=this.fotos.indexOf(t);this.fotos.splice(e,1),this.mensagem="Foto removida com sucesso"}),(t=>{this.mensagem=t.message}))}},created(){this.service=new w(this.$resource),this.service.lista().then((t=>this.fotos=t),(t=>this.mensagem=t.message))}},z=j,B=(0,d.Z)(z,P,k,!1,null,null,null),L=B.exports;const D=[{path:"",name:"home",component:L,titulo:"Home",menu:!0},{path:"/Cadastro",name:"cadastro",component:Z,titulo:"Cadastro",menu:!0},{path:"/Cadastro/:id",name:"altera",component:Z,titulo:"Cadastro",menu:!1},{path:"*",component:L,menu:!1}];var F=function(){var t=this,e=t._self._c;return e("nav",[e("ul",t._l(t.rotas,(function(o){return e("li",{key:o},[e("router-link",{attrs:{to:o.path?o.path:"/"}},[t._v(" "+t._s(o.titulo)+" ")])],1)})),0)])},S=[],I={props:{rotas:{type:Array,required:!0}}},U=I,V=(0,d.Z)(U,F,S,!1,null,null,null),M=V.exports,G={data(){return{routes:D.filter((t=>t.menu))}},components:{"meu-menu":M}},H=G,K=(0,d.Z)(H,a,s,!1,null,null,null),J=K.exports,Q=o(6642),W=o(8408),X=o.n(W);r.ZP.directive("meu-transform",{bind(t,e){let o=0;t.addEventListener("dblclick",(function(){let r,a=e.value||90;e.arg&&"rotate"!=e.arg?"scale"==e.arg&&(r=`scale(${a})`):(e.modifiers.reverse?o-=a:o+=a,r=`rotate(${o}deg)`),t.style.transform=r,e.modifiers.animate&&(t.style.transition="transform 0.5s")}))}});var Y=o(7499),tt=o.n(Y),et={after:(t,[e])=>`O campo ${t} deve estar depois do campo ${e}.`,alpha_dash:t=>`O campo ${t} deve conter letras, números e traços.`,alpha_num:t=>`O campo ${t} deve conter somente letras e números.`,alpha_spaces:t=>`The ${t} só pode conter caracteres alfabéticos e espaços.`,alpha:t=>`O campo ${t} deve conter somente letras.`,before:(t,[e])=>`O campo ${t} deve estar antes do campo ${e}.`,between:(t,[e,o])=>`O campo ${t} deve estar entre ${e} e ${o}.`,confirmed:(t,[e])=>`O campo ${t} e ${e} devem ser iguais.`,credit_card:t=>`O campo ${t} é inválido.`,date_between:(t,[e,o])=>`O campo ${t} deve estar entre ${e} e ${o}.`,date_format:(t,[e])=>`O campo ${t} deve estar no formato ${e}.`,decimal:(t,[e]=["*"])=>`O campo ${t} deve ser numérico e deve conter ${"*"===e?"":e} casas decimais.`,digits:(t,[e])=>`O campo ${t} deve ser numérico e ter ${e} dígitos.`,dimensions:(t,[e,o])=>`O campo ${t} deve ter ${e} pixels de largura por ${o} pixels de altura.`,email:t=>`O campo ${t} deve ser um email válido.`,ext:t=>`O campo ${t} deve ser um arquivo válido.`,image:t=>`O campo ${t} deve ser uma imagem.`,in:t=>`O campo ${t} deve ter um valor válido.`,ip:t=>`O campo ${t} deve ser um endereço IP válido.`,max:(t,[e])=>`O campo ${t} não deve ter mais que ${e} caracteres.`,max_value:(t,[e])=>`O campo ${t} precisa ser ${e} ou menor.`,mimes:t=>`O campo ${t} deve ser um tipo de arquivo válido.`,min:(t,[e])=>`O campo ${t} deve conter pelo menos ${e} caracteres.`,min_value:(t,[e])=>`O campo ${t} precisa ser ${e} ou maior.`,not_in:t=>`O campo ${t} deve ser um valor válido.`,numeric:t=>`O campo ${t} deve conter apenas números`,regex:t=>`O campo ${t} possui um formato inválido.`,required:t=>`O campo ${t} é obrigatório.`,size:(t,[e])=>`O campo ${t} deve ser menor que ${e} KB.`,url:t=>`O campo ${t} não é uma URL válida.`};r.ZP.use(Q.ZP),r.ZP.http.options.root="http://localhost:3000",r.ZP.use(X()),r.ZP.config.productionTip=!1;const ot=new(X())({routes:D,mode:"history"});r.ZP.use(tt(),{locale:"pt_BR",dictionary:{pt_BR:{messages:et}}}),new r.ZP({render:t=>t(J),router:ot}).$mount("#app")},6608:function(){}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,r,a,s){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],s=t[c][2];for(var n=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(n=!1,s<i&&(i=s));if(n){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,a,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,s,i=r[0],n=r[1],l=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(l)var c=l(o)}for(e&&e(r);u<i.length;u++)s=i[u],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(c)},r=self["webpackChunkteste"]=self["webpackChunkteste"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(8693)}));r=o.O(r)})();
//# sourceMappingURL=app.d22730d1.js.map