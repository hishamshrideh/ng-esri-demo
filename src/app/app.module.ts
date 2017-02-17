import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { AppRoutes } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { Map3dComponent } from './components/map3d/map3d.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        Map3dComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        JsonpModule,
        NgbModule,
        AppRoutes
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
