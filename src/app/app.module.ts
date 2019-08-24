import { element } from 'protractor';
import { HelloWorldComponent } from './component/HelloWorld/HelloWorld.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: [],

})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, { injector });
    customElements.define('app-hello-world', custom);
  }
  ngDoBootstrap() {}
}
