using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTO_IN
{
    public class PedidoDTO_IN
    {
        public int idVendedor {  get; set; }
        public List<ArticuloDTO_IN> articulos { get; set; }
    }
}
