import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee';
import { LEAVE_STATUS_LABELS, LEAVE_TYPE_LABELS, LeaveRequest } from './models/leave-request';
import { Sidebar } from './layout/sidebar/sidebar';
import { Topbar } from './layout/topbar/topbar';
import { StatCard } from './features/dashboard/stat-card/stat-card';

@Component({
  imports: [RouterOutlet, Sidebar, Topbar, StatCard], // On met dedans les composants, pas les interfaces
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('techcorp-rh');
  // Valeurs affichees dans le gabarit avec {{ }}. Elles seront remplacees
  // par les donnees de l'utilisateur connecte lors des seances suivantes.
  protected readonly appName = 'TechCorp RH';
  protected readonly userName = signal('Claire Martin');

  // Etat d'ouverture de la navigation sur mobile.
  protected readonly navOpen = signal(false);

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }

  protected readonly currentUser: Employee = {
    id: 1,
    firstName: 'Claire',
    lastName: 'Martin',
    email: 'claire.martin@techcorp.fr',
    jobTitle: 'Développeuse',
    role: 'employee',
    managerId: 4,
    hiredAt: '2024-03-02',
  };

  protected readonly nextLeave: LeaveRequest = {
    id: 12,
    employeeId: 1,
    type: 'paid',
    startDate: '2026-10-26',
    endDate: '2026-10-30',
    status: 'pending',
  };

  protected readonly nextLeaveType = LEAVE_TYPE_LABELS[this.nextLeave.type];
  protected readonly nextLeaveStatus = LEAVE_STATUS_LABELS[this.nextLeave.status];
}
