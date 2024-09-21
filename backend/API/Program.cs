using BL.ArticuloManagementService;
using BL.PedidoManagementService;
using BL.PedidoManagmentService;
using BL.VendedorManagementService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
#region Services

builder.Services.AddScoped<IArticuloManagementService, ArticuloManagementService>();
builder.Services.AddScoped<IVendedorManagementService, VendedorManagementService>();
builder.Services.AddScoped<IPedidoManagementService, PedidoManagementService>();

#endregion

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
