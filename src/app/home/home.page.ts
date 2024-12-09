import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPerfil(perfil: string) {
    this.router.navigate([`/perfil`]);
  }

  goToUsuario(usuario: string) {
    this.router.navigate([`/usuario`]);
  }

  goToRol(rol: string) {
    this.router.navigate([`/rol`]);
  }

}
