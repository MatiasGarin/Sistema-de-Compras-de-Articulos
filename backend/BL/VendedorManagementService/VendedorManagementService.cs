using BL.VendedorManagementService;
using Common.DTO_OUT;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BL.VendedorManagementService
{
    public class VendedorManagementService : IVendedorManagementService
    {

        public VendedorManagementService()
        {
        }

        #region PUBLIC

        #region GET
        public List<VendedorDTO_OUT> ObtenerTodosLosVendedores()
        {
            // Ruta al archivo JSON
            string jsonFilePath = "..\\Common\\Archivos\\vendedores.json";

            // Leemos el contenido del archivo JSON
            string jsonString = File.ReadAllText(jsonFilePath);

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
                AllowTrailingCommas = true,
                ReadCommentHandling = JsonCommentHandling.Skip,
                NumberHandling = JsonNumberHandling.AllowReadingFromString,
                IncludeFields = true,
            };

            // Deserializamos el JSON a una lista de VendedoresDTO
            VendedoresDTO_OUT vendedores = JsonSerializer.Deserialize<VendedoresDTO_OUT>(jsonString, options);
            List<VendedorDTO_OUT> listaVendedores = vendedores.Vendedores;

            return listaVendedores;
        }


        #endregion
        #endregion

    }
}
