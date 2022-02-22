import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = 'Ayuhersi'
  imageWidth: number = 150;
  imageHeight: number = 200;

  constructor(private UserServiceService: UserServiceService) { 
    
  }


  findUser () {
    this.UserServiceService.UpdateUser(this.username);

    this.UserServiceService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.UserServiceService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }

  ngOnInit() {
    this.findUser()
  }

}
