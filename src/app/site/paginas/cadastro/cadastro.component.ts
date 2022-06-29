import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  dadosUsuario = this.fb.group({
    nome: ['', Validators.required],
    sobrenome: ['', Validators.required],
    nascimento: [''],
    endereco: this.fb.group({
      logradouro: [''],
      numero: [''],
      cidadeEstado: [''],
      cep: [''],
      complemento: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit() {
    // salvar no endpoint de cadastro
    console.log(this.dadosUsuario.value);
  }
}
