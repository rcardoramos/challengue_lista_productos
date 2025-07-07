using example.dtos;

namespace example.usecase.Products.Create;

public interface ICreateProductUseCase
{
    Task<CreateProductResult> ExecuteAsync(CreateProductDto dto);
}
