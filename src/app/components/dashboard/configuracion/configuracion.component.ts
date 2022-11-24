import { Component,OnInit} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
    name = 'Angular 5';
    displayedColumns = ['Fecha', 'Precio','Tiempo','Tasa']
    dataSource = [{Fecha:'18/05/22',Precio:15000, Tiempo: '3 años', Tasa: 'TNA 18%'}, 
                 {Fecha:'12/03/22',Precio:20000, Tiempo: '2 años', Tasa: 'TNA 12%'},
                {Fecha:'11/12/21',Precio:9000, Tiempo: '1 años', Tasa: 'TNA 18%'}]
 
  
    constructor() { }

    ngOnInit(): void {
    }
  
  }
  