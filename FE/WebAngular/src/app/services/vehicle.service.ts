import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }

  getFeatures() {
    return this.http.get('http://localhost:6253/api/features');
  }

  getMakes()  {
    return this.http.get('http://localhost:6253/api/makes').pipe(map(data => data as []));
  }

  // this.http.get(this.rootURL+'/Employee')
    
//   getBy(url: string, data: any, sort?: TableSort): Observable<ResponseModel> {
//     let requestModel = new RequestModel();
//     requestModel.PostObject = data;

//     if (sort != null) {
//         requestModel.SortDTO = sort;
//     }

//     return this.http.post<ResponseModel>(url, requestModel).map((res: ResponseModel) => {
//         return res
//     }).catch(error => {
//         return this.handleError(error);
//     });
// }
}
