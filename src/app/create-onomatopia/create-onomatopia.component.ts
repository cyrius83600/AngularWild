import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'create-onomatopia-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})
export class CreateOnomatopiaComponent {
  newOnomatopia:string="";
  @Output() sendOnomatopiaToParent:EventEmitter<string>= new EventEmitter();
  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

}
