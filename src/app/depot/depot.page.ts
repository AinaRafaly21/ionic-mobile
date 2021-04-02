import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DepotService } from 'src/services/depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
  status : any = '';
  
  constructor(private depotServ : DepotService, router : Router) { }

  idUtilisateur : any;

  ngOnInit() {
  }

  deposer(DepotForm : NgForm){
    this.depotServ.deposer(DepotForm.value).subscribe(
      (res)=>{
       console.log(res)
       new alert("Vous avez fait un depot de"+DepotForm.value.montant+"AR en attente de validation.");
      },
      (err)=>{
        let err_message = err.error;
        if(err.error['META'] != undefined) err_message = err.error['META'].message;
        new alert("Le montant entré ne peut pas être négatif.");
      }
    );
  }
}
