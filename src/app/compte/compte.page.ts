import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from 'src/services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
  compte : any = '';
  compteCredit : any = '';

  constructor(private activatedRoute : ActivatedRoute, private cptServ : CompteService) { }

  ngOnInit() {
    this.cptServ.getCompte().subscribe((res : any[]) =>{
      console.log(res['data'])
      this.compte = res['data'][0];
    }),
    this.cptServ.getCompteCredit().subscribe((resp : any[]) =>{
      console.log(resp['data'])
      this.compteCredit = resp['data'][0];
    })
  }

}
