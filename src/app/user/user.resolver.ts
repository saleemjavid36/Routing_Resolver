import { UsersService } from './users.service';
import { User } from './user';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private users:UsersService,private router:Router){}

  resolve(
    route: ActivatedRouteSnapshot,
     ): Observable<boolean| any> {
    return this.users.getUser(route.params?.['id']).pipe(
      delay(400),
      catchError(()=>{
        this.router.navigate([""]);
        return EMPTY
      })
    );
  }
}
