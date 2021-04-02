import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { UtilisateurService } from 'src/services/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private utilServ : UtilisateurService, private router : Router) { }

  ngOnInit() {
  }

  connexion(LoginForm : NgForm){
    localStorage.clear();
    this.utilServ.login(LoginForm.value).subscribe(
      (res : any[]) =>{
      console.log(res);
      localStorage.setItem('token', res['data']);
      this.router.navigateByUrl('/accueil');
    },
    (err)=>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
      new alert("Numero ou mot de passe incorrect.");
      }
    );
  }
}
