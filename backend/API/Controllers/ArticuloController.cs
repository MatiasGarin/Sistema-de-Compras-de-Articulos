using BL.ArticuloManagementService;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArticuloController : ControllerBase
    {
        private readonly IArticuloManagementService _articuloManagementService;

        public ArticuloController(IArticuloManagementService articuloManagementService)
        {
            _articuloManagementService = articuloManagementService;
        }

        [HttpGet]
        public ActionResult GetArticulos()
        {
            try
            {
                return Ok(_articuloManagementService.ObtenerTodosLosArticulos());   
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

    }
}
