import { Pagina } from "../model/pagina";

export class FiltroService {
  datos = [
      new Pagina("deporte", "www.clubrubenuria.com"),
      new Pagina("ciencia", "www.abc/ciencia.com"),
      new Pagina("deporte","www.as.com"),
      new Pagina("libros", "www.casadellibro.com"),
      new Pagina("cocina", "www.masterchef.com"),
      new Pagina("ciencia", "www.nasa.com")
  ];

  filtrar(temas:string):Pagina[]{
    return this.datos.filter((pagina => pagina.tematica == temas));
  }
}


