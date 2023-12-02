import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SobreComponent } from './sobre/sobre.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'list', component: ListComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
