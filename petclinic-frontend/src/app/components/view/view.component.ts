import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  public visits: Observable<any[]> = new Observable();
  constructor(private visitService: VisitService){}

  ngOnInit(): void {
    this.visits = this.visitService.getAllVisits();
  }
}
