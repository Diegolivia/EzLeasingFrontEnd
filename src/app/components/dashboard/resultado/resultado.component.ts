import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeasingResult } from '../../Leasingdata';
import { MessageService } from '../../message.service';


const LEASING_DATA: LeasingResult[] = [
  {
    nCuota: 1,
    RC_SaldIni: 101000,
    RC_Interes: -958.3680929999999,
    RC_Cuota: -3763.9236485555557,
    RC_Amort: -2805.5555555555557,
    RC_SegRsk: -29.5,
    RC_CostPer: -20,
    RC_Recompra: 0,
    RC_SaldFin: 98194.44444444444,
    RC_Deprec: -2777.777777777778,
    RC_AhorrTrib: -1135.6937612333334,
    RC_IGV: -686.4162567400001,
    RC_FlujBruto: -3813.4236485555557,
    RC_FlujIGV: -4499.839905295556,
    RC_FlujNeto: -2677.7298873222226,
  },
  {
    nCuota: 2,
    RC_SaldIni: 98194.44444444444,
    RC_Interes: -931.7467570833333,
    RC_Cuota: -3737.3023126388885,
    RC_Amort: -2805.555555555555,
    RC_SegRsk: -29.5,
    RC_CostPer: -20,
    RC_Recompra: 0,
    RC_SaldFin: 95388.88888888888,
    RC_Deprec: -2777.777777777778,
    RC_AhorrTrib: -1127.7073604583334,
    RC_IGV: -681.6244162749999,
    RC_FlujBruto: -3786.8023126388885,
    RC_FlujIGV: -4468.426728913888,
    RC_FlujNeto: -2659.094952180555,
  },
];

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
  constructor(private http: HttpClient, public messageService:MessageService) {}
  ngOnInit(): void {
    this.loadLeasing();
  }
  loadLeasing() {
    const url = 'http://152.67.43.35:3000/api/leasing_nosave/aleman';
    //const url = 'http://localhost:8080/api/leasing_nosave/aleman';
    const body = this.messageService.get()
    console.log("Body Sent")
    console.log(body)
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
