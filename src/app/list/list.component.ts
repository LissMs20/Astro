import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';
import { Router } from '@angular/router';
import { PaginationService, PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  astronomicalImages: any[] = [];
  currentPage: number = 1;
  totalPages: number = 25;

  constructor(private nasaService: NasaService, private router: Router, private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.nasaService.fillImageDates(100);
    this.getAstronomicalImages();
    this.registerPagination();
  }

  getAstronomicalImages(): void {
    console.log('Buscando imagens para a página', this.currentPage);
    this.nasaService.getAstronomicalImages(this.currentPage).subscribe(
      (data: any[]) => {
        console.log('Imagens recebidas:', data);
        this.astronomicalImages = data;
      },
      (error: any) => {
        console.error('Erro ao buscar imagens astronômicas:', error);
      }
    );
  }

  onPageChange(page: number): void {
    console.log('Página alterada para', page);
    this.currentPage = page;
    this.registerPagination();
    this.getAstronomicalImages();
  }

  registerPagination(): void {
    const instance: PaginationInstance = {
      id: 'custom-id',
      itemsPerPage: 10,
      currentPage: this.currentPage
    };
    console.log('Registrando instância de paginação:', instance);
    this.paginationService.register(instance);
  }

  goToDetails(image: any): void {
    this.router.navigate(['/details', image.date]);
  }
  
}
