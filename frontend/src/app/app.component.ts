import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulo } from './core/models/articulo';
import { Vendedor } from './core/models/vendedor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ArticuloService } from './core/services/articulos.service';
import { VendedorService } from './core/services/vendedores.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'frontend';

  articulos: Articulo[] = [];
  vendedores: Vendedor[] = [];
  vendedorSeleccionado: number | null = null;

  constructor(private _articuloService: ArticuloService, private _vendedorService: VendedorService) {}


  ngOnInit() {
    // Aquí normalmente cargarías los datos desde un servicio
    this.cargarArticulos();
    this.cargarVendedores();
  }

  cargarArticulos() {
    // this._articuloService.getAllArticulos().then((articulos) => {
    //   console.log("api: ",articulos)
    //   this.articulos = articulos;
    // })
    // Simulación de carga de datos
    this.articulos = [
      { codigo: 'K1020', descripcion: 'Colchon Telgo', precio: 10256.12, deposito: 1, seleccionado: false },
      { codigo: 'K1022', descripcion: 'Colchon Seally', precio: 18256.12, deposito: 4, seleccionado: false },
      { codigo: 'K1024', descripcion: 'Sommier Telgo', precio: 14256.12, deposito: 1, seleccionado: false },
      { codigo: 'K1026', descripcion: 'Sommier Seally', precio: 13256.12, deposito: 1, seleccionado: false },
      { codigo: 'F1026', descripcion: 'Almohada Seally', precio: 3250.12, deposito: 4, seleccionado: false },
    ];
  }

  cargarVendedores() {
    // this._vendedorService.getAllArticulos().then((vendedores) => {
    //   console.log("api: ",vendedores)
    //   this.vendedores = vendedores;
    // })

    // Simulación de carga de vendedores
    this.vendedores = [
      { id: 1, descripcion: 'Juan Pérez' },
      { id: 2, descripcion: 'María García' },
      { id: 3, descripcion: 'Carlos López' },
    ];
  }

  procesarSeleccionados() {
    const seleccionados = this.articulos.filter(a => a.seleccionado);
    console.log('Artículos seleccionados:', seleccionados);
    console.log('Vendedor seleccionado:', this.vendedorSeleccionado);
    // Aquí puedes agregar la lógica para procesar los artículos seleccionados
  }
}
