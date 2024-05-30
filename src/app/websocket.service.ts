import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private websocket: any;
  private serverUrl = 'http://localhost:5000'; // remplacer avec votre URL serveur

  constructor() { 
    this.websocket = io(this.serverUrl);
  }

  public sendMessage(data : string): void {
    console.log(data)
    this.websocket.emit(data);
  }

  public getMessages(): Observable<string> {
    return new Observable<string>(observer => {
      this.websocket.on('responseVerif', (data: string) => {
        observer.next(data);
      });
    });
  }

}
