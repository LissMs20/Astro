import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SobreComponent } from './sobre/sobre.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ListComponent,
    SobreComponent,
    SearchComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
