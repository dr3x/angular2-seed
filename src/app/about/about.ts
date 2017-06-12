import {Component} from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: ['./about.css'],
  //templateUrl: './about.html'
  template: `
  <h3>About Component</h3>
<<<<<<< HEAD
  <p>{{description}}</p>
  `
})
export class About {
  description = "This is the *about* component";
=======
<p>{{ description }}</p>
  `
})
export class About {
  description = "This **is** the About component!";
>>>>>>> origin/master
}
