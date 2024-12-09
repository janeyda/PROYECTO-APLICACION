import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';

@Component({
  selector: 'app-rol-registrar',
  templateUrl: './rol-registrar.page.html',
  styleUrls: ['./rol-registrar.page.scss'],
})
export class RolRegistrarPage implements OnInit {

  roles = { nombre: '' };
   // Funciones de navegación
   //funcion para navegar a la pagina anterior
   goBack() {
    this.router.navigate(['/rol']);
    
  }

  

// Funciones de navegación hacia la pagina principal
  goHome() {
    this.router.navigate(['/home']);
    
  }

  constructor(private router: Router) { }

  ngOnInit() {
   
  }
 
 
//funcion que permite crear un nuevo rol
 async crearrol() {
  if (this.roles.nombre.trim()) {
    try {
      const rolData = { nombre_rol: this.roles.nombre }; // Cambiar 'nombre' por 'nombre_rol'
      const response = await CapacitorHttp.post({
        url: 'http://127.0.0.1:8000/api/roles', // Asegúrate de que la URL sea correcta
        headers: { 'Content-Type': 'application/json' },
        data: rolData, // Enviar 'nombre_rol' al backend
      });

      console.log('Rol creado con éxito:', response.data);
      // Mostrar un mensaje de éxito al usuario

    } catch (error) {
      console.error('Error al crear el rol:', error);
    }
  } else {
    console.log('El nombre del rol es obligatorio');
  }
  
}

}
