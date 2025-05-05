export class Pagina {
  tematica: string;
  url: string;
  static tematica: any;
  constructor(tematica: string, url: string) {
    this.tematica = tematica;
    this.url = url;
  }
}
