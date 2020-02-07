import { Component } from '@angular/core';
import { Router, ResolveStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: Observable<string>;

  constructor(private router: Router) {
    this.title = this.router.events.pipe(
      filter(event => event instanceof ResolveStart),
      map((event: ResolveStart) => {
        let data = null;
        let route = event.state.root;

        while (route) {
          data = route.data || data;
          route = route.firstChild;
        }

        return data.title || null;
      })
    );
  }
}
