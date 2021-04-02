import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/services/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  idUtilisateur : any;

  constructor(private utilServ : UtilisateurService, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.utilServ.logout();
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  
}
