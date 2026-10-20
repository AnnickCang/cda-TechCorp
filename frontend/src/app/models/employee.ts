export type Role = 'employee' | 'manager' | 'hr' | 'admin';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  role: Role;
  managerId?: number; // optionnel
  readonly hiredAt: string; // date ISO, jamais modifiée
}
