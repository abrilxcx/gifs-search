import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListComponent } from './components/list/list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBoxComponent,
    ListComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HomePageComponent
  ]
})
export class GifsModule { }
