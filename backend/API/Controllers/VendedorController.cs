using BL.ArticuloManagementService;
using BL.VendedorManagementService;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VendedorController : ControllerBase
    {
        private readonly IVendedorManagementService _vendedorManagementService;

        public VendedorController(IVendedorManagementService vendedorManagementService)
        {
            _vendedorManagementService = vendedorManagementService;
        }

        [HttpGet]
        public ActionResult GetVendedores()
        {
            try
            {
                return Ok(_vendedorManagementService.ObtenerTodosLosVendedores());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
