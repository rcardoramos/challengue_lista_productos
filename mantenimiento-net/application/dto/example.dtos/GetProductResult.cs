using System;

namespace example.dtos;

public record GetProductResult(
    int Id,
    string Name,
    string Description,
    decimal Price,
    string Category,
    string CreatedAt
);
