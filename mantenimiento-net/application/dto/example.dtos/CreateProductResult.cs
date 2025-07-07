using System;

namespace example.dtos;

public record CreateProductResult(
    int Id,
    string Name,
    string Description,
    decimal Price,
    string Category,
    DateTime CreatedAt
);
