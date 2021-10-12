import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  channelAPIData: any;
  userData: any;

  constructor(private router: ActivatedRoute, private userChannel: UsersDataService) { }

  ngOnInit(): void {
    this.userData = history.state.data[0]; // getting data from login component using history
    // console.log("user data from history is: ", this.userData);
    this.showChannels(this.userData.id);
  }

  showChannels(id: any) {
    this.userChannel.showChannels(id).subscribe((result: any) => {
      // console.log("show channels API called: ", result);
      this.channelAPIData = result;
    })
  }

}
