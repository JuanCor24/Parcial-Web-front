import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Televisor } from '../../models/televisor';
import { TelevisorService } from '../../services/televisor.service';






@Component({
  selector: 'app-televisor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './televisor.component.html',
  styleUrl: './televisor.component.css'
})


export class TelevisorComponent implements OnInit {
  televisores: Televisor[] = [];
  televisor: Televisor = new Televisor();
  editing: boolean = false;

  constructor(private televisorService: TelevisorService) {}

  ngOnInit() {
    this.getTelevisores();
  }

  resetTelevisor() {
    this.televisor = new Televisor(); // Crea una nueva 
    this.editing = false;    // Actualiza el estado de edición
  }

  getTelevisores() {
    this.televisorService.getAllTelevisores().then(data => {
      this.televisores = data;
    }).catch(error => console.error('Error fetching celulares:', error));
  }

  saveCelular() {
    this.televisorService.saveTelevisor(this.televisor).then(() => {
      this.getTelevisores(); // Refresh the list
      this.televisor = new Televisor(); // Reset the form
      this.editing = false;
    }).catch(error => console.error('Error saving Televisor:', error));
  }
}
