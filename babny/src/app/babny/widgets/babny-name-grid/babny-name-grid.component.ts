import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BabnyNameService } from '../../services/babny-name.service';

@Component({
  selector: 'babny-name-grid',
  templateUrl: './babny-name-grid.component.html',
  styleUrls: ['./babny-name-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnyNameGridComponent implements OnInit {

  selectedRows: Array<any>;

  recordCount: number;

  allTimesheetData: any[];

  // allTimesheetData = [

  //   { user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
  //   { user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
  //   { user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
  //   { user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },

  // ];

  allProjectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];

  allProjects = this.allProjectNames.map((proj) => {
    return { label: proj, value: proj };
  });

  constructor(private _babyNameService: BabnyNameService) {

 
  }

  private SetTestData() {
    for (let x = 0; x < 5; x++) {
      this.allTimesheetData = this.allTimesheetData.concat(this.allTimesheetData);
    }
    this.recordCount = this.allTimesheetData.length;
  }

  ngOnInit() {
    this.allTimesheetData = this._babyNameService.getProductList();
    console.log(JSON.stringify(this.allTimesheetData));
    this.SetTestData();
  }

  onRowSelect(rowInfo) {
    // alert(JSON.stringify(rowInfo.data));
  }

}
