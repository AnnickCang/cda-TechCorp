import { Service, computed, inject, signal } from '@angular/core';
import { LeaveRequest, LeaveType } from '../models/leave-request';
import { countWorkingDays } from '../shared/date-utils';
import { LEAVE_REQUESTS, PAID_LEAVE_ALLOWANCE } from './mock-data';
import { Session } from './session';

export interface LeaveBalance {
  total: number;
  taken: number;
  pending: number;
  remaining: number;
}

export interface NewLeaveRequest {
  type: LeaveType;
  startDate: string;
  endDate: string;
}

@Service()
export class LeaveStore {
  private readonly session = inject(Session);
  private readonly requests = signal<LeaveRequest[]>(LEAVE_REQUESTS);
  /* Pas encore fini : TP arrêté momentanément pour passer sur un autre TP
  readonly myRequests = computed(() => {
    const userId = this.session.currentUser().id;
    return this.requests()
      .filter((request) =>);
  });*/
}
