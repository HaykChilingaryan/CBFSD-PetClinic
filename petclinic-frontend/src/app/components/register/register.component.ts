import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void {
    
  }

  constructor(public visitService:VisitService,
    private router: Router){

 }

  visitDetails = new FormGroup({
    petName:new FormControl(),
    petType:new FormControl(),
    ownerFirstName:new FormControl(),
    ownerLastName: new FormControl(),
    ownerEmail: new FormControl(),
    ownerPhoneNumber: new FormControl(),
    visitDetails: new FormControl()
  });
  
  storeVisit() {
    let visit = this.visitDetails.value;
    console.log(visit);
    this.visitService.storeVisit(visit).subscribe({
      next:(result:any)=>{
        console.log(result);
      },
      error:(error:any)=>{
        this.router.navigate(['/register']);
        this.visitDetails.reset;
      },
      complete:()=>this.router.navigate(['/view'])
    })
    
  }
}

export interface Visit {
  visitId:number;
  petName: string,
  petType: string,
  ownerFirstName: string,
  ownerLastName: string,
  ownerEmail: string,
  ownerPhoneNumber: number,
  visitDetails: string
}
