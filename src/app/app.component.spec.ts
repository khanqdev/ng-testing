import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Framework } from './model';
import { AppService } from './app.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const mockBehaviorSubject = (initialValue: any) => {
    const subject = new BehaviorSubject(initialValue);
    return {
      next: jest.fn((value) => subject.next(value)),
      asObservable: jest.fn(() => subject.asObservable()),
      getValue: jest.fn(() => subject.getValue()),
    };
  };
  const spyAppService = {
    getListFramework: jest.fn(),
    getListBenefit: jest.fn(),
    currentUser: mockBehaviorSubject('Khang'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [{ provide: AppService, useValue: spyAppService }],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should get currentUser when init component', () => {
    spyAppService.currentUser.next('Duyenancut');
    fixture.detectChanges();
    expect(app.currentUser).toBe('Duyenancut');
  });

  it('should get list unit testing benefit', () => {
    spyAppService.getListBenefit.mockReturnValue(
      of([
        {
          label: 'Hỗ trợ bảo trì và mở rộng mã nguồn',
          expandContent: [
            'Unit test giúp kiểm tra từng thành phần nhỏ của ứng dụng',
          ],
        },
      ])
    );
    app.getUnitTestBenefit();
    expect(app.listUnitTestBenefit).toBeTruthy();
  });

  it('should call #toggleViewImage to show the hidden item', () => {
    const spyItem = {
      hidden: true,
    } as Framework;
    app.triggerOnFramework(spyItem);
    expect(app.feature).toEqual([]);
  });

  it('should call #toggleViewImage to show the hidden item', () => {
    const spyItem = {
      hidden: false,
      feature: ['123445'],
    } as Framework;
    app.triggerOnFramework(spyItem);
    expect(app.feature).toBeTruthy();
  });

  it('should show error alert when call api failure', () => {
    spyAppService.getListFramework.mockReturnValue(
      throwError(() => new Error())
    );
    app.getListFramework();
    expect(app.listFramework).toEqual([]);
  });

  it('should finish event when #ListFramework has at least item', () => {
    app.listFramework = [
      {
        name: 'Angular',
        img: 'example.com',
        feature: ['123445'],
        hidden: false,
      },
    ];
    app.getListFramework();
    expect(spyAppService.getListFramework).not.toHaveBeenCalled();
  });
});
