import { Component, OnInit } from '@angular/core';
import { FundService } from '../../fund.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fund',
  standalone: true,
  imports: [ CommonModule, FormsModule, HttpClientModule ],
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundsComponent implements OnInit {
  funds: any[] = [];
  newFund = {
    title: '',
    description: '',
    goal: 0
  };

  constructor(private fundService: FundService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadFunds();
  }

  loadFunds() {
    this.httpClient.get('http://localhost:3000/funds').subscribe(
      (response: any) => {
        console.log('Fonds chargés:', response);
        this.funds = response;
      },
      (error) => {
        console.error('Erreur lors du chargement des fonds:', error);
      }
    );
  }

  addFund(): void {
    console.log('Données envoyées:', this.newFund);
    this.fundService.createFund(this.newFund).subscribe(
      (response) => {
        console.log('Fond créé:', response);
        this.loadFunds();
        this.newFund = { title: '', description: '', goal: 0 };
      },
      (error) => {
        console.error('Erreur lors de la création du fond:', error);
      }
    );
  }
}
