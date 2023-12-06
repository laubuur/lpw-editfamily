import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Personne } from './models/personne.interface';
import { AddComponent } from './components/add/add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAddForm = false;
  selectedPersonne?: Personne; 

  liste: Personne[] = [
    {
      id: 1,
      nom: "Dupont",
      prenom: "Alice",
      age: 30,
      sexe: "Femme",
      profession: "Infirmière"
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Jean",
      age: 35,
      sexe: "Homme",
      profession: "Plombier"
    },
    {
      id: 3,
      nom: "Durand",
      prenom: "Marie",
      age: 32,
      sexe: "Femme",
      profession: "Prof"
    },
  ];


  addItem(item: Personne) {
    const id = this.liste[this.liste.length - 1].id;
    if (id !== undefined) {
      const newId = id + 1;
      item.id = newId;
      this.liste.push(item);
      this.closeAddForm();
    }
  }

  editItem(item: Personne) {
    const index = this.liste.findIndex(l => l.id === item.id);
    if (index !== -1) {
      this.liste[index] = item;
    }
  }

  selectPersonne(item: Personne) {
    this.selectedPersonne = item;
  }

  removeItem(index: number) {
    this.liste.splice(index, 1);
  }

  private closeAddForm() {
    this.showAddForm = false;
  }
}
