import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'babny-chart-pie',
  templateUrl: './babny-chart-pie.component.html',
  styleUrls: ['./babny-chart-pie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnyChartPieComponent implements OnInit {

  hoursByProjectChartData: any;

  constructor() { }

  ngOnInit() {
    this.hoursByProjectChartData = {
      labels: ['Payroll App', 'Agile Times App', 'Point of Sale App'],
      datasets: [
        {
          data: [8, 16, 24],
          backgroundColor: ['#3366CC', '#DC3912', '#FF9900']
        }
      ]
    };
  }

  // tslint:disable-next-line:member-ordering







}
