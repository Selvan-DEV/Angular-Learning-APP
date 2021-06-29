import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent implements OnInit {

  empForm: FormGroup

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.empFormBuild();
  }

  empFormBuild() {
    this.empForm = this.formBuild.group({
      name: [''],
      phone: [''],
      address: this.formBuild.group({
        street: [''],
        city: [''],
        state: [{ value: 'Tamilnadu', disabled: true }],
        country: [{ value: 'India', disabled: true }],
        zip: ['']
      }),
      email: [''],
      pan: [''],
      gstin: [''],
      currency: [{ value: 'INR', disabled: 'true' }]
    });
  }

  onSave() {

  }

}
