import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/auth/auth.interceptor';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})
.catch(err => console.error(err));