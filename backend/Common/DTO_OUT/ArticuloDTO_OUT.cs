using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Common.DTO_OUT
{
    public class ArticuloDTO_OUT
    {
        [JsonPropertyName("codigo")]
        public string Codigo { get; set; }
        [JsonPropertyName("descripcion")]
        public string Descripcion { get; set; }
        [JsonPropertyName("precio")]
        public double Precio { get; set; }
        [JsonPropertyName("deposito")]
        public int Deposito {  get; set; }

        //[JsonConstructor()]
        //public ArticuloDTO_OUT(Articulo articulo) 
        //{
        //    Codigo = articulo.Codigo;
        //    Descripcion = articulo.Descripcion;
        //    Precio = articulo.Precio;
        //    Deposito = articulo.Deposito;
        //}

    }
}
