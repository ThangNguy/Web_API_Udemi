
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { ConstantPool } from '@angular/compiler';
import { SaveVehicle, Vehicle } from '../models/vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  features: any[];
  vehicle: SaveVehicle = {
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      email: '',
      phone: '',
    }
  };
  test: Vehicle[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService) {

      // route.params.subscribe(p => {
      //   this.vehicle.id = +p['id'];
      // });
    }

  ngOnInit() {
    this.vehicleService.getFeatures().subscribe(res => console.log(res.find(res => res.id = 1)));
    this.vehicleService.getVehicle(1).subscribe(res => console.log(res));

    console.log(this.test.find(res => res.id = 1))
  }
    // const sources = [
    //   this.vehicleService.getMakes(),
    //   this.vehicleService.getFeatures(),
    // ];

  //   if (this.vehicle.id) {
  //     sources.push(this.vehicleService.getVehicle(this.vehicle.id));
  //   }


  //   forkJoin(sources).subscribe(data => {
  //     console.log(data);
  //     this.makes = data[0];
  //     this.features = data[1];

  //     if (this.vehicle.id) {

  //       console.log(data[2]);
  //       // var constsss = JSON.parse(data[2])
  //       // this.setVehicle(data[2]);
  //       this.populateModels();
  //     }
  //   }, err => {
  //     if (err.status === 404) {
  //       this.router.navigate(['/home']);
  //     }
  //   });
  // }

  // private setVehicle(v: Vehicle) {
  //   this.vehicle.id = v.id;
  //   this.vehicle.makeId = v.make.id;
  //   this.vehicle.modelId = v.model.id;
  //   this.vehicle.isRegistered = v.isRegistered;
  //   this.vehicle.contact = v.contact;
  //   this.vehicle.features = _.pluck(v.features, 'id');
  // }

  // onMakeChange() {
  //   this.populateModels();
  //   delete this.vehicle.modelId;
  // }

  // private populateModels() {
  //   const obj = this.makes;
  //   var result = Object.keys(obj).map(function(key) {
  //     return [Number(key), obj[key]];
  //   });

  //   const selectMake = result.filter(e => e[1].id === this.vehicle.makeId);
  //   console.log(selectMake)
  //   this.models = selectMake ? selectMake[1]['models'] : [];
  
  // }

  // getModel(item) {
  //   if (item.id === this.vehicle.makeId) {
  //     this.models = item ? item.models : [];
  //   }
  // }

  // onFeatureToggle(featureId, $event) {
  //   if ($event.target.checked) {
  //     this.vehicle.features.push(featureId);
  //   } else {
  //     const index = this.vehicle.features.indexOf(featureId);
  //     this.vehicle.features.splice(index, 1);
  //   }
  // }

  // submit() {
  //   if (this.vehicle.id) {
  //     this.vehicleService.update(this.vehicle)
  //       .subscribe(x => {
  //         // this.toastyService.success({
  //         //   title: 'Success', 
  //         //   msg: 'The vehicle was sucessfully updated.',
  //         //   theme: 'bootstrap',
  //         //   showClose: true,
  //         //   timeout: 5000
  //         // });
  //       });
  //   } else {
  //     this.vehicleService.create(this.vehicle)
  //       .subscribe(x => console.log(x));

  //   }
  // }

  // delete() {
  //   if (confirm('Are you sure?')) {
  //     this.vehicleService.delete(this.vehicle.id)
  //       .subscribe(x => {
  //         this.router.navigate(['/home']);
  //       });
  //   }
  // }
}
