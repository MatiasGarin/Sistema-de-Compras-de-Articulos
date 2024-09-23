using BL.PedidoManagementService;
using Common.DTO_IN;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly IPedidoManagementService _pedidoManagementService;

        public PedidoController(IPedidoManagementService pedidoManagementService)
        {
            _pedidoManagementService = pedidoManagementService;
        }

        [HttpPost(Name = "ValidarPedido")]
        public ActionResult ValidarPedido([FromForm] PedidoDTO_IN dtoIn)
        {
            try
            {
                return Ok(_pedidoManagementService.ValidarPedido(dtoIn));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
