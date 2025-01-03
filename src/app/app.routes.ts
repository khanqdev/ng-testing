import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'articles/:id',
    loadComponent: () =>
      import('./pages/article/article.component').then(
        (c) => c.ArticleComponent
      ),
  },
];
