import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { element } from 'protractor';

const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
  '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
  '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];

@Component({
  selector: 'babny-chart-pie',
  templateUrl: './babny-chart-pie.component.html',
  styleUrls: ['./babny-chart-pie.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BabnyChartPieComponent implements OnInit {

  hoursByProjectChartData: any;
  hoursByProject: any;

  pieLabels: any;
  pieData: any;
  pieColors: any;

  constructor() { }

  ngOnInit() {

    this.hoursByProject = [
      { id: 1, name: 'Payroll App', hoursSpent: 8 },
      { id: 2, name: 'Agile Times App', hoursSpent: 16 },
      { id: 3, name: 'Point of Sale App', hoursSpent: 24 },
    ];

    this.pieLabels = this.hoursByProject.map((proj) => proj.name);

    this.pieData = this.hoursByProject.map((proj) => proj.hoursSpent);

    this.pieColors = this.configureDefaultColours(this.pieData);

    this.hoursByProjectChartData = {
      labels: this.pieLabels,
      datasets: [
        {
          data: this.pieData,
          backgroundColor: this.pieColors
        }
      ]
    };



}

private configureDefaultColours(data: number[]): string[] {

      let customColors = [];
      if (data.length) {
        customColors = data.map((element, idx) => {
            return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
        });
      }

      return customColors;
    }
}
