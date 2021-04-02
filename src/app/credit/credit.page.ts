import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AchatCreditService } from 'src/services/achat-credit.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {

  constructor(private creditServ : AchatCreditService, router : Router) { }

  idUtilisateur : any;

  ngOnInit() {
  }

  acheter(CreditForm : NgForm){
    this.creditServ.acheterCredit(CreditForm.value).subscribe(
      (res)=>{
        console.log(res)
        new alert("Vous avez acheté "+CreditForm.value.montant+"AR de credit.")
      },
      (err)=>{
        let err_message = err.error;
        if(err.error['META'] != undefined) err_message = err.error['META'].message;
        new alert("Le montant entré ne peut pas être négatif.");
      }
    );
  }

}
