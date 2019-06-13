import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {SharedModule} from '../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild(routes),
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    SharedModule,
    CommonModule
  ]
})
export class RegisterModule {
}
