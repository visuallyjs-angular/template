import { Component, inject } from '@angular/core';
import {useZoom, VisuallyJsModule, VisuallyJsService} from "@visuallyjs/browser-ui-angular";

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
  // example: inject the vjs service
  $vjs = inject(VisuallyJsService)
  // and listen to the useZoom hook
  zoom = useZoom(this.$vjs.surface)

  renderOptions = renderOptions
  viewOptions= viewOptions
  modelOptions = modelOptions
  greetings = greetings

}
