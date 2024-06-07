import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './counter.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
    isDevMode() ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
