import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LeasingResult } from '../../Leasingdata';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  displayedColumns = [
    'nCuota',
    'RC_SaldIni',
    'RC_Interes',
    'RC_Cuota',
    'RC_Amort',
    'RC_SegRsk',
    'RC_CostPer',
    'RC_Recompra',
    'RC_SaldFin',
    'RC_Deprec',
    'RC_AhorrTrib',
    'RC_IGV',
    'RC_FlujBruto',
    'RC_FlujIGV',
    'RC_FlujNeto',
  ];
  RA_MIGV: number = 0;
  RA_VaVe: number = 0;
  RA_MoLe: number = 0;
  RA_PTEP: number = 0;
  RA_NCuo: number = 0;
  RA_ToCo: number = 0;

  TCEA_Bruto: number = 0;
  TCEA_Neto: number = 0;
  VAN_Bruto: number = 0;
  VAN_Neto: number = 0;
  dataSource: LeasingResult[] = [];
  constructor(
    private http: HttpClient,
    public messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.loadLeasing();
  }
  loadLeasing() {
    const url = environment.apiURL + '/api/leasing_nosave/aleman';
    console.log(url)
    const body = this.messageService.get();
    console.log('Body Sent');
    console.log(body);
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    var info;
    this.http
      .post(url, body)
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.RA_MIGV = data.RES_Arr.RA_MIGV;
        this.RA_VaVe = data.RES_Arr.RA_VaVe;
        this.RA_MoLe = data.RES_Arr.RA_MoLe;
        this.RA_PTEP = data.RES_Arr.RA_PTEP;
        this.RA_NCuo = data.RES_Arr.RA_NCuo;
        this.RA_ToCo = data.RES_Arr.RA_ToCo;

        this.TCEA_Bruto = data.RES_Renta.TCEA_Bruto;
        this.TCEA_Neto = data.RES_Renta.TCEA_Neto;
        this.VAN_Bruto = data.RES_Renta.VAN_Bruto;
        this.VAN_Neto = data.RES_Renta.VAN_Neto;

        this.dataSource = data.RES_Cuota;
      })
      .catch((e) => {
        console.log(e);
        //this.dataSource = LEASING_DATA;
      });
  }
}
