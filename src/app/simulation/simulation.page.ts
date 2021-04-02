import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SimulationService } from 'src/services/simulation.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.page.html',
  styleUrls: ['./simulation.page.scss'],
})
export class SimulationPage implements OnInit {
  idUtilisateur : any;
  listTypeOffre : any;

  constructor(private simService : SimulationService, public router : Router) { }

  ngOnInit() {
    this.simService.findType().subscribe((res : any[]) => {
      this.listTypeOffre = res['data'];
      console.log('DATA', this.listTypeOffre);
    },
    (err) => {
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
      console.log(err_message);
    });
  }

  simuler(SimulationForm : NgForm){
    this.simService.simuler(SimulationForm.value).subscribe(
      (res) =>{
        console.log(res);
        new alert("Simulation effectué.");
      },
      (err) =>{
        let err_message = err.error;
        if(err.error['META'] != undefined) err_message = err.error['META'].message;
        new alert("Votre offre de vous permet pas d'effectuer cette simulation.");
      }
    );
  }

}
