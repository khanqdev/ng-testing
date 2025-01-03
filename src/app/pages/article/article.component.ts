import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  constructor(private activateRoute: ActivatedRoute) {}
  private articleId = '';
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (param) => {
        this.articleId = param.get('id') ?? '';
        console.log(this.articleId);
      },
    });
  }
}
