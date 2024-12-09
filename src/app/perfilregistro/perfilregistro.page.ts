import { Component, OnInit } from '@angular/core';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfilregistro',
  templateUrl: './perfilregistro.page.html',
  styleUrls: ['./perfilregistro.page.scss'],
})
export class PerfilregistroPage implements OnInit {
  
  perfiles = {
    estado: '',
    rol_id: null,
    usuarios_id: null,
  };
  public roles :any = [
  ];
  public usuarios :any = [
  ];
  
  constructor(private router: Router) { }

  async ngOnInit() {
    await this.cargarRoles();
    await this.cargarUsuarios();
   
  }
// funcion para traer los roles disponibles
  async cargarRoles() {
    try {
      const response = await CapacitorHttp.get({
        url: 'http://127.0.0.1:8000/api/roles',
        headers: { 'Content-Type': 'application/json' },
      });
      this.roles = response.data; // Asegúrate de que la API devuelve un array con roles
    } catch (error) {
      console.error('Error al cargar roles:', error);
    }
  }
  
// funcion para traer los usuarios 
  async cargarUsuarios() {
    try {
      const response = await CapacitorHttp.get({
        url: 'http://127.0.0.1:8000/api/usuarios',
        headers: { 'Content-Type': 'application/json' },
      });
      this.usuarios = response.data; // Asegúrate de que la API devuelve un array con usuarios
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  }
// funcion para crear un nuevo perfil con el usuario y rol
  async crearperfil() {
    if (this.perfiles.estado.trim() && this.perfiles.rol_id && this.perfiles.usuarios_id) {
      try {
        const perfilData = {
          estado: this.perfiles.estado,
          rol_id: this.perfiles.rol_id, // ID del rol
          usuarios_id: this.perfiles.usuarios_id, // ID del usuario
        };

        const response = await CapacitorHttp.post({
          url: 'http://127.0.0.1:8000/api/perfiles',
          headers: { 'Content-Type': 'application/json' },
          data: perfilData,
        });

        console.log('Perfil creado con éxito:', response.data);
        await this.cargarRoles();
    await this.cargarUsuarios();
      } catch (error) {
        console.error('Error al crear el perfil:', error);
      }
    } else {
      console.log('El estado, rol y usuario son obligatorios');
    }
    //window.location.reload();
  }
//funcion para navegar a la pagina anterior
  goBack() {
    this.router.navigate(['/perfil']);
    
  }
  // Funciones de navegación hacia la pagina principal
  goHome() {
    this.router.navigate(['/home']);
   
  }


}