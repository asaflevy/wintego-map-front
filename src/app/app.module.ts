import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// import { UsersState } from './store/users';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'NGXS Wintego Store',
      disabled: environment.production
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
