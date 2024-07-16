import { Pipe, PipeTransform } from '@angular/core';
import { Users, Transaction } from 'src/app/users';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(user:Users[], searchTerm:string ): Users[] {
    if(searchTerm) {
      return user.filter( (user)=>user.id===Number(searchTerm) || user.transactions.some(Transaction => Transaction.amount === Number(searchTerm)) );

    }else{
      return user;
    }
  }

}
