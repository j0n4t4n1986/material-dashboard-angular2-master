import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import { catchError, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfesorServiceService {

  constructor(private http:HttpClient) { }

  getAllProfesor(){
  	return this.http.get<any>(`${environment.urlBack}profesor`).pipe(catchError(error => throwError(error)));
  }
}
