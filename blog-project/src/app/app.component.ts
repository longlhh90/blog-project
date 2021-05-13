import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows?: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profile_list = [ 
    'D.O.B: Jan 01 2001',
    'Job: Beggar',
    'Hobbies: Fucking shit'
  ];

  tiles: Tile[] = [
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 3, color: '#DDBDF1'},
  ];
}
