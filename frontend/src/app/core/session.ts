import { Service, computed, signal } from '@angular/core';
import { Employee } from '../models/employee';
import { EMPLOYEES } from './mock-data';

@Service()
export class Session {
  // Avec private : la propriété user n'est accessible que dans cette class et elle ne pourra pas être modifiée depuis l'extérieur
  private readonly user = signal<Employee>(EMPLOYEES[0]);

  // .asReadOnly() : crée une version en lecture seule d'un Signal, pour que la valeur du Signal ne puisse pas être modifiée depuis l'extérieur
  readonly currentUser = this.user.asReadonly();

  // computed() : crée un Signal à partir de plusieurs autres Signal
  readonly initials = computed(() => {
    const { firstName, lastName } = this.user();
    return `${firstName[0]}${lastName[0]}`;
  });
}
