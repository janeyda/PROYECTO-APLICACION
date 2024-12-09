import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';
import { AlertController, IonButtons, IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  listaperfiles = ['Activo', 'inactivo'];
  public perfil :any = [
  ];
  public server='https://avatar.iran.liara.run/username?username=';
 


  // Funciones de navegación hacia atras
  goBack() {
    this.router.navigate(['/home']);
    
  }
  // Funciones de navegación hacia la pagina principal
  goHome() {
    this.router.navigate(['/home']);
   
  }
  // Funciones de navegación hacia adelante
 

  
  constructor( private router: Router, private alertController: AlertController) { }
// permite cargar los perfiles automaticamente se cargue la pagina 
  async ngOnInit() {

   
   
      const options = {
        url: 'http://127.0.0.1:8000/api/perfiles',
        headers: { 'Content-Type': 'application/json' },
      };
      
     const response:HttpResponse=await CapacitorHttp.get(options);
      this.perfil =response.data;
       console.log (this.perfil);
    }
  
  

  goToRegister() {
    this.router.navigate(['/perfilregistro']); // Navega a la página de registro de usuarios
  }

  async editar(usuarioId: any) {
    const alert = await this.alertController.create({
      header: 'Editar perfil',
      inputs: this. listaperfiles.map((perfil) => ({
        type: 'radio',
        label: perfil,
        value: perfil,
      })),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Actualizar',
          handler: async (nuevoperfil) => {
            if (nuevoperfil) {
              try {
                // Construir los datos para la actualización
                const rolData = { estado: nuevoperfil };
                const options = {
                  url: `http://127.0.0.1:8000/api/perfiles/${usuarioId}`, // Ruta del backend
                  headers: { 'Content-Type': 'application/json' },
                  data: rolData,
                };
  
                const response = await CapacitorHttp.put(options);
  
                if (response.status === 200) {
                  console.log(`Rol actualizado correctamente: ${usuarioId} -> ${nuevoperfil}`);
                  const options = {
                    url: 'http://127.0.0.1:8000/api/perfiles',
                    headers: { 'Content-Type': 'application/json' },
                  };
                  
                 const response:HttpResponse=await CapacitorHttp.get(options);
                  this.perfil =response.data;
                  // Actualizar la lista local si es necesario
                } else {
                  console.error('Error al actualizar el rol', response);
                }
              } catch (error) {
                console.error('Error en la solicitud de actualización:', error);
              }
            } else {
              console.log('No se seleccionó un rol para actualizar');
            }
          },
        },
      ],
    });
  
    await alert.present();
   
  }



    // funcion que aplica un scc diferente segun el estado y Convierte el estado a minúsculas.
  getEstadoClass(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'activo':
        return 'estado-activo';
      case 'inactivo':
        return 'estado-inactivo';
      case 'pendiente':
        return 'estado-pendiente';
      default:
        return 'estado-desconocido';
    }
  }
// funcion que permite la eliminacion de un usuario
  async confirmDelete(usuarioId: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: `¿Estás seguro de que deseas eliminar al perfil con ID ${usuarioId}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: async () => {
            try {
              // Llamar a la API para eliminar el usuario
              const options = {
                url: `http://127.0.0.1:8000/api/perfiles/${usuarioId}`,
                headers: { 'Content-Type': 'application/json' },
              };
              const response = await CapacitorHttp.delete(options);
  
              if (response.status === 200) {
                // Actualizar la lista local
                
                console.log(`perfil eliminado correctamente: ${usuarioId}`);
              } else {
                console.error('Error al eliminar el perfil', response);
              }
            } catch (error) {
              console.error('Error en la solicitud de eliminación:', error);
            }
          },
        },
      ],
    });
  
    await alert.present();
    window.location.reload();
  }
}

