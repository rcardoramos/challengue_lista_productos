using System;
using example.dtos;

namespace example.usecase.Products.Single;

public interface ISingleProductUseCase
{
    Task<SingleProductResult> ExecuteAsync(int productId);
}
