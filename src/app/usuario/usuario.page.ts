import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButtons, IonCardContent } from '@ionic/angular';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  

})



export class UsuarioPage implements OnInit {
  
  
  public usuarios:any = [
  ]; 
  isEditModalOpen = false;
  public server='https://avatar.iran.liara.run/username?username=[firstname+lastname]';
  constructor(private router: Router, private alertController: AlertController) { }
//funcion para navegar hacia atras
  goBac() {
    this.router.navigate(['/home']);
    
  }
 //funcion para navegar a la pagina principal
  goHom() {
    this.router.navigate(['/home']);
    
  }
  //muestra los usuarios registrados

  async ngOnInit() {

    const options = {
      url: 'http://127.0.0.1:8000/api/usuarios',
      headers: { 'Content-Type': 'application/json' },
    };
    
    const response:HttpResponse=await CapacitorHttp.get(options);
    this.usuarios =response.data;
     console.log (this.usuarios);
  }
 
  goToRegister() {
    this.router.navigate(['/registro']); // Navega a la página de registro de usuarios
  }

  // Funciones de navegación
  goBack() {
    console.log("Navegar hacia atrás");
    
  }

  goHome() {
    this.router.navigate(['/home']); // Navega a la página principal
    
  }

  goForward() {
    console.log("Navegar hacia adelante");
  
  }

  //funcion que permite eliinar un usuario
  async confirmDelete(usuarioId: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: `¿Estás seguro de que deseas eliminar al usuario con ID ${usuarioId}?`,
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
                url: `http://127.0.0.1:8000/api/usuarios/${usuarioId}`,
                headers: { 'Content-Type': 'application/json' },
              };
              const response = await CapacitorHttp.delete(options);
  
              if (response.status === 200) {
                // Actualizar la lista local
                
                console.log(`Usuario eliminado correctamente: ${usuarioId}`);
              } else {
                console.error('Error al eliminar el usuario', response);
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
// funcion que permite la dirigirse a la pagina de actualizar usuario
  async editar(usuarioId: any) {
    this.router.navigate(['//actuausuario', usuarioId]);
  }
  

  // funcion que permite agregar un nuevo usuario
  async guardarUsuario() {
    if (this.usuarios) {
      try {
        const options = {
          url: `http://127.0.0.1:8000/api/usuarios/${this.usuarios.id}`,
          headers: { 'Content-Type': 'application/json' },
          data: {
            nombre: this.usuarios.nombre,
            apellido: this.usuarios.apellido,
          },
        };

        const response = await CapacitorHttp.put(options);

        if (response.status === 200) {
          console.log('Usuario actualizado correctamente');
          // Actualizar la lista local
          
          
        } else {
          console.error('Error al actualizar el usuario', response);
        }
      } catch (error) {
        console.error('Error en la solicitud de actualización:', error);
      }
    }
  
  }




}
