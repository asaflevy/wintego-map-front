import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UsersState } from './store/users';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SubjectsState } from './store/subjects';
import { TasksState } from './store/tasks';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    NgxsModule.forRoot([UsersState, SubjectsState, TasksState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'NGXS Todo Store',
      disabled: environment.production
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
