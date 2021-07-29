import { Component, OnInit } from '@angular/core';
interface Componente{
  icon:string,
  name:string,
  redirectTo:string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

rutas:Componente[]=[

  {
    icon:'caret-back-outline',
    name:'Alert',
    redirectTo:'/alert'
  },
  {
    icon:'caret-back-outline',
    name:'Action-Sheet',
    redirectTo:'/action-sheet'
  },
  {
    icon:'caret-back-outline',
    name:'Avatar',
    redirectTo:'/avatar'
  },
  {
    icon:'caret-back-outline',
    name:'Botones',
    redirectTo:'/botones'
  },
  {
    icon:'card-outline',
    name:'Cards',
    redirectTo:'/card'
  },
  {
    icon:'checkbox-outline',
    name:'Check',
    redirectTo:'/check'
  },
  {
    icon:'car-outline',
    name:'Fab',
    redirectTo:'/fab'
  },
  {
    icon:'card-outline',
    name:'Grid',
    redirectTo:'/grid'
  },
  {
    icon:'card-outline',
    name:'Input',
    redirectTo:'/input'
  }

]


  // rutas:any[]=[
  //   {
  //     titulo:'Alert',
  //     ruta:'/alert'
  //   },
  //   {
  //     titulo:'Action-Sheet',
  //     ruta:'/action-sheet'
  //   }
  // ]
  constructor() { }

  ngOnInit() {
  }

}
