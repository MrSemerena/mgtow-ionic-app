import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home-header-slider',
  templateUrl: './home-header-slider.component.html',
  styleUrls: ['./home-header-slider.component.scss'],
})
export class HomeHeaderSliderComponent  implements OnInit {
  swiperModules = [IonicSlides];

  home_slides: {
    id: number,
    bg_image: string,
    title: string,
    subtitle: string,
    description: string
  }[] = [
    {
      id: 0,
      bg_image: "data:image/jpeg;base64,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",
      title: "Red Pil Philosophy",
      subtitle: "It shows the reality and truth... No matter how harsh it is!",
      description: "Being part of the Red Pill Philosophy means that you will be binded by truth, lo0gic and reason. Eventhough the sight is darl and depressing, like it is now in current times, specially for men and for the sake of our Western societies that are facing the birge of destruction..."
    },
    {
      id: 1,
      bg_image: "data:image/png;base64,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",
      title: "Going Your Own Way...",
      subtitle: "This is MGTOW about!",
      description: "To find and going the path you choose to walk. Is a pretty and accurate way to summarize the MGTOW philosophy"
    },
    {
      id: 2,
      bg_image: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 3,
      bg_image: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 4,
      bg_image: "",
      title: "",
      subtitle: "",
      description: ""
    },
  ];

  constructor() { }

  ngOnInit() {}

}