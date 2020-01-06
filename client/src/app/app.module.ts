import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { ChatService } from './services/chat.service';
import { ChatModule, ConfigModule, WelcomeModule } from './modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChatModule,
    ConfigModule,
    WelcomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
