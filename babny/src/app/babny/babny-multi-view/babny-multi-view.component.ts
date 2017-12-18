import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var moment: any;
declare var google: any;

@Component({
  selector: 'babny-multi-view',
  templateUrl: './babny-multi-view.component.html',
  styleUrls: ['./babny-multi-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnyMultiViewComponent implements OnInit {

  day = 'Monday';
  dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');

  private userTimeData = [

    { day: 'Monday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Frontend' },
    { day: 'Tuesday', startTime: '9:00', endTime: '17:00', project: 'Payroll App', category: 'Backend' },
    { day: 'Wednesday', startTime: '9:00', endTime: '17:00', project: 'Point of Sale App', category: 'Operations' },
    { day: 'Thursday', startTime: '9:00', endTime: '17:00', project: 'Mobile App', category: 'Planning' },
    { day: 'Friday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Requirements' },

  ];

  daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ];

  constructor() { }

  ngOnInit() {
  }

  getTimesForDay(tabName: string) {
    return this.userTimeData.filter((row) => {
      return row.day === tabName;
    });
  }

  onChangeTabs(event) {
    const index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');
  }

}
