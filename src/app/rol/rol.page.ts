import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';
@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {
  listaRoles = ['Estudiante', 'Docente', 'Encuestador'];
  public roles :any = [
  ];
  public server='https://avatar.iran.liara.run/username?username=';

  constructor(private router: Router, private alertController: AlertController) { }
 //funcion para cargar los roles 
  async ngOnInit() {
   
      const options = {
        url: 'http://127.0.0.1:8000/api/roles',
        headers: { 'Content-Type': 'application/json' },
      };
      
     const response:HttpResponse=await CapacitorHttp.get(options);
      this.roles =response.data;
       console.log (this.roles);
    }
  


  

  goToRegister() {
    this.router.navigate(['/rol-registrar']); // Navega a la página de registro de rol
  }

  //funcion para actualizar los datos del rol
  async editar(usuarioId: any) {
    const alert = await this.alertController.create({
      header: 'Editar Rol',
      inputs: this.listaRoles.map((rol) => ({
        type: 'radio',
        label: rol,
        value: rol,
      })),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Actualizar',
          handler: async (nuevoRol) => {
            if (nuevoRol) {
              try {
                // Construir los datos para la actualización
                const rolData = { nombre_rol: nuevoRol };
                const options = {
                  url: `http://127.0.0.1:8000/api/roles/${usuarioId}`, // Ruta del backend
                  headers: { 'Content-Type': 'application/json' },
                  data: rolData,
                };
  
                const response = await CapacitorHttp.put(options);
  
                if (response.status === 200) {
                  console.log(`Rol actualizado correctamente: ${usuarioId} -> ${nuevoRol}`);
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


  // Funciones de navegación
  //funcion para navegar hacia atras
  goBack() {
    this.router.navigate(['/home']);
    
  }

 //funcion para navegar hacia la pagina principal
  goHome() {
    this.router.navigate(['/home']);
    
  }



 

//funcion  para eliminar un rol
async confirmDelete(usuarioId: any) {
  const alert = await this.alertController.create({
    header: 'Confirmar Eliminación',
    message: `¿Estás seguro de que deseas eliminar al rol con ID ${usuarioId}?`,
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
              url: `http://127.0.0.1:8000/api/roles/${usuarioId}`,
              headers: { 'Content-Type': 'application/json' },
            };
            const response = await CapacitorHttp.delete(options);

            if (response.status === 200) {
              // Actualizar la lista local
              
              console.log(`rol eliminado correctamente: ${usuarioId}`);
            } else {
              console.error('Error al eliminar el rol', response);
            }
          } catch (error) {
            console.error('Error en la solicitud de eliminación:', error);
          }
        },
      },
    ],
  });

  await alert.present();
 
}

}
