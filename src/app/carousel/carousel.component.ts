import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slide = {id:1,imageSource: document.location.origin+'/assets/img/chick.jpg', slideTitle: "Chicks Here Now", slideText:"We don't want to ruffle any feathers, but... it's time to order your...", buttonText: "Chicks!", link: "chicks"};
  slideTimeout;
  constructor() { }
  Circle = faCircle;

  public slides = [
    {id:1,imageSource: document.location.origin+'/assets/img/chick.jpg', slideTitle: "Chicks Here Now", slideText:"We don't want to ruffle any feathers, but... it's time to order your...", buttonText: "Chicks!", link: "chicks"},
    {id:2,imageSource: document.location.origin+'/assets/img/pets.jpg', slideTitle: "Pet Food & Supplies", slideText:"We want your pets to be safe, healthy, and happy", buttonText: "Pet Food", link: "products"},
    {id:3,imageSource: document.location.origin+'/assets/img/garden.jpg', slideTitle: "Lawn & Garden Supplies", slideText:"We can help ensure you have the right soils, fertilizers, and greenhouses", buttonText: "Lawn & Garden", link: "products"},
    {id:4,imageSource: document.location.origin+'/assets/img/construction.jpg', slideTitle: "Work & Safety Supplies", slideText:"We provide a large selection of items including hardware, wood pellet, and work-wear", buttonText: "Safety & Work Wear", link:"products"},
    {id:5,imageSource: document.location.origin+'/assets/img/farmsupplies.jpg', slideTitle: "Farm Supplies", slideText:"Farming Supplies including feed, fences, poultry, horse tack, tools, clothing, and animal health care", buttonText: "Farm Supplies", link: "products"}
 ];


  moveSlide(id)
  {
    this.slide =  this.slides.find(x => x.id == id);
    clearTimeout(this.slideTimeout);
    this.slideTimeout = setTimeout(() => this.slideMove(), 8000);
  }

  slideMove()
  {
    if(this.slide.id < this.slides.length)
      this.slide = this.slides.find(x => x.id == this.slide.id+1);
    else
    {
      this.slide = this.slides.find(x => x.id == 1);
    }
    clearTimeout(this.slideTimeout);
    this.slideTimeout = setTimeout(() => this.slideMove(), 6000);
  }

  ngOnInit() {
    this.slideTimeout = setTimeout(() => this.slideMove(), 14000);
  }

}
