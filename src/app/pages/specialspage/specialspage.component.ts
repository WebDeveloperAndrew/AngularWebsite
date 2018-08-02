import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-specialspage',
  templateUrl: './specialspage.component.html',
  styleUrls: ['./specialspage.component.scss']
})
export class SpecialspageComponent implements OnInit {

  constructor(private seo: SeoService) { }
  chicks = '/assets/img/chicks.jpg';
  price = '/assets/files/2018-Price-List.pdf';
  delivery = '/assets/img/delivery.jpg';
  schedule = '/assets/files/2018-Delivery-Schedule.pdf';
  ngOnInit() {
    this.seo.generateTags({
      title: 'Specials Page',
      description: 'Chicks, Turkeys, Ducks, and Pheasants, place your orders early to avoid disappointment',
      image: 'assets/img/chicks.jpg',
      slug: 'chicks'
    })
  }

}
