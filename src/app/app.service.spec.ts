import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { listFramework } from './mock-api';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable of the Framework list', () => {
    const spyList = listFramework;
    service.getListFramework().subscribe(data => {
      expect(data).toEqual(spyList);
    })
  })
});
