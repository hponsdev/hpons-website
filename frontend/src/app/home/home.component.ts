import { Component } from '@angular/core';
import { AboutComponent } from '../components/about/about.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ExperiencesComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
