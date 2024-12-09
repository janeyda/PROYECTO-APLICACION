
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';
@Component({
  selector: 'app-actuausuario',
  templateUrl: './actuausuario.page.html',
  styleUrls: ['./actuausuario.page.scss'],
})
export class ActuausuarioPage implements OnInit {
  usuarioId: any; // Acepta cualquier tipo
  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    
    // Obtén el parámetro "id" de la URL, y permite cualquier tipo de dato
    this.usuarioId = this.route.snapshot.paramMap.get('id'); // No uses "+" si esperas tipos mixtos
    console.log('Usuario ID recibido:', this.usuarioId);
    this.cargarDatosUsuario();
  }

  async cargarDatosUsuario() {
    try {
      const response = await CapacitorHttp.get({
        url: `http://127.0.0.1:8000/api/usuarios/${this.usuarioId}`,
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        this.usuario = response.data; // Asignar los datos recibidos al formulario
        console.log('Datos del usuario cargados:', this.usuario);
      } else {
        console.error('Error al cargar datos del usuario', response);
      }
    } catch (error) {
      console.error('Error en la solicitud de datos del usuario:', error);
    }
  }

  async editarUsuario() {
    try {
      const response = await CapacitorHttp.put({
        url: `http://127.0.0.1:8000/api/usuarios/${this.usuarioId}`,
        headers: { 'Content-Type': 'application/json' },
        data: this.usuario, // Enviar los datos del formulario
      });

      if (response.status === 200) {
        console.log('Usuario actualizado con éxito:', response.data);
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      } else {
        console.error('Error al actualizar el usuario', response);
      }
    } catch (error) {
      console.error('Error en la solicitud de actualización:', error);
    }
  }

}
