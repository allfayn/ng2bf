import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RenderComponent } from './components/render/render.component';
import { RepeatDirective } from './directives/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    RenderComponent,
    RepeatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
