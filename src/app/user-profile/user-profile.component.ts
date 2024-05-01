import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  // @Input()
  // quote:String='';
  afficher:boolean=false;
  user:any = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    quote : 'Citation'
  };
  
  changeVisibility():void{
    this.afficher = !this.afficher;
  }
}
