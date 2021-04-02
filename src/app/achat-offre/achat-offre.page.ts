import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/services/offre.service';

@Component({
  selector: 'app-achat-offre',
  templateUrl: './achat-offre.page.html',
  styleUrls: ['./achat-offre.page.scss'],
})
export class AchatOffrePage implements OnInit {
  listOffre : any;

  constructor(private offService : OffreService, public router : Router) { }

  ngOnInit() {
    this.offService.findOffre().subscribe((res : any[]) => {
      this.listOffre = res['data'];
      console.log('DATA', this.listOffre);
    },
    (err) =>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
    });
  }

}
