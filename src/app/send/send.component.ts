import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  user:any={"id":0,"nom":"","prenom":"","email":"","password":""}
  users:any={}
  message:any={"sujet":"","user_send":{"id":0,"nom":"","prenom":"","email":"","password":""},"user_receive":{"id":0,"nom":"","prenom":"","email":"","password":""}}
  constructor(private gest:GestionService , private route:Router) {   
     this.user=localStorage.getItem("u1");
  this.user=JSON.parse(this.user);

  this.message.user_send=this.user;

  this.gest.getUsers().subscribe(
    
    {next: (data:any)=>{
      this.users=data
      console.log(data)
    },
    error:(err:any) => {console.log(err) },
    complete: () => {}
    
    }
    
    
    )
  }

  ngOnInit(): void {
  }
  envoyer(){
    this.gest.sendMessage(this.message).subscribe( 
    {next: (data:any)=>{  this.route.navigate(['recus'])
      
    },
    error:(err:any) => {console.log(err) },
    complete: () => {}
      })}
}
