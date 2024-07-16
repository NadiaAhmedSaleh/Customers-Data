import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Transaction, Users } from 'src/app/users';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: Users[] = [];

  searchTerm: string = '';
  constructor(private _dataService: ServiceService) {}

  ngOnInit() {
    this._dataService.getData().subscribe((res: any) => {
      this.user = res.customers.map((elem: Users) => ({
        ...elem,
        transactions: res.transactions.filter(
          (t: Transaction) => t.customer_id === elem.id
        ),
      }));
      console.log(this.user);
    });
  }
}
