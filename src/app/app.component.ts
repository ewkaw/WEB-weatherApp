import { Component, OnInit,ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  data: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.api.getData()
      .subscribe(data => {
         this.data = data;
          console.log(this.data);
      });
  }
}
