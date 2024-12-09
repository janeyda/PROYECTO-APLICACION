import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  // Funciones de navegación
  //funcion para navegar a la pagina anterior
  goBack() {
    this.router.navigate(['/usuario']);
    
  }
// Funciones de navegación hacia la pagina principal
  goHome() {
    this.router.navigate(['/home']);
    
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  };
 // funcion para crear un nuevo usuario
  async crearusuario() {
    console.log('Usuario creado con éxito:', this.usuario.password);
    if (this.usuario.nombre.trim() && this.usuario.apellido.trim() && this.usuario.email.trim() && this.usuario.password.trim()) {
      try {
        const userData = { 
          nombre: this.usuario.nombre, 
          apellido: this.usuario.apellido, 
          email: this.usuario.email, 
          password: this.usuario.password
        };

        const response = await CapacitorHttp.post({
          url: 'http://127.0.0.1:8000/api/usuarios', // Cambia la URL según tu API
          headers: { 'Content-Type': 'application/json' },
          data: userData, // Enviar los datos del usuario
        });
        console.log('Usuario creado con éxito:', this.usuario.password);
        console.log('Usuario creado con éxito:', response.data);
        // Mostrar mensaje de éxito o redirigir según sea necesario

      } catch (error) {
        console.error('Error al crear el usuario:', error);
        // Manejar errores según la respuesta del servidor
      }
    } else {
      console.log('Todos los campos son obligatorios');
    }
    
  }

}
