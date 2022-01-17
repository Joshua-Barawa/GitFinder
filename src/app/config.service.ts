import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

public user:any;
public repository:any


constructor(private http:HttpClient) {}


  getUsers(name:string){
    this.http.get('https://api.github.com/users/' + name).subscribe((res) =>{
    this.user = res;
    this.user = new User(this.user.avatar_url,this.user.created_at,this.user.login ,this.user.location,this.user.public_repos,this.user.followers,this.user.following,this.user.html_url);
    })

    this.http.get("https://api.github.com/users/" + name +"/repos").subscribe(res =>{
      this.repository = res;
      for(let i =0;i<this.repository.length;i++){
        this.repository[i].repository = new Repository(this.repository[i].name, this.repository[i].language, this.repository[i].forks, this.repository[i].watchers, this.repository[i].stargazers_count,
          this.repository[i].html_url)
      }
    })
  }


}
