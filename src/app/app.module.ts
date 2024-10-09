// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderProductComponent } from './components/header-product.component';
import { HeaderCartService } from './services/header-cart.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, // Add FormsModule here
        HttpClientModule
    ],
    providers: [HeaderCartService],
    bootstrap: [AppComponent]
})
export class AppModule { }
