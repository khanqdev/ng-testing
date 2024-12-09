import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Framework } from './model';
import { AppService } from './app.service';
import { of, throwError } from 'rxjs';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const spyAppService = {
    getListFramework: jest.fn(),
    getListBenefit: jest.fn()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: AppService, useValue: spyAppService}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should get list unit testing benefit', () => {
    spyAppService.getListBenefit.mockReturnValue(of([{
      label: 'Hỗ trợ bảo trì và mở rộng mã nguồn',
      expandContent: [
        'Unit test giúp kiểm tra từng thành phần nhỏ của ứng dụng, giúp phát hiện lỗi ngay từ giai đoạn phát triển ban đầu',
        'Kiểm tra kỹ từng chức năng riêng lẻ sẽ giúp giảm nguy cơ lỗi ảnh hưởng đến các phần khác của hệ thống'
      ]
    }]))
    app.getUnitTestBenefit();
    expect(app.listUnitTestBenefit).toBeTruthy()
  })

  it('should call #toggleViewImage to show the hidden item', () => {
    const spyItem = {
      hidden: true
    } as Framework;
    app.triggerOnFramework(spyItem);
    expect(app.feature).toEqual([])
  })

  it('should call #toggleViewImage to show the hidden item', () => {
    const spyItem = {
      hidden: false,
      feature: ['123445']
    } as Framework;
    app.triggerOnFramework(spyItem);
    expect(app.feature).toBeTruthy()
  })

  it('should show error alert when call api failure', () => {
    spyAppService.getListFramework.mockReturnValue(throwError(() => new Error()));
    app.getListFramework();
    expect(app.listFramework).toEqual([])
  })
});
