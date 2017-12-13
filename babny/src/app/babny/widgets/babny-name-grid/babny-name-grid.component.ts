import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'babny-name-grid',
  templateUrl: './babny-name-grid.component.html',
  styleUrls: ['./babny-name-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnyNameGridComponent implements OnInit {

  selectedRows: Array<any>;

  allTimesheetData = [

    { user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
    { user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
    { user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
    { user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },

  ];

  allProjectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];

  allProjects = this.allProjectNames.map((proj) => {
    return { label: proj, value: proj };
  });

  constructor() { }

  ngOnInit() {
  }

  onRowSelect(rowInfo) {
   // alert(JSON.stringify(rowInfo.data));
  }

}
