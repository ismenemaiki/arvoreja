/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent implements OnInit {
  dadosDoacao = this.fb.group({
    nomeDoador: [''],
    nomeReceptor: [''],
    arvore: [''],
    quantidade: [''],
    endereco: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}
  
  onSubmit(): void {}

}
