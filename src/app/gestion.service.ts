import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  getUsers(){

    return this.http.get("http://localhost:8080/users");
  }

  getUsersById(id:number){

    return this.http.get("http://localhost:8080/user/"+id);
  }
  getMessageRecus(id:number){
    return this.http.get("http://localhost:8080/messagesrecus/"+id);
    
      }
      getMessageEnvoyer(id:number){
        return this.http.get("http://localhost:8080/messagessend/"+id);
        
          }
      sendMessage(message:any){
    
        return this.http.post("http://localhost:8080/sendMessage/",message);
      }
     verif(email:string,password:string){
        return this.http.get("http://localhost:8080/verif/"+email+"/"+password);
      }


}
