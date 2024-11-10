import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funding-form',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './funding-form.component.html',
  styleUrls: ['./funding-form.component.scss']
})
export class FundingFormComponent {
  @Input() project: Project | null = null;
  @Output() onSubmit = new EventEmitter<{ project: Project; amount: number }>();
  amount: number = 0;

  submitFunding() {
    if (this.project && this.amount > 0) {
      this.onSubmit.emit({ project: this.project, amount: this.amount });
      this.amount = 0;
    } else {
      console.error('Montant invalide ou projet non sélectionné');
    }
  }
}