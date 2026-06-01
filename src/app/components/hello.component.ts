import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";
import {Component} from '@angular/core';

@Component({
  template:`<div class="vjs-hello">
    {{data['label']}}
    <div data-vjs-source="true" class="vjs-hello-connect" title="Drag edge to a World node"></div>
    </div>`
})
export class HelloComponent extends BaseNodeComponent {

}
