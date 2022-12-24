import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogs:any = []; 

  constructor(){
    this.blogs = this.getBlogs();
    console.log('constructor',this.getBlogs());
  }
  
  

  getBlogs(){

    return [
      {id: 1, image: 'noruega_top.jpg',title:'La primavera en Noruega', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum lectus. Donec ullamcorper est lectus, a sodales tortor euismod', 
        author: 'juan perez', date: '10/12/2003'},
      {id: 2, image: 'brasil_top.jpg',title:'Conociendo Brasil', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum lectus. Donec ullamcorper est lectus, a sodales tortor euismod', 
        author: 'juan perez', date: '10/12/2003'},
      {id: 3, image: 'world_top.jpg',title:'Top 10 Mejores destinos', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum lectus. Donec ullamcorper est lectus, a sodales tortor euismod',
        author: 'juan perez', date: '10/12/2003'},
      {id: 4, image: 'baja_top.jpg',title:'Conoce la Baja', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum lectus. Donec ullamcorper est lectus, a sodales tortor euismod',
        author: 'juan perez', date: '10/12/2003'},
      {id: 5, image: 'primer_top.jpg',title:'Mi primer Blog', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ipsum lectus. Donec ullamcorper est lectus, a sodales tortor euismod',
        author: 'juan perez', date: '10/12/2003'},
    ]

  }
}
