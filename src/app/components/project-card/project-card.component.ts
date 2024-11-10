import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { FundingFormComponent } from "../funding-form/funding-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProgressBarComponent, FundingFormComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input()
  project!: Project;
  @Output() select = new EventEmitter<Project>();

  showFundingForm = false;

  onSelect() {
    this.select.emit(this.project);
  }
}