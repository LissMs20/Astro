import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  image: any;

  constructor(private route: ActivatedRoute, private nasaService: NasaService) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.nasaService.getAstronomicalImage(id).subscribe(
        (data: any) => {
          this.image = data;
          console.log('Mostrando Dados:', data)
        },
        (error: any) => {
          console.error('Erro ao buscar imagem astronômica:', error);
        }
      );
    }
  }
}
