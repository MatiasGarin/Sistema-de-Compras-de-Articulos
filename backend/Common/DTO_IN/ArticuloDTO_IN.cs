using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Common.DTO_IN
{
    public class ArticuloDTO_IN
    {
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public double Precio { get; set; }
        public int Deposito { get; set; }
    }
}
