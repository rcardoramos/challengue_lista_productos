using System;

namespace example.dtos;

public record SingleProductResult(
    int Id,
    string Name,
    string Description,
    decimal Price,
    string Category,
    string CreatedAt
);
