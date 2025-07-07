using System;
using example.adapters;
using example.ports;
using example.usecase.Products.Create;
using example.usecase.Products.Get;
using example.usecase.Products.Single;

namespace example.api.Extensions;

public static class ApplicationServiceExtensions
{
    public static void AddApplicationServices(this IServiceCollection services)
    {
        // Register application services here
        // Example: services.AddScoped<IMyService, MyService>();

        services.AddScoped<IProductRespository, ProductRepository>();
        services.AddScoped<ICreateProductUseCase, CreateProductUseCase>();
        services.AddScoped<IGetProductUseCase, GetProductUseCase>();
        services.AddScoped<ISingleProductUseCase, SingleProductUseCase>();
    }
}
