using example.dtos;
using example.ports;

namespace example.usecase.Products.Get;

public class GetProductUseCase : IGetProductUseCase
{
    private readonly IProductRespository _productRepository;

    public GetProductUseCase(IProductRespository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<IEnumerable<GetProductResult>> ExecuteAsync()
    {
        var products = await _productRepository.GetAllAsync();
        if (products == null && !products.Any())
        {
            return Enumerable.Empty<GetProductResult>();
        }

        return products.Select(p => new GetProductResult(
            p.Id,
            p.Name!,
            p.Description!,
            p.Price,
            p.Category!,
            p.CreatedAt.ToShortDateString()
        ));
    }
}
