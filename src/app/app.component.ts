import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Framework, UnitTestBenefit } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  listUnitTestBenefit: UnitTestBenefit[] = [];
  listFramework: Framework[] = [];
  feature: string[] = [];
  constructor(
    private appService: AppService,
  ){}

  getUnitTestBenefit() {
    this.appService.getListBenefit().subscribe({
      next: res => {
        this.listUnitTestBenefit = res;
      },
      error: err => {
        console.error(err);
        this.listFramework = [];
      }
    })
  }

  getListFramework() {
    this.appService.getListFramework().subscribe({
      next: res => {
        this.listFramework = res;
        this.listUnitTestBenefit = [];
      },
      error: err => {
        console.error(err);
        this.listFramework = [];
      }
    })
  }

  getFeature({ feature }: Framework) {
    this.feature = feature;
  }

  triggerOnFramework(item: Framework) {
    item.hidden ? this.toggleViewImage(item) : this.getFeature(item)
  }

  toggleViewImage(item: Framework) {
    item.hidden = false;
    this.feature = [];
  }
}
