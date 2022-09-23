import { Component, OnInit } from '@angular/core';
import {AlumnoServicesService} from '../services/alumno-services.service'
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {
public form!:FormGroup;
selected = 'option2';
  constructor(private _alumService: AlumnoServicesService) {
  this.form = new FormGroup({
        "nombre": new FormControl(null, [Validators.required]),
        "edad": new FormControl(null, [Validators.required,Validators.min(18)])
      }); }

  ngOnInit() {

  }

  save(){
  	if(this.form.invalid){
  		console.log("formulario valido");
  		return
  	}
  	this._alumService.save(this.form.value).subscribe(res => {

  	});
  }

  goToLink(valor:any){
    // codificamos algo
  }

  validaDato(valor :any){

    console.log("change  ", valor)

  }

}
