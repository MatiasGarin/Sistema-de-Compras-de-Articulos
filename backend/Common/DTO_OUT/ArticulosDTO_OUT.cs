using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Common.DTO_OUT
{
    public class ArticulosDTO_OUT
    {
        [JsonPropertyName("articulos")]
        public List<ArticuloDTO_OUT> Articulos { get; set; }

        //[JsonConstructor()]
        //public ArticulosDTO_OUT(List<ArticuloDTO_OUT> articulos) 
        //{
        //    Articulos = articulos;
        //}

    }
}
