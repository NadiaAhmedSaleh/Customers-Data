export interface Transaction {
  id: number;
  customer_id: number;
  date: string;
  amount: number;
}

export interface Users {
  id: number;
  name: string;
  transactions: Transaction[];
}
