import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  messages: string[] = [];

  constructor(private chatService:ChatService) {}

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {    
    this.chatService
      .getMessages()
      .pipe(distinctUntilChanged())
      .subscribe((message:string) => {
        this.messages.push(message);
      });
  }
}
