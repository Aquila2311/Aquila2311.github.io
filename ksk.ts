import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html'
})
export class kllkd {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = true;
  message = 'Hello, World';

  sayMessage() {
    alert(this.message);
  }
}