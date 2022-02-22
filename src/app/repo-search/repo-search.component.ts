import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  repoitems: any[];
  repoName:string= "GitSearch";

  constructor(private UserServiceService: UserServiceService) { 
    
  }

  findRepo () {
    this.UserServiceService.UpdateRepo(this.repoName);
    this.UserServiceService.searchrepos().subscribe(repo => {
     
      this.repoitems;
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}