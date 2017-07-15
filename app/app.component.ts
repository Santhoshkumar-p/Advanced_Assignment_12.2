import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    private users: any[] = [
        {name: 'Mahi', type: 'private', description: 'He is an employee'},
        {name: 'Dipu', type: 'public', description: 'Dipu is an employee of Facebook and is a design engineer'},
        {name: 'Amit', type: 'private', description: 'Amit is a boy'}
       
  ]
}
   