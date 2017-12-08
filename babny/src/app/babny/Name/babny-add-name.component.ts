import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'babny-add-name',
  templateUrl: './babny-add-name.component.html',
  styleUrls: ['./babny-add-name.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnyAddNameComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

}
