import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  bootstrap: [],
})
export class AppModule {}
