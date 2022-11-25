export interface LeasingData {
  MO_Mneda: number;
  VB_PeVnt: number;
  VB_CoIni: number;
  VB_PcRcp: number;
  PP_NmAns: number;
  PP_FqPag: number;
  PP_NmDxA: number;
  PP_Grcia: number;
  PP_PrGrc: number;
  TX_TpInt: number;
  TX_PcInt: number;
  TX_PdInt: number;
  TX_CaInt: number;
  TX_DscKs: number;
  TX_DscWC: number;
  PC_CmAct: number;
  PC_PcRsk: number;
  PC_PcIGV: number;
  PC_PcIRt: number;
  PX_PgIni: Array<PagoIniCustom>;
  PX_PgPer: Array<PagoPerCustom>;
}

export interface PagoIniCustom {
  PI_nm: string;
  PI_cst: number;
}
export interface PagoPerCustom {
  PP_nm: string;
  PP_cst: number;
}


export interface LeasingResult {
  nCuota: number;
  RC_SaldIni: number;
  RC_Interes: number;
  RC_Cuota: number;
  RC_Amort: number;
  RC_SegRsk: number;
  RC_CostPer: number;
  RC_Recompra: number;
  RC_SaldFin: number;
  RC_Deprec: number;
  RC_AhorrTrib: number;
  RC_IGV: number;
  RC_FlujBruto: number;
  RC_FlujIGV: number;
  RC_FlujNeto: number;
}
