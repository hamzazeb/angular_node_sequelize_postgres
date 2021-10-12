import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;

  constructor(
    private userData: UsersDataService,
    public router: Router) {
    // this.userData.users().subscribe((data)=> {
    //   // console.warn("data is: ", data);
    //   this.users = data;
    // })
  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
  })

  ngOnInit(): void {
  }

  // calling loginUser method in users-data.service.ts
  loginUser(data:any) {

    this.userData.loginUser(data).subscribe((result: any) => {
      // console.log("login user API called: ", result)

      // this.router.navigate(['/profile'], { queryParams: { id: this.apiData.id, email: this.apiData.email, name: this.apiData.name}}); // sending params to profile component
      this.router.navigate(['/profile'], {state: {data: result}}); // sending data object to profile component using state(data will be removed on refresh)

    })
  }

  get email() {
    return this.loginForm.get('email');
  }
}
