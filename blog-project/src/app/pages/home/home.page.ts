import { Component } from '@angular/core';

export interface Tile {
    color: string;
    cols: number;
    rows?: number;
    text: string;
  }

@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
    profile_list = [ 
        'D.O.B: Jan 01 2001',
        'Job: Beggar',
        'Hobbies: Fucking shit'
      ];
    
      tiles: Tile[] = [
        {text: 'Header Picture', cols: 4, rows: 1, color: 'lightblue'},
        {text: 'Recent Posts', cols: 3, rows: 3, color: 'lightgreen'},
        {text: 'Contact Me', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Contact Me', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Contact Me', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Picture', cols: 4, rows: 1, color: '#DDBDF1'},
        {text: 'Footer', cols: 4, rows: 1, color: '#DD6DF1'},
      ];
}
