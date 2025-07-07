using System;
using example.dtos;
using example.ports;

namespace example.usecase.Products.Single;

public class SingleProductUseCase : ISingleProductUseCase
{
    private readonly IProductRespository _productRepository;

    public SingleProductUseCase(IProductRespository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<SingleProductResult> ExecuteAsync(int productId)
    {
        var product = await _productRepository.SingleAsync(productId);
        if (product == null)
        {
            throw new Exception($"Product with ID {productId} not found.");
        }

        return new SingleProductResult(
            product.Id,
            product.Name!,
            product.Description!,
            product.Price,
            product.Category!,
            product.CreatedAt.ToShortDateString()
        );
    }
}
