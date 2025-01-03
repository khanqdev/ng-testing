import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { listFramework, unitTestBenefit } from './mock-api';
import { Framework, UnitTestBenefit } from './model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentUser = new BehaviorSubject<string>('Khang');
  getListBenefit(): Observable<UnitTestBenefit[]> {
    return of(unitTestBenefit);
  }

  getListFramework(): Observable<Framework[]> {
    return of(listFramework);
  }

  getUser(): Subject<string> {
    this.currentUser.next('Khang');
    return this.currentUser;
  }
}
