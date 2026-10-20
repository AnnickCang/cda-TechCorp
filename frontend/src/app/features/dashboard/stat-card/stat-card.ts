import { Component, input, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stat-card',
  templateUrl: './stat-card.html',
})
export class StatCard {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly unit = input('');
  readonly hint = input('');
  readonly max = input<number>();

  protected readonly percent = computed(() => {
    const max = this.max();
    const value = Number(this.value());
    if (!max || Number.isNaN(value)) {
      return null;
    }
    // Retourne un nombre entre 0 et 100
    return Math.min(100, Math.max(0, (value / max) * 100));
  });
}
