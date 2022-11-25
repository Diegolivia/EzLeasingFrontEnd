import { Injectable } from '@angular/core';
import { LeasingData } from './Leasingdata';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeasingDataService {
  constructor(private messageService: MessageService) {}
  getLeasingParameters(LDATA:LeasingData): Observable<LeasingData> {
    const LData = of(LDATA);
    return LData;
  }
}
