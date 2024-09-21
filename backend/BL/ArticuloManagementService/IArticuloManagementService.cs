
using Common.DTO_OUT;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.ArticuloManagementService
{
    public interface IArticuloManagementService
    {
        List<ArticuloDTO_OUT> ObtenerTodosLosArticulos();
    }
}
