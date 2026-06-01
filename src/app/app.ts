import { Component, signal } from '@angular/core';
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";

import renderOptions from "./render-options"
import viewOptions from "./view-options"
import modelOptions from "./model-options"
import greetings from "./greetings"

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule],
  templateUrl: './app.html'
})
export class App {

  renderOptions = renderOptions
  viewOptions= viewOptions
  modelOptions = modelOptions
  greetings = greetings

}
