import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {CapacitorHttp,HttpResponse}from '@capacitor/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  usuario = {
    
    email: '',
    password: '',
  };

  constructor(private alertController: AlertController, private router: Router) {} // <--- Agrega Router al constructor

        // metodo que permite enviar datos a la API para autenticación
  async goToHome() {
    if (this.usuario.email.trim() && this.usuario.password.trim()) {
      try {
        const userData = {
          email: this.usuario.email,
          password: this.usuario.password,
        };
  
        // Enviar datos a la API para autenticación
        const response: HttpResponse = await CapacitorHttp.post({
          url: 'http://127.0.0.1:8000/api/auth/login', // Cambia al endpoint de autenticación
          headers: { 'Content-Type': 'application/json' },
          data: userData,
        });
        console.log('Datos enviados:', userData);
        
        console.log('Contenido de data:', response.data);
        console.log('Respuesta del servidor:', response);
       
        if (response.status === 200 && response.data.success) {
          console.log('Autenticación exitosa:', response.data.success);
          // Redirigir al home
          this.router.navigate(['/home']);
        } else {
          // Mostrar alerta si las credenciales son incorrectas
          this.presentAlert('Error', 'Credenciales inválidas. Intenta nuevamente.');
        }
      } catch (error) {
        console.error('Error en la autenticación:', error);
        // Mostrar alerta en caso de fallo en la comunicación con el servidor
        this.presentAlert(
          'Error',
          'Hubo un problema al comunicarse con el servidor. Por favor, intenta nuevamente más tarde.'
        );
      }
    } else {
      // Mostrar alerta si los campos están vacíos
      this.presentAlert('Error', 'Todos los campos son obligatorios.');
    }
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  }