import { Component, OnInit, Input, Injector } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BaseComponent } from '@geekymedic/common';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styles: [],
})
export class UserModalComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
    });
  }
  validateForm: FormGroup;
  @Input() model;
  ngOnInit() {
    if (this.model) {
      this.validateForm.patchValue({
        name: this.model.name,
        description: this.model.description,
      });
    }
  }
  get verify(): boolean {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    return !this.validateForm.invalid;
  }
}
