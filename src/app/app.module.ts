import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocketService } from './services/socket.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
