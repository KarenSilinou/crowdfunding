import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FundingFormComponent } from "./components/funding-form/funding-form.component";
import { ProjectCardComponent } from "./components/project-card/project-card.component";
import { Project } from "./models/project.model";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { FundService } from "./fund.service";
import { FundsComponent } from "./components/fund/fund.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    FundingFormComponent,
    ProgressBarComponent,
    FundsComponent
],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state("void", style({ opacity: 0, transform: "translateY(-20px)" })),
      transition(":enter", [animate("300ms ease-in")]),
      transition(":leave", [animate("300ms ease-out")]),
    ]),
  ],
})
export class AppComponent {
fundProject($event: { project: Project; amount: number; }) {
throw new Error('Method not implemented.');
}
projects: Project[] = [
  {
    id: 1,
    title: "Eco-Friendly Water Bottle",
    description: "A sustainable water bottle made from recycled materials.",
    goal: 10000,
    raised: 4500,
  },
  {
    id: 2,
    title: "Community Garden",
    description: "Creating a sustainable garden for the local community.",
    goal: 5000,
    raised: 1750,
  },
  {
    id: 3,
    title: "Educational App",
    description: "An app to help children learn programming basics.",
    goal: 15000,
    raised: 9000,
  },
];

  selectedProject: any;
  isFormVisible = false;

  constructor(private fundService: FundService) {}

  // Affiche le formulaire de création de fond
  showFundForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  hideFundForm(): void {
    this.isFormVisible = false;
  }

  createNewFund(fundData: any): void {
    this.fundService.createFund(fundData).subscribe(
      (response: any) => {
        console.log('Fond créé avec succès:', response);
        this.isFormVisible = false; 
      },
      (error: any) => {
        console.error('Erreur lors de la création du fond:', error);
      }
    );
  }

  // Sélectionne un projet existant
  selectProject(project: any) {
    this.selectedProject = project; // Sélectionne un projet
    this.isFormVisible = false; // Cache le formulaire si un projet est sélectionné
  }
}
