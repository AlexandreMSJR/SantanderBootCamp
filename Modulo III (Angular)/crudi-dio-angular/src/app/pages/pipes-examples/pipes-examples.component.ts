import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {
  number = 0
  text = 'hEllo world !'
  date = new Date
  pessoa = {
    nome: 'Alexandre Medeiros',
    idade: 24,
    profissao: 'Desenvolvedor'
  }
  nomes = ['Alexandre', 'Ana', 'Marcos']

  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'novo texto'
  }

  add(text1:string) {
    this.nomes.push(text1)
  }
}
