import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';
import { combinedCoursesReducer, CoursesEffects, coursesModuleFeatureName } from 'app/modules/courses/store';
import { combinedSharedModuleReducer, SharedModuleEffects, sharedModuleFeatureName } from 'app/modules/shared/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([CoursesEffects, SharedModuleEffects]),
    SharedModule,
    StoreModule.forRoot({
      [coursesModuleFeatureName]: combinedCoursesReducer,
      [sharedModuleFeatureName]: combinedSharedModuleReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
