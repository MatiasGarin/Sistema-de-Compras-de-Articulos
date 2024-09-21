using Common.DTO_OUT;
using System.Text.Json;
using System.Text.Json.Serialization;
//using Newtonsoft.Json;

namespace BL.ArticuloManagementService
{
    public class ArticuloManagementService : IArticuloManagementService
    {

        public ArticuloManagementService()
        {
        }

        #region PUBLIC

        #region GET
        public List<ArticuloDTO_OUT> ObtenerTodosLosArticulos()
        {
            // Ruta al archivo JSON
            string jsonFilePath = "..\\Common\\Archivos\\articulos.json";

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

            // Deserializamos el JSON a una lista de ArticuloDTO
            ArticulosDTO_OUT articulos = JsonSerializer.Deserialize<ArticulosDTO_OUT>(jsonString, options);
            List<ArticuloDTO_OUT> listaArticulos = articulos.Articulos;

            return listaArticulos;
        }

        #endregion
        #endregion

    }
}
