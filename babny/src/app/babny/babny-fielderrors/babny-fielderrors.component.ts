import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';


@Component({
  selector: 'babny-fielderrors',
  templateUrl: './babny-fielderrors.component.html',
  styleUrls: ['./babny-fielderrors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnyFielderrorsComponent implements OnInit {

  @Input('form') form: FormGroup;
  @Input('field') fieldName: string;
  @Input('nicename') niceName: string;

  constructor() { }

  ngOnInit() {
  }

  fieldErrors(field: string) {
    const controlState = this.form.controls[field];
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;

  }

}
