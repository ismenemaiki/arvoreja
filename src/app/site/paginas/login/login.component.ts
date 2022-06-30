/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dadosUsuario = this.fb.group({
    email: [''],
    senha: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('LOGAR');  
  }

  checkbox(event: any): void {
    console.log('checkado: ', event.target.checked);
  }
}
