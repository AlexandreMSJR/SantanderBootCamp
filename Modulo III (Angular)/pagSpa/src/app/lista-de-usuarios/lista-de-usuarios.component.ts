import { Component, OnInit } from '@angular/core';

export interface usuarios {
  img: string;
  id: number;
  name: string;
  email: string;
  contatoOpcional?: string;
}

const ELEMENT_DATA: usuarios[] = [
  {img: './src/assets/imagens/id1DanieleTorres.jpg', id: 1, name: 'Daniele Torres', email: 'danitorres@gmail.com', contatoOpcional: '(53)86542-4643'},
  {img: './src/assets/imagens/id2JordanaPires.jpg', id: 2, name: 'Jordana Pires', email: 'jorpires@gmail.com', contatoOpcional: ''},
  {img: './src/assets/imagens/id3GiovaniGuedes.jpg', id: 3, name: 'Giovani Guedes', email: 'giguedes@gmail.com', contatoOpcional: '(53)99562-2245'},
  {img: './src/assets/imagens/id4RafaelFernandes.jpg', id: 4, name: 'Rafael Fernandes', email: 'rahf@gmail.com', contatoOpcional: ''},
  {img: './src/assets/imagens/id5BaraoJr.jpg', id: 5, name: 'Barão Junior', email: 'boron22@gmail.com', contatoOpcional: ''},
];

@Component({
  selector: 'spa-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})

export class ListaDeUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['img', 'id', 'name', 'email', 'contatoOpcional'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
