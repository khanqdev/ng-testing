import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { listFramework, unitTestBenefit } from './mock-api';
import { Framework, UnitTestBenefit } from './model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getListBenefit(): Observable<UnitTestBenefit[]>{
    return of(unitTestBenefit)
  }

  getListFramework(): Observable<Framework[]>{
    return of(null).pipe(delay(2000), map(() => listFramework))
  }
}
