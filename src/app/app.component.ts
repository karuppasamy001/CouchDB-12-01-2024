import { Observable, forkJoin, switchMap } from 'rxjs';
import { CouchService } from './couch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  usersDetails: any
  clicked: boolean = false

  constructor(private couchService: CouchService) {}

  ngOnInit() {
    this.couchService.getAllDocuments().subscribe((data)=>{
      this.usersDetails = data
      console.log(JSON.stringify(this.usersDetails))
    })    
  }

  doOnClick(){
    this.usersDetails = Object.values(this.usersDetails.rows)
    this.clicked = true
  }
}
