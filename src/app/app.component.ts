import { Component } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  cities: string[] = ["Sivas", "Ankara", "Mersin", "Ordu", "Antalya", "İzmir", "Samsun", "İstanbul", "Adana"]
  selectedCity: any;
  route: any;
  showComponent1: boolean = false;
  weatherData: any | undefined
  showWeather = false;
  constructor(private weatherservice: WeatherServiceService) {

  }

  getWeather(city: Event) {
    this.selectedCity = (city.target as HTMLSelectElement).value
    this.showComponent1 = !this.showComponent1;
    console.log("Şehir: ", this.selectedCity)
    this.showWeather = true;
    this.getWeatherCityName()
  }

  getWeatherCityName() {
    // datayı ilk seslenen fonksiyon ile subscribe edip verilere eriştikten sonra componentler arasında aktarılabilir.(@Input,..)
    this.weatherservice.getWeatherForCity(this.selectedCity).subscribe(a => {
      this.weatherData = a
      console.log("Data:", this.weatherData.main.temp_max)
    }
    )

  }

}
