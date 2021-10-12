import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any;

  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data)=> {
      // console.warn("data is: ", data);
      this.users = data;
    })
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
  })

  ngOnInit(): void {
  }

  registerUser(data:any) {
    console.warn(data);
    // this.callAPI();
    this.userData.saveUser(data).subscribe((result) => {
      console.log("register user called")
      console.warn(result);
      var node = document.getElementById("alertReg");
       node!.style.visibility = 'visible';
    })
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }
}
