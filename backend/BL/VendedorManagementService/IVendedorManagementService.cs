
using Common.DTO_OUT;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.VendedorManagementService
{
    public interface IVendedorManagementService
    {
        List<VendedorDTO_OUT> ObtenerTodosLosVendedores();
    }
}
