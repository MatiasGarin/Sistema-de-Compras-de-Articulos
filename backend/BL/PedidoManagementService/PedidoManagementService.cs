using BL.PedidoManagementService;
using Common.DTO_IN;
using Common.DTO_OUT;
using System.Text.RegularExpressions;

namespace BL.PedidoManagementService
{
    public class PedidoManagementService : IPedidoManagementService
    {
        public PedidoManagementService()
        {
        }

        #region Public

        #region POST
        public bool ValidarPedido(PedidoDTO_IN dto_in)
        {
            bool isvalid = true;

            // si no tiene vendedor, lo considero erroneo
            if (dto_in.idVendedor == 0)
                isvalid = false;

            if (dto_in.articulos != null || dto_in.articulos?.Count() > 0)
            {
                string pattern = @"^[a-zA-ZÀ-ÿ0-9., ]*$"; // pattern para validar que tenga solo caracteres

                foreach (ArticuloDTO_IN articulo in dto_in.articulos)
                {
                    if(!Regex.IsMatch(articulo.Descripcion, pattern) || articulo.Precio <= 0)
                        isvalid = false;
                }
            }
            else
            {
                //si no tiene articulos, lo considero erroneo
                isvalid = false;
            }

            return isvalid;
        }

        #endregion

        #endregion

    }
}
