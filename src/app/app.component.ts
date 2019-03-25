import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias = [];
  titulo = '';
  descricao = '';
  date = '';
  checkbox = '';
  categorias = ['cat1','cat2'];
  tags = ['tag1','tag2'];

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }

  cadastrar() {
    const noticia = {
      id: this.noticias.length, 
      titulo: this.titulo,
      descricao: this.descricao, 
      date: this.date, 
      checkbox: this.checkbox, 
      categoria: this.categorias, 
      visivel: false
    };
    this.noticias.push(noticia);
    this.titulo = null;
    this.descricao = null;
    this.date = null;
    this.checkbox = null;
    this.categorias = null;
   }

  excluir(noticia){
    if(confirm("Tem certeza de que deseja deletar essa notícia?")) {
      console.log(
        this.noticias.splice(noticia)
      );
      }
  }

  editar(noticia){
    this.titulo = noticia.titulo;
    this.descricao = noticia.descricao;
    this.date = noticia.date;
    this.checkbox = noticia.checkbox;
    this.categorias = noticia.categorias;
    this.noticias.splice(noticia);
  }
}