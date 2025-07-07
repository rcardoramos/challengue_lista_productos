using example.dtos;

namespace example.usecase.Products.Get;

public interface IGetProductUseCase
{
    Task<IEnumerable<GetProductResult>> ExecuteAsync();
}
