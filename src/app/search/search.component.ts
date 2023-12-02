import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchDate!: string;
  image: any;

  constructor(private nasaService: NasaService) { }

  searchByDate() {
    this.nasaService.getAstronomicalImage(this.searchDate).subscribe(image => {
      this.image = image;
    });
  }
}
