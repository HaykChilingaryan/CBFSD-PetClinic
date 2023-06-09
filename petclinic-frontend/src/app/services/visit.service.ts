import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../components/register/register.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private HttpClient: HttpClient){}

  getAllVisits():Observable<Visit[]>{
    return this.HttpClient.get<Visit[]>('http://18.220.94.38:4200:9090/visit/findAllVisits');
  }

  storeVisit(visit: any ):Observable<string>{
    return this.HttpClient.post("http://18.220.94.38:4200:9090/visit/storeVisit",visit, {responseType:'text'});
  }

  
  getVisitById(visitId: number){
    return this.HttpClient.get<Visit>('http://18.220.94.38:4200:9090/visit/findVisitById/'+visitId);
    
  }
  deleteVisit(visitId:any):Observable<string>{
    return this.HttpClient.delete("http://18.220.94.38:4200:9090/visit/deleteVisitById/"+visitId,{responseType:'text'});
  }
}
