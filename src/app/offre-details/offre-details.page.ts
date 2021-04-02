import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AchatOffreService } from 'src/services/achat-offre.service';
import { OffreService } from 'src/services/offre.service';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.page.html',
  styleUrls: ['./offre-details.page.scss'],
})
export class OffreDetailsPage implements OnInit {
  offre : any = '';
  detailsOffre : any = '';
  idUtilisateur : any;

  constructor(private activatedRoute : ActivatedRoute, private offServ : OffreService, private achOffServ : AchatOffreService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.offServ.getOffre(id).subscribe((res : any[]) =>{
      console.log(res['data']);
      this.offre = res['data'][0];
    }),
    this.offServ.getOffreDetails(id).subscribe((res : any[]) => {
      this.detailsOffre = res['data'];
      console.log('DATA', this.detailsOffre);
    })
  }

  acheter(modeachat : any){
    let data_offre = {idOffre : this.offre.idOffre , idUtilisateur : this.idUtilisateur, idModeAchat : modeachat };
    this.achOffServ.acheter(data_offre).subscribe(
      (res)=>{
      console.log(res)
       new alert("Votre achat a été effectué avec succès.");
      },
      (err)=>{
        let err_message = err.error;
        if(err.error['META'] != undefined) err_message = err.error['META'].message;
        new alert("Votre solde est insuffisant pour cet achat.");
      }
    );
  }

}
