import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
username: string = "Ayuhersi";
  repoName: string = "GitSearch";
  clientId: string = "3bbd8575c44cd99916d9";
  clientSecret: string = "2e3a7179b6500381f5d95fa6b66ef7c2a8749f57";
  apikey:string='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';
  constructor(private http: HttpClient) { 
     console.log('service is now ready');
  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}
