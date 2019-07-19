import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap, tap, catchError  } from 'rxjs/operators';
import { APIUrl } from '../api/api';
import { SaveVehicle, Feature, Make, Vehicle } from '../models/vehicle';
import { Observable, of } from 'rxjs';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(APIUrl.ROOT_URL + 'api/features').pipe(
      tap(res => res),
      catchError(error =>  of([]))
      );
  }

  getMakes(): Observable<Make[]> {
    return this.http.get<Make[]>(APIUrl.ROOT_URL + 'api/makes').pipe(
      tap(res => res),
      catchError(error =>  of([]))
      );
  }

  create(vehicle) {
    return this.http.post(APIUrl.ROOT_URL + 'api/vehicles', vehicle).pipe(
      tap(res => res),
      catchError(error =>  of([]))
      );
  }

  getVehicle(id): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(APIUrl.ROOT_URL + 'api/vehicles/' + id).pipe(
      tap(res => res),
      catchError(error =>  of([]))
      );
  }

  update(vehicle: SaveVehicle) {
      return this.http.put(APIUrl.ROOT_URL + 'api/vehicles/' + vehicle.id, vehicle).pipe(
        tap(res => res),
        catchError(error =>  of([]))
        );
  }

  delete(id) {
    return this.http.delete(APIUrl.ROOT_URL + '/api/vehicles/' + id).pipe(
      tap(res => res),
      catchError(error =>  of([]))
      );
  }

  // handleError(errorRequest) {
  //   return Observable.throw(errorRequest);
    // if (errorRequest.status === 401) {
    //     let status = new ResponseModel();
    //     status.Code = 901;
    //     return Observable.throw(status);
    // }
    // else {
    //     let status = new ResponseModel();
    //     status.Code = 1000;
    //     return Observable.throw(status);
    // }
  // }
  // getFeatures() {
  //   return this.http.get(APIUrl.ROOT_URL + 'api/features').pipe(map(data => data as [] ));
  // }

  // getMakes()  {
  //   return this.http.get(APIUrl.ROOT_URL + 'api/makes').pipe(map(data => data as []));
  // }

  // create(vehicle) {
  //   return this.http.post(APIUrl.ROOT_URL + 'api/vehicles', vehicle).pipe(map(res => res as []));
  // }

  // getVehicle(id) {
  //   return this.http.get(APIUrl.ROOT_URL + 'api/vehicles/' + id)
  //     .pipe(map(res => res as []));
  // }

  // update(vehicle: SaveVehicle) {
  //   return this.http.put(APIUrl.ROOT_URL + 'api/vehicles/' + vehicle.id, vehicle)
  //     .pipe(map(res => res as []));
  // }

  // delete(id) {
  //   return this.http.delete(APIUrl.ROOT_URL + '/api/vehicles/' + id)
  //     .pipe(map(res => res as []));
  // }
}
