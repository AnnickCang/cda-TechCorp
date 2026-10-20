export type LeaveType = 'paid' | 'rtt' | 'sick' | 'unpaid';
export type LeaveStatus = 'pending' | 'manager-approved' | 'approved' | 'rejected';

export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: LeaveType;
  startDate: string;
  endDate: string;
  reason?: string;
  status: LeaveStatus;
}

export const LEAVE_TYPE_LABELS: Record<LeaveType, string> = {
  paid: 'Congés payés',
  rtt: 'RTT',
  sick: 'Maladie',
  unpaid: 'Sans solde',
};

export const LEAVE_STATUS_LABELS: Record<LeaveStatus, string> = {
  'manager-approved': 'Approuvée par le manager', // Attention au '-' dans un nom composé, toujours l'entourer de côtes ou double côtes
  approved: 'Approuvée',
  pending: 'En attente',
  rejected: 'Rejetée',
};
