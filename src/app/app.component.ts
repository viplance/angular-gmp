import { Component } from '@angular/core';
import { Router, RouterEvent, ResolveStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { RouterData } from 'app/modules/shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  breadcrumbs: Observable<string[]>;

  constructor(private router: Router, private titleService: Title) {
    this.breadcrumbs = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof ResolveStart),
      map((event: ResolveStart) => {
        let data: RouterData = {};
        let route = event.state.root;

        while (route) {
          data = route.data || data;
          route = route.firstChild;
        }

        const { title, breadcrumbs }: RouterData = data;
        if (title) {
          this.titleService.setTitle(title);
        }

        return breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : [];
      })
    );
  }
}
