import { Component, Injector, OnInit, Input } from '@angular/core';
import { BaseComponent } from '@geekymedic/common';
import { Step } from './step';
import { format } from 'date-fns';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  @Input() steps: Step[];
  ngOnInit() {
    let flag: boolean;
    if (this.steps && this.steps.length > 0) {
      for (const step of this.steps) {
        if (!flag && step.time) {
          step.time = format(step.time, 'YYYY/MM/DD HH:mm:ss');
          step.finish = true;
        } else {
          step.finish = false;
          flag = true;
        }
      }
    }
  }
}
