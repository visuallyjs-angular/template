import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";
import {Component} from '@angular/core';

@Component({
  template:`<div class="vjs-world" data-vjs-target="true">
    {{data['label']}}
  </div>`
})
export class WorldComponent extends BaseNodeComponent {

}
