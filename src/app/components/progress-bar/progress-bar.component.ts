import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() raised = 0;
  @Input() goal = 10000;

  get progressPercentage(): number {
    if (this.goal > 0) {
      return (this.raised / this.goal) * 100;
    }
    return 0;
  }
}