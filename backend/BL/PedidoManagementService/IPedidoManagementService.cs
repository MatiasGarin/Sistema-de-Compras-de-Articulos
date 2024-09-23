
using Common.DTO_IN;

namespace BL.PedidoManagementService
{
    public interface IPedidoManagementService
    {
        bool ValidarPedido(PedidoDTO_IN pedidoDTO_IN);
    }
}
