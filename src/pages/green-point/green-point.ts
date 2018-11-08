import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import { Platform } from 'ionic-angular';

import { loadModules } from 'esri-loader';

/**
 * Generated class for the GreenPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-green-point',
  templateUrl: 'green-point.html',
})
export class GreenPointPage {

  @ViewChild('map') mapEl: ElementRef;

  constructor(public platform: Platform) { }

  async  getGeo() {

    // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
    await this.platform.ready();

    // Load the ArcGIS API for JavaScript modules
    const [Map, MapView, FeatureLayer, Search]:any = await loadModules([
      'esri/Map',
      'esri/views/MapView',
      "esri/layers/FeatureLayer",
      "esri/widgets/Search"
    ])
    .catch(err => {
      console.error("ArcGIS: ", err);
    });

    console.log("Starting up ArcGIS map");
    const layer = new FeatureLayer({
      // URL to the service
      url: "http://serviciosgis.eastus.cloudapp.azure.com/arcgis/rest/services/turismo/turismo/MapServer/0"
    });
    let map = new Map({
      basemap: 'national-geographic', //hybrid
      layers:[layer]
    });
    
    let mapView = new MapView({
      // create the map view at the DOM element in this component
      container: this.mapEl.nativeElement,
      center: [-74.09, 4.69],
      zoom: 10,
      map: map
    });
    let searchWidget = new Search({
      view: mapView
    });
    mapView.ui.add(searchWidget, {position: "bottom-right"});
  }

  ngOnInit() {
    this.getGeo();
  }

}
