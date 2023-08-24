import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { WeatherServiceService } from 'src/app/services/weather-service.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title: string = "weather";
  // @Input() selectedCity1:string | any;
  today = new Date()
  @Input() weatherControl: any
  nameofCity: string | undefined
  WeatherIcon = {
    Clear: "https://img3.pngindir.com/dy/95215597fffcab6aa0c1fad6b88121dc/L0KzQYi4UsA4N2ZqSpGAYUK8c7PtUBJjaWZmTZCENUO0Q4OAVME2OWM7UKoBMke6Rom9TwBvbz==/5a29cbf3bba5a5.9531327415126886277686.png",
    Clouds: "https://img3.pngindir.com/dy/30b5b0f89a85776b68a21a5b5745065f/L0KzQYm3UsA4N5x8fZH0aYP2gLBuTfRigaVuhdc2c3v8PcrsjPxwf158ed51cHHzdcO0lBVifJlqip9ubHXwdbB7k702aWhmeqICZEGzRLWCWL4zOWI3SKs9N0G4QYiCWcAxOWQ1TqgDLoDxd1==/kisspng-daytime-sky-yellow-wallpaper-weather-elements-5a7ab07d104d98.2112094715179900130668.png",
    FewCloud: "https://img3.pngindir.com/dy/a3fb6fb2958158b6ed21b3c6cc646187/L0KzQYm3U8IxN6R4iZH0aYP2gLBuTgdmaaVtfeQ2ZnB1dbTokCRqdpgyitNybj3mfLr3TfFzfF55itN3c4Dkgrb1lL14bZJ5gNd7LXPvecHokwR0NWZmeqMEZEezQ4bohPQ6NmQ7UKs8M0S0QYa5UcU5QWc2TqQ6OUmxgLBu/kisspng-weather-forecasting-rain-clip-art-transparent-weather-cliparts-5ab19d7035add9.3689334115215896162199.png",
    Rain: "https://img3.pngindir.com/dy/0fb8d76d2a3adbd320d6fb1f3cfe2a32/L0KzQYm3U8AyN6psfZH0aYP2gLBuTgNsgV5ohNH8ZT34gH73ggR1baNzReRqaX6wc732lfQuPZIAUNNsMUi8SbfqV8YvQWQATqg6M0a0RYKCWcU1QWc9TqU5Nz7zfri=/kisspng-sky-close-up-pattern-rain-cloud-5a98ac1899fc76.9396613615199549686307.png",
    Snow: "https://img3.pngindir.com/dy/33bfad13cc714bf2b2d4e65276097ace/L0KzQYm3UsI1N6V3iZH0aYP2gLBuTfNtd6ZpReV3b4ewh7bolPhmel5rhARuY3H2hLr1h710dpD8kZ9CZXH3eLb5TcViQWM5SqJuMEC8c7O4TsM3QGE1T6U6MUW0SYa6VMYxPmE1Sqc3cH7q/kisspng-cloud-snow-weather-forecasting-snowy-weather-5a92420e009cb1.3680073115195346060025.png"
  }



  constructor(private weatherService: WeatherServiceService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

  }
}
