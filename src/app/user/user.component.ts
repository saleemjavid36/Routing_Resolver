import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { catchError, delay, map, switchMap } from "rxjs/operators";
import { User } from "./user";
import { UsersService } from "./users.service";

@Component({
  selector: "app-user",
  template: `
    <h1>User Details</h1>
    <section *ngIf="user$ | async as user; else loading" class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </section>

    <ng-template #loading>
      <span>Loading...</span>
    </ng-template>
  `,
  styles: [
    `
      .user-card {
        background-color: #fafafa;
        border-radius: 5px;
        padding: 5px;
      }
    `,
  ],
})
export class UserComponent implements OnInit {
  user$!: Observable<User>;
  constructor(private activatedRoute: ActivatedRoute,
              // private users:UsersService,
              // private router:Router
              ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.data.pipe(
      // map((params) => params?.["user"]),delay(400),
      // switchMap((id)=>this.users.getUser(id)),
      // catchError(()=>{
      //   this.router.navigate([""]);
      //   return EMPTY
      // })
      map(data=>data?.["user"])
      
    );
  }
}
