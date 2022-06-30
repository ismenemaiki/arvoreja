import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent  {

  constructor(private router: Router) { }

  

  contato(): void {
    this.router.navigate(['contato']);
  }

  doeMudas(): void {
    this.router.navigate(['doacao']);
  }
}
