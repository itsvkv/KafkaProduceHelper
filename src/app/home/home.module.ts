import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {SplitterModule} from "primeng/splitter";
import { ProducerComponent } from './producer/producer.component'
@NgModule({
  declarations: [HomeComponent, ProducerComponent],
  imports: [
    SplitterModule,
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
