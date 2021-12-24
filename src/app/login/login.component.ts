import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email: string ="";
pass: string= "";
user:any={"id":0, "nom":"", "prenom":"","email":"", "password":""}
  constructor(private gest: GestionService, private route:Router) { }

  ngOnInit(): void {
    this.gest.getUsers().subscribe(

      {next:(data:any)=>{
    console.log(data)
      },
      error:(err: any) => { },
      complete: () => { } 
      } )
    this.user=localStorage.getItem("u1");
   if(this.user!=null){
     this.route.navigate(["recus"])
   }
  }
verif(){
  this.gest.verif(this.email,this.pass).subscribe(

{next:(data:any)=>{
  if(data.length >0){
  localStorage.setItem("u1", JSON.stringify(data[0]));
    this.route.navigate(["recus"])
  }
},
error:(err: any) => { },
complete: () => { }

}



  )
}
}
