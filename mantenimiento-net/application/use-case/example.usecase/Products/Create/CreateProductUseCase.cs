using example.dtos;
using example.entities;
using example.ports;

namespace example.usecase.Products.Create;

public class CreateProductUseCase : ICreateProductUseCase
{
    private readonly IProductRespository _productRepository;

    public CreateProductUseCase(IProductRespository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<CreateProductResult> ExecuteAsync(CreateProductDto dto)
    {
        var product = new Product
        {
            Name = dto.Name,
            Description = dto.Description,
            Price = dto.Price,
            Category = dto.Category,
            CreatedAt = DateTime.Now,
        };

        var entity = await _productRepository.CreateAsync(product);
        return new CreateProductResult(
            entity.Id,
            entity.Name!,
            entity.Description!,
            entity.Price,
            entity.Category!,
            entity.CreatedAt
        );
    }
}
