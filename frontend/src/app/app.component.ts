import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulo } from './core/models/articulo';
import { Vendedor, VendedorDTO_OUT } from './core/models/vendedor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ArticuloService } from './core/services/articulos.service';
import { VendedorService } from './core/services/vendedores.service';
import { PedidoService } from './core/services/pedidos.service';
import { PedidoDTO_IN } from './core/models/pedido';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,],   
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
displayedColumns: any;
isAllSelected(): unknown {
throw new Error('Method not implemented.');
}
masterToggle() {
throw new Error('Method not implemented.');
}
  title = 'frontend';

  articulos: Articulo[] = [];
  vendedores: Vendedor[] = [];
  vendedorSeleccionado: number | null = null;
  seleccionados: any[] = [];
  mostrarError: boolean = false;

  constructor(private _articuloService: ArticuloService, private _vendedorService: VendedorService, private _pedidoService: PedidoService) {}


  ngOnInit() {
    // cargo los datos desde el servicio de cada uno
    this.cargarArticulos();
    this.cargarVendedores();
  }

  cargarArticulos() {
    this._articuloService.getAllArticulos().then((articulos) => {
      // realizo el filtrado de los articulos del deposito 1
      this.articulos = articulos.filter(a => a.deposito == 1);
    })
  }

  cargarVendedores() {
    this._vendedorService.getAllVendedores().then((vendedores) => {
      this.vendedores = vendedores;
    });
  }

  procesarSeleccionados() {
    this.seleccionados = this.articulos.filter(a => a.seleccionado);

    if(this.seleccionados.length == 0 || this.vendedorSeleccionado == 0)
      this.mostrarError = true;
    
    let pedido:PedidoDTO_IN = this.generarPedido();

    this._pedidoService.validarPedido(pedido).then((response) => {
      let mensaje = response.toString() == 'true' ? "OK" : "Contiene errores"
      alert("Validacion del pedido: "+ mensaje);
    });
  }

  generarPedido(): PedidoDTO_IN {
    let res:PedidoDTO_IN = new PedidoDTO_IN();

    res.idVendedor = this.vendedorSeleccionado ? this.vendedorSeleccionado : 0;
    res.articulos = this.seleccionados;

    return res;
  }
}
