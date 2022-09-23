import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject, Subject} from 'rxjs'
import { catchError, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment'
import  {ProfesorServiceService} from '../services/profesor-service.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
 	profesorList: any[] = [];
  constructor(private router:Router, private _profService:ProfesorServiceService) { }

  ngOnInit() {
  	this._profService.getAllProfesor().subscribe((res) => {

  		console.log("respuesta de servicio",res)
  		this.profesorList=res
  	});
  	

  }

  suma(){

  }
  

}
