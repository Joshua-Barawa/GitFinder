import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Repository } from '../repository';
import { User } from '../user';

@Component({
  selector: 'app-finder-form',
  templateUrl: './finder-form.component.html',
  styleUrls: ['./finder-form.component.css']
})
export class FinderFormComponent implements OnInit {

  public username!:string;
  public user:any;
  public repos:any;
  submmitng = false;

   constructor(public configService:ConfigService) {
   
  }

  ngOnInit(): void {
   
   } 

  handleSearch(){
    this.user = this.configService.user;
    this.repos = this.configService.repository;
    
    this.configService.getUsers(this.username)
    for(let i =0;i<this.repos.length;i++){
      this.repos[i].repository = new Repository(this.repos[i].name, this.repos[i].language, this.repos[i].forks, this.repos[i].watchers, this.repos[i].stargazers_count,
        this.repos[i].html_url)
        console.log(this.repos[i].repository)
      }
  }

  onSubmit(){
    this.submmitng = true;
  }

}
