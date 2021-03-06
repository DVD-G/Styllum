import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class AppComponent {
  title = 'app';
  lat: number = 51.678418;
  lng: number = 7.809007;
}

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
