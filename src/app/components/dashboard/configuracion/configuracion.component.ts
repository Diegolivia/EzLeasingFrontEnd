import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LeasingData, PagoIniCustom, PagoPerCustom } from '../../Leasingdata';
import { LeasingDataService } from '../../leasingdata.service';
import { MessageService } from '../../message.service';

const PagoInitDATA: PagoIniCustom[] = [
  {
    PI_nm: 'Custom Payment',
    PI_cst: 100,
  },
];

const PagoPerDATA: PagoPerCustom[] = [
  {
    PP_nm: 'Custom Payment',
    PP_cst: 100,
  },
];

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
})
export class ConfiguracionComponent implements OnInit {
  Ldata: LeasingData = {
    MO_Mneda: this.messageService.currmessage?.MO_Mneda,
    VB_PeVnt: this.messageService.currmessage?.VB_PeVnt,
    VB_CoIni: this.messageService.currmessage?.VB_CoIni,
    VB_PcRcp: this.messageService.currmessage?.VB_PcRcp,
    PP_NmAns: this.messageService.currmessage?.PP_NmAns,
    PP_FqPag: this.messageService.currmessage?.PP_FqPag,
    PP_NmDxA: this.messageService.currmessage?.PP_NmDxA,
    PP_Grcia: this.messageService.currmessage?.PP_Grcia,
    PP_PrGrc: this.messageService.currmessage?.PP_PrGrc,
    TX_TpInt: this.messageService.currmessage?.TX_TpInt,
    TX_PcInt: this.messageService.currmessage?.TX_PcInt,
    TX_PdInt: this.messageService.currmessage?.TX_PdInt,
    TX_CaInt: this.messageService.currmessage?.TX_CaInt,
    TX_DscKs: this.messageService.currmessage?.TX_DscKs,
    TX_DscWC: this.messageService.currmessage?.TX_DscWC,
    PC_CmAct: this.messageService.currmessage?.PC_CmAct,
    PC_PcRsk: this.messageService.currmessage?.PC_PcRsk,
    PC_PcIGV: this.messageService.currmessage?.PC_PcIGV,
    PC_PcIRt: this.messageService.currmessage?.PC_PcIRt,
    PX_PgIni: this.messageService.currmessage?.PX_PgIni,
    PX_PgPer: this.messageService.currmessage?.PX_PgPer,
  };

  PagoIniColumns = ['PI_nm', 'PI_cst'];
  PagoPerColumns = ['PP_nm', 'PP_cst'];
  InidataSource: PagoIniCustom[] = [];
  PerdataSource: PagoPerCustom[] = [];

  public leasingForm: FormGroup;
  constructor(
    private messageService: MessageService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.leasingForm = this.fb.group({
      _MO_Mneda: 0,
      _VB_PeVnt: 0,
      _VB_CoIni: 0,
      _VB_PcRcp: 0,
      _PP_NmAns: 0,
      _PP_FqPag: 0,
      _PP_NmDxA: 0,
      _PP_Grcia: 0,
      _PP_PrGrc: 0,
      _TX_TpInt: 0,
      _TX_PcInt: 0,
      _TX_PdInt: 0,
      _TX_CaInt: 0,
      _TX_DscKs: 0,
      _TX_DscWC: 0,
      _PC_CmAct: 0,
      _PC_PcRsk: 0,
      _PC_PcIGV: 0,
      _PC_PcIRt: 0,
      _PX_PgIni: 0,
      _PX_PgPer: 0,
    });
  }
  ngOnInit(): void {}

  @ViewChild('IniTable') tableIni: MatTable<PagoIniCustom>;
  @ViewChild('PerTable') tablePer: MatTable<PagoPerCustom>;
  @ViewChild('PI_nm') PI_nm_i: ElementRef;
  @ViewChild('PI_cst') PI_cst_i: ElementRef;
  @ViewChild('PP_nm') PP_nm_i: ElementRef;
  @ViewChild('PP_cst') PP_cst_i: ElementRef;

  addIniData() {
    this.InidataSource.push({
      PI_nm: this.PI_nm_i.nativeElement.value,
      PI_cst: Number(this.PI_cst_i.nativeElement.value),
    });
    this.tableIni.renderRows();
  }
  removeIniData() {
    this.InidataSource.pop();
    this.tableIni.renderRows();
  }

  addPerData() {
    this.PerdataSource.push({
      PP_nm: this.PP_nm_i.nativeElement.value,
      PP_cst: Number(this.PP_cst_i.nativeElement.value),
    });
    this.tablePer.renderRows();
  }
  removePerData() {
    this.PerdataSource.pop();
    this.tablePer.renderRows();
  }

  GrabFormData() {
    this.Ldata.MO_Mneda = Number(this.leasingForm.get('_MO_Mneda')?.value);
    this.Ldata.VB_PeVnt = Number(this.leasingForm.get('_VB_PeVnt')?.value);
    this.Ldata.VB_CoIni = Number(this.leasingForm.get('_VB_CoIni')?.value);
    this.Ldata.VB_PcRcp = Number(this.leasingForm.get('_VB_PcRcp')?.value);
    this.Ldata.PP_NmAns = Number(this.leasingForm.get('_PP_NmAns')?.value);
    this.Ldata.PP_FqPag = Number(this.leasingForm.get('_PP_FqPag')?.value);
    this.Ldata.PP_NmDxA = Number(this.leasingForm.get('_PP_NmDxA')?.value);
    this.Ldata.PP_Grcia = Number(this.leasingForm.get('_PP_Grcia')?.value);
    this.Ldata.PP_PrGrc = Number(this.leasingForm.get('_PP_PrGrc')?.value);
    this.Ldata.TX_TpInt = Number(this.leasingForm.get('_TX_TpInt')?.value);
    this.Ldata.TX_PcInt = Number(this.leasingForm.get('_TX_PcInt')?.value);
    this.Ldata.TX_PdInt = Number(this.leasingForm.get('_TX_PdInt')?.value);
    this.Ldata.TX_CaInt = Number(this.leasingForm.get('_TX_CaInt')?.value);
    this.Ldata.TX_DscKs = Number(this.leasingForm.get('_TX_DscKs')?.value);
    this.Ldata.TX_DscWC = Number(this.leasingForm.get('_TX_DscWC')?.value);
    this.Ldata.PC_CmAct = Number(this.leasingForm.get('_PC_CmAct')?.value);
    this.Ldata.PC_PcRsk = Number(this.leasingForm.get('_PC_PcRsk')?.value);
    this.Ldata.PC_PcIGV = Number(this.leasingForm.get('_PC_PcIGV')?.value);
    this.Ldata.PC_PcIRt = Number(this.leasingForm.get('_PC_PcIRt')?.value);
  }
  GrabTableData(){
    this.Ldata.PX_PgIni=this.InidataSource
    this.Ldata.PX_PgPer=this.PerdataSource
  }

  CalcularLeasing() {
    this.GrabFormData();
    this.GrabTableData();
    console.log(this.Ldata)
    this.messageService.add(this.Ldata);
    this.router.navigate(['/dashboard/resultado']);
  }
}
