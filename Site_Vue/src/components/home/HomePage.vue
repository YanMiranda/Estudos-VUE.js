<template>
  <div>
    <h1 class="texto-central">{{ titulo }}</h1>

    <p class="texto-central">{{ mensagem }}</p>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="filtre por titulo"
    />

    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="foto in fotosComFiltro"
        :key="foto.url"
      >
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:rotate.animate="15"
            :url="foto.url"
            :titulo="foto.titulo"
          >
          </imagem-responsiva>
          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <meu-botao tipo="button" rotulo="ALTERAR" />
          </router-link>

          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template> 

<script>
import PainelAluraVue from "../shared/painel/Painel-alura.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue";
import Botao from "../shared/botao/BotaoPage.vue";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "meu-painel": PainelAluraVue,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      titulo: "Testando api",
      fotos: [],
      filtro: "",
      mensagem: "",
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },

  methods: {
    remove(foto) {
      this.service.apaga(foto._id)
      .then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso";
        },
        (err) => {
          this.mensagem = err.message;
          
        }
      );
    },
  },
  created() {
    // criando uma instância do nosso serviço que depende de $resource
    this.service = new FotoService(this.$resource);

    this.service
    .lista()
    .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  },
};
</script>

<style>
.texto-central {
  text-align: center;
}
.lista-fotos {
  list-style: nome;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}
/*.imagem-responsiva {
  width: 100%;
}*/
.filtro {
  width: 100%;
}
</style>
