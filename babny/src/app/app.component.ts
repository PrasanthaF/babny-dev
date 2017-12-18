import { Component } from '@angular/core';
import { BabnyNameService } from './babny/services/babny-name.service';

@Component({
  selector: 'babny-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BabnyNameService]
})
export class AppComponent {
  title = 'babny';
}
