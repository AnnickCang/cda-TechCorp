import { Component, input, output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  imports: [],
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  host: {
    class: 'app__header topbar',
    role: 'banner',
  },
})
export class Topbar {
  readonly topbarAppName = input.required<string>();
  readonly currentUser = input.required<Employee>();
  readonly initials = input.required<string>();
  readonly topbarNavOpen = input(false);
  readonly menuToggle = output<void>();
}
