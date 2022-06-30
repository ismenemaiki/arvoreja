import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('menu');

  }
  login() {
    this.router.navigate(['/login']);
  }

  cadastro(): void {
    this.router.navigate(['/cadastro']);
  }

}
