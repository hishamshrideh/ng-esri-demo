import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

import MapView = require('esri/views/MapView');

import { MapService } from '../../services/map.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [MapService]
})
export class HomeComponent implements OnInit, OnDestroy {

    @ViewChild('mapElement') private mapElement: ElementRef;
    
    private mapView: MapView;

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
        this.mapView = new MapView({
            container: this.mapElement.nativeElement,
            map: this.mapService.map,
            zoom: 7,
            center: [113, 23.5]
        });
    }

    ngOnDestroy() {
        this.mapView.destroy();
    }
}
