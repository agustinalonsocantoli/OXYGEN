import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

import { Conversiones } from 'src/app/models/conversiones';
import { ConversionesService } from 'src/app/services/conversiones.services';
import { Global } from 'src/app/services/global';
import { Router } from '@angular/router';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
  providers: [ConversionesService]
})
export class ConvertComponent implements OnInit {
  public conversiones!: Conversiones[];
  public conversion: Conversiones;
  public url: string;
  public optionSelect: string;
  public optionInput: number;
  public saveSelect: boolean;
  public saveInput: boolean;
  public unitResult!: number;
  public typeResult: string;

  constructor(
    private _conversionesServices: ConversionesService,
    private _route: Router

  ){
    this.url = Global.url;
    this.saveSelect = true;
    this.saveInput = true;
    this.optionSelect = 'km'
    this.optionInput = 100;
    this.typeResult = 'miles'

    this.conversion = new Conversiones('', this.optionInput, this.optionSelect, this.unitResult, 'miles');
  }

  ngOnInit(): void {
    this.getUnitResult(this.optionSelect, this.optionInput);
    this.getConversion();
  }

  getConversion() {
    this._conversionesServices.getConversiones().subscribe(
      response => {
        if(response.conversiones) {
          this.conversiones = response.conversiones
        }
      },       
      err => {
        console.log(<any>err);
      });
  }

  deleteConversion(id: any) {
    this._conversionesServices.deleteConversiones(id).subscribe(
      response => {
        if(response.conversiones) {
          location.reload();
        }
      },       
      err => {
        console.log(<any>err);
      });
  }

  saveConversiones(){
    if(this.saveSelect && this.saveInput){
      this._conversionesServices.saveConversiones(this.conversion).subscribe(
        response => {
          response.conversion
          this._route.navigate(['/conversiones']);
          location.reload();
        }, 
        err => {
          console.log(err);
        }
      );
    }
  }

  getSelect() {
    if(this.optionSelect == 'km') {
      this.conversion.input_type = 'km';
      this.conversion.output_type = 'miles';
      this.typeResult = 'miles';
      this.saveSelect = true;

    } else if(this.optionSelect == 'miles') {
      this.conversion.input_type = 'miles';
      this.conversion.output_type = 'km';
      this.typeResult = 'km';
      this.saveSelect = true;

    } else if(this.optionSelect == 'feed') {
      this.conversion.input_type = 'feed';
      this.conversion.output_type = 'metres';
      this.typeResult = 'metres';
      this.saveSelect = true;

    } else if(this.optionSelect == 'metres') {
      this.conversion.input_type = 'metres';
      this.conversion.output_type = 'feed';
      this.typeResult = 'feed';
      this.saveSelect = true;

    } else if(this.optionSelect == 'yard') {
      this.conversion.input_type = 'yard';
      this.conversion.output_type = 'millimetres';
      this.typeResult = 'millimetres';
      this.saveSelect = true;

    } else if(this.optionSelect == 'millimetres') {
      this.conversion.input_type = 'millimetres';
      this.conversion.output_type = 'yard';
      this.typeResult = 'yard';
      this.saveSelect = true;

    } else {
      this.saveSelect = false;
    }
  }

  getInput() {
    this.conversion.input_unit = this.optionInput;

    if(this.optionInput !== null && this.optionInput !== undefined) {
      this.saveInput = true;
    } else {
      this.saveInput = false;
    }
  }

  getUnitResult(unidad: string, cantidad: number) {

    if(unidad == 'km') {
      this.unitResult = parseFloat((cantidad * 0.621371).toFixed(2));
    } else if (unidad == 'miles') {
      this.unitResult = parseFloat((cantidad * 1.60934).toFixed(2));
    } else if (unidad == 'feed') {
      this.unitResult = parseFloat((cantidad * 0.3048).toFixed(2));
    } else if (unidad == 'metres') {
      this.unitResult = parseFloat((cantidad * 3.28084).toFixed(2));
    } else if (unidad == 'yard') {
      this.unitResult = parseFloat((cantidad * 914.4).toFixed(2));
    } else if (unidad == 'millimetres') {
      this.unitResult = parseFloat((cantidad * 0.00109361).toFixed(2));
    }

    this.conversion.output_unit = this.unitResult;
  }

  reset() {
    this.saveSelect = true;
    this.saveInput = true;
    this.optionSelect = 'km'
    this.optionInput = 100;
    this.typeResult = 'miles'
    this.getUnitResult(this.optionSelect, this.optionInput);
  }
}
