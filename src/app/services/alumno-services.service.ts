import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject, Subject} from 'rxjs'
import { catchError, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServicesService {

  constructor(private http: HttpClient,
    private router: Router) { }

  alta(valueForm:any) {
  return this.http.post(environment.urlBack, JSON.stringify(valueForm),{})
      .pipe(
      tap((response: Response) => {
        console.log('respuesta de save: ', response);
      }),
      catchError(error => throwError(error)));
  }

  get(){
      return this.http.get<any>(`${environment.urlBack}alumno`).pipe(catchError(error => throwError(error)));
    }

    save(form:any){
      return this.http.post<any>(`${environment.urlBack}alumno`,form).pipe(catchError(error => throwError(error)));
    }
}
