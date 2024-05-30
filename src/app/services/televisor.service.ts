import { Injectable } from '@angular/core';
import axios from 'axios';
import { Televisor } from '../models/televisor';

@Injectable({
  providedIn: 'root'
})
export class TelevisorService {
  private apiUrl = 'http://localhost:8080/televisores';

  constructor() { }

  getAllTelevisores(): Promise<Televisor[]> {
    return axios.get<Televisor[]>(this.apiUrl).then(response => {
      console.log("Televisores:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener los televisores", error);
      throw error;
    });
  }

  

  saveTelevisor(televisor: Televisor): Promise<Televisor> {
    const url = televisor.marca ? ${this.apiUrl}/${televisor.marca} : this.apiUrl;
    const method = televisor.marca ? 'put' : 'post';

    return axios({
      method: method,
      url: url,
      data: televisor
    }).then(response => {
      console.log(Televisor ${televisor ? 'actualizada' : 'guardada'}:, response.data);
      return response.data;
    }).catch(error => {
      console.error(Error al ${televisor.marca ? 'actualizar' : 'guardar'} el televisor, error);
      throw error;
    });
  }

 
}