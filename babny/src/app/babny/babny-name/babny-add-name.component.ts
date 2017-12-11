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
  minStartDate = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      description: ['Baby Name', [Validators.required,
      Validators.maxLength(140)]],
      startDate: [new Date(), Validators.required],
      projectType: ['B']
    });
  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }

}
