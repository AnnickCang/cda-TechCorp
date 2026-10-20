import { Component, input, output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  imports: [],
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  host: {
    class: 'app__header topbar',
  },
})
export class Topbar {
  readonly topbarAppName = input.required<string>();
  readonly currentUser = input.required<Employee>();
  readonly topbarNavOpen = input();
  readonly menuToggle = output<void>();
}
