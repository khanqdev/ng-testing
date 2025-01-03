import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Framework, UnitTestBenefit } from './model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  listUnitTestBenefit: UnitTestBenefit[] = [];
  listFramework: Framework[] = [];
  feature: string[] = [];
  currentUser: string = '';
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.currentUser
      .asObservable()
      .subscribe((user) => (this.currentUser = user));
  }

  getUnitTestBenefit() {
    this.appService.getListBenefit().subscribe({
      next: (res) => {
        this.listUnitTestBenefit = res;
      },
      error: (err) => {
        console.error(err);
        this.listFramework = [];
      },
    });
  }

  getListFramework() {
    if (this.listFramework.length) return;
    this.appService.getListFramework().subscribe({
      next: (res) => {
        this.listFramework = res;
        this.listUnitTestBenefit = [];
      },
      error: (err) => {
        console.error(err);
        this.listFramework = [];
      },
    });
  }

  triggerOnFramework(item: Framework) {
    if (item.hidden) {
      this.toggleViewImage(item);
    } else {
      this.getFeature(item);
    }
  }

  private toggleViewImage(item: Framework) {
    item.hidden = false;
    this.feature = [];
  }

  private getFeature({ feature }: Framework) {
    this.feature = feature;
  }
}
