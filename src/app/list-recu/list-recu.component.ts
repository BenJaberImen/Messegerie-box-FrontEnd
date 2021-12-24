import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recu',
  templateUrl: './list-recu.component.html',
  styleUrls: ['./list-recu.component.scss']
})
export class ListRecuComponent implements OnInit {
user:any={"id":0,"nom":"","prenom":"","email":"","password":""}
liste:any={}
  constructor(private gest:GestionService) {
    this.user=localStorage.getItem("u1");
   this.user=JSON.parse(this.user);
    this.getMessagesRecus();
   }

  ngOnInit(): void {
  }
  getMessagesRecus(){


this.gest.getMessageRecus(this.user.id).subscribe(

{next: (data:any)=>{
  this.liste=data
  
  console.log(data)
},
error:(err:any) => {console.log(err) },
complete: () => {}

}


)





  }
}
