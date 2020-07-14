import { Component, OnInit,ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  data: any;
  currentDate: Date;
  day: string;
  dayNum: number;
  month: string;
  year: number;
  dayMap: string[]; 
  monthMap: string[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dayMap = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
    this.monthMap = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
         "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    this.currentDate = new Date();
    this.day = this.dayMap[this.currentDate.getDay()-1];
    this.month = this.monthMap[this.currentDate.getMonth()];
    this.dayNum = this.currentDate.getDate();
    this.year = this.currentDate.getFullYear();
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
