using System;
using example.entities;

namespace example.ports;

public interface IProductRespository
{
    Task<Product> SingleAsync(int id);
    Task<IEnumerable<Product>> GetAllAsync();
    Task<Product> CreateAsync(Product product);
}
