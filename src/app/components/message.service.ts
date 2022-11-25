import { Injectable } from '@angular/core';
import { LeasingData } from './Leasingdata';
import { LeasingDataService } from './leasingdata.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  currmessage: LeasingData = {
    MO_Mneda: 2,
    VB_PeVnt: 118000,
    VB_CoIni: 3,
    VB_PcRcp: 1,
    PP_NmAns: 3,
    PP_FqPag: 30,
    PP_NmDxA: 360,
    PP_Grcia: 1,
    PP_PrGrc: 0,
    TX_TpInt: 2,
    TX_PcInt: 12,
    TX_PdInt: 360,
    TX_CaInt: 360,
    TX_DscKs: 17.5,
    TX_DscWC: 10,
    PC_CmAct: 1000,
    PC_PcRsk: 0.3,
    PC_PcIGV: 18,
    PC_PcIRt: 30,
    PX_PgIni: [{ PI_nm: 'Pago1', PI_cst: 0 }],
    PX_PgPer: [{ PP_nm: 'PagoPer1', PP_cst: 20 }],
  };

  add(message: LeasingData) {
    this.currmessage = message;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
