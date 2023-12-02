import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../../models/personne.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  @Output() createEmitter = new EventEmitter();

  personne: Personne = {
    nom: '',
    prenom: '',
    age: 0,
    sexe: '',
    profession: ''
  };

  add() {
    this.createEmitter.emit(this.personne);
  }
}
