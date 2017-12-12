import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'babny-slider',
  templateUrl: './babny-slider.component.html',
  styleUrls: ['./babny-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnySliderComponent implements OnInit {

  @Input('form') form: FormGroup;
  @Input('formControlName') formControlName: FormControlName;
  @Input('field') fieldName: string;
  @Input('nicename') niceName: string;

  @Input('min') min: number;
  @Input('max') max: number;
  // @Input('rating') rating: number;

  constructor() { }

  ngOnInit() {
  }

}
