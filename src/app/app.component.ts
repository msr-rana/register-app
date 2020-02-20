import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  educationTypes: any[] = [
    { value: 'psc', viewValue: 'PSC' },
    { value: 'jsc', viewValue: 'JSC' },
    { value: 'ssc', viewValue: 'SSC' },
    { value: 'hsc', viewValue: 'HSC' }
  ];

  departments: any[] = [
    { value: 'sewing', viewValue: 'Sewing' },
    { value: 'knitting', viewValue: 'Knitting' },
    { value: 'linking', viewValue: 'Linking' }
  ];

  units: any[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 }
  ];

  // reactive form group
  registerForm = this.formBuilder.group({
    trackingNo: [''],
    name: [''],
    dob: [''],
    age: [''],
    education: [''],
    assesmentDate: [''],
    joinDate: [''],
    department: [''],
    unit: [''],
    fingerId: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { }

  onSubmit() {
    console.log('form submitted');
    const values = this.registerForm.value;
    console.log('form value', values);
  }

  onDateOfBirthChage(event: MatDatepickerInputEvent<Date>) {
    const age = this.calculateAge(event.value);
    this.registerForm.patchValue({ age });
  }

  calculateAge(dob: Date): string {
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    const age = Math.abs(ageDt.getUTCFullYear() - 1970);
    return `${age} years`;
  }

}
