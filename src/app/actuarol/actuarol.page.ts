import { Component, OnInit } from '@angular/core';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';
@Component({
  selector: 'app-actuarol',
  templateUrl: './actuarol.page.html',
  styleUrls: ['./actuarol.page.scss'],
})
export class ActuarolPage implements OnInit {
  listaRoles = ['Estudiante', 'Docente', 'Encuestador'];
  
  roles = { id: null, nombre: '' };  // Asegurarte de tener el id también
  selectedRole: string = ''; 
  constructor() { }

  ngOnInit() {
  }
  async actualizarrol(usuarioId: any){
    if (this.roles.nombre.trim() && this.roles.id) { // Asegúrate de que el rol tenga un ID válido
      try {
        const rolData = { nombre_rol: this.roles.nombre }; // Cambiar 'nombre' por 'nombre_rol'
        const response = await CapacitorHttp.put({
          url: `http://127.0.0.1:8000/api/roles/${this.roles.id}`, // Usar ID para actualizar el rol específico
          headers: { 'Content-Type': 'application/json' },
          data: rolData, // Enviar 'nombre_rol' al backend
        });
  
        console.log('Rol actualizado con éxito:', response.data);
        // Mostrar un mensaje de éxito al usuario
      } catch (error) {
        console.error('Error al actualizar el rol:', error);
      }
    } else {
      console.log('El nombre del rol y el ID son obligatorios');
    }





  }
}
