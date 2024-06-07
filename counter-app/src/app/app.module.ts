import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { reducers } from './shared/reducers';

@NgModule({
  declarations: [],
  imports: [BrowserModule, StoreModule.forRoot(reducers)],
  bootstrap: [],
})
export class AppModule {}
