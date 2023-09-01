import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io, { Socket } from 'socket.io-client';

const SERVER_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket!: Socket; // Using Non-null Assertion Operator

  constructor() { }

  // Setup connection to socket server
  initSocket(): () => void {
    this.socket = io(SERVER_URL);
    return () => { this.socket.disconnect(); };
  }

  // Emit a message to the socket server
  send(message: string): void {
    this.socket.emit('message', message);
  }

  // Listen for "message" events from the socket server
  getMessage(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('message', (data: string) => { 
        observer.next(data); 
      });
    });
  }
}
