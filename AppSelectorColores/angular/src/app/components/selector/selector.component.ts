import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';

import { Colores } from 'src/app/models/colores';

declare let $: any;

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  public colorS1!: string;
  public colorS2!: string;
  public colorS3!: string;
  public colorS4!: string;
  public colorS5!: string;
  public name!: string;
  public listaKeys: string[] = [];
  public listaPalletes: any[] = [];
  public color: string;

  constructor() {
    this.color = '#FCC400';
  }

  ngOnInit(): void {
    this.getPalletes();
  }

  getColor($event: ColorEvent) {

    this.color = $event.color.hex;
  }

  setColorS1(){
    this.colorS1 = this.color;

    $('.h1').hide();
    $('.v1').hide();
    $('.s1').addClass('inSelect');

    $('.s2').removeClass('inSelect');
    $('.s3').removeClass('inSelect');
    $('.s4').removeClass('inSelect');
    $('.s5').removeClass('inSelect');
  }

  setColorS2(){
    this.colorS2 = this.color;

    $('.h2').hide();
    $('.v2').hide();
    $('.s2').addClass('inSelect');

    $('.s1').removeClass('inSelect');
    $('.s3').removeClass('inSelect');
    $('.s4').removeClass('inSelect');
    $('.s5').removeClass('inSelect');
  }

  setColorS3(){
    this.colorS3 = this.color;

    $('.h3').hide();
    $('.v3').hide();
    $('.s3').addClass('inSelect');

    $('.s1').removeClass('inSelect');
    $('.s2').removeClass('inSelect');
    $('.s4').removeClass('inSelect');
    $('.s5').removeClass('inSelect');
  }

  setColorS4(){
    this.colorS4 = this.color;

    $('.h4').hide();
    $('.v4').hide();
    $('.s4').addClass('inSelect');

    $('.s1').removeClass('inSelect');
    $('.s2').removeClass('inSelect');
    $('.s3').removeClass('inSelect');
    $('.s5').removeClass('inSelect');
  }

  setColorS5(){
    this.colorS5 = this.color;

    $('.h5').hide();
    $('.v5').hide();
    $('.s5').addClass('inSelect');

    $('.s1').removeClass('inSelect');
    $('.s2').removeClass('inSelect');
    $('.s3').removeClass('inSelect');
    $('.s4').removeClass('inSelect');
  }

  savedPallete() {

    if(this.name != undefined && this.name != '' && this.colorS1 != undefined 
    && this.colorS2 != undefined && this.colorS3 != undefined 
    && this.colorS4 != undefined && this.colorS5 != undefined) {

      const colores = new Colores(this.name, this.colorS1, this.colorS2, this.colorS3, this.colorS4, this.colorS5);

      localStorage.setItem(this.name, JSON.stringify(colores));
      this.listaKeys.push(this.name);
      localStorage.setItem('favoritos', JSON.stringify(this.listaKeys));

      location.reload();
      
    }
  }

  getPalletes() {
    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '{}');

    if (Object.entries(favoritos).length != 0) {
      for (let fav of favoritos){
        let keys = JSON.parse(localStorage.getItem(fav) || '{}');
        this.listaKeys.push(fav)

        let key = Object.values(keys);
        this.listaPalletes.push(key)
      } 
    }
  }

  deletePallete(name: string, indice: number) {
    localStorage.removeItem(name);
    this.listaPalletes.splice(indice, 1);
    this.listaKeys.splice(indice, 1);
    localStorage.setItem('favoritos', JSON.stringify(this.listaKeys));
  };

}

