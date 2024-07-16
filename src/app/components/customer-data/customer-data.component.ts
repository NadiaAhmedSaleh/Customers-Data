import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { Transaction, Users } from 'src/app/users';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css'],
})
export class CustomerDataComponent implements OnInit {
  public chart: any;
  user: Users[] = [];
  transactionDates: string[] = [];
  transactionAmounts: number[] = [];

  constructor(
    private _dataService: ServiceService,
    private route: ActivatedRoute
  ) {}

  displayChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',

      data: {
        labels: this.transactionDates,
        datasets: [
          {
            label: 'amount',
            data: this.transactionAmounts,
            backgroundColor: 'grey',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  chartData() {
    this._dataService.getData().subscribe((result: any) => {
      this.route.params.subscribe((params) => {
        if (params) {
          const idParam = params?.['id'];
          const currentUserTransactions = result.transactions.filter(
            (r: Transaction) => r.customer_id === Number(idParam)
          );
          this.transactionDates = currentUserTransactions.map(
            (t: Transaction) => t.date
          );
          this.transactionAmounts = currentUserTransactions.map(
            (t: Transaction) => t.amount
          );
        }

        this.displayChart();
      });
    });
  }

  ngOnInit(): void {
    this.chartData();
  }
}
