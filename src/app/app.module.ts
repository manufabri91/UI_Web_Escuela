import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { CareerDetailComponent } from './features/career-detail/career-detail.component';
import { FeaturesModule } from './features/features.module';
import { DsComponent } from './core/ds/ds.component';
import { AfComponent } from './core/af/af.component';
import { ItComponent } from './core/it/it.component';


@NgModule({
  declarations: [
    AppComponent,
    DsComponent,
    AfComponent,
    ItComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    FeaturesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['apisitiou.herokuapp.com'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
