import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  messagecontent:string = "";
  messages: string[] = [];
  ioConnection:any;

  constructor(private socketService:SocketService){ }

  ngOnInit(){
    this.initIoConnection();
  }
  private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.getMessage().subscribe((message:string)=>{
      this.messages.push(message);
    });
  }
  public chat(){
    if(this.messagecontent){
      //check there is a message to send
      this.socketService.send(this.messagecontent);
      this.messagecontent="";
    }else{
      console.log('no message');
    }
  }
}
