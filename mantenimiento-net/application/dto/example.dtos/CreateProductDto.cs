using System;

namespace example.dtos;

public record CreateProductDto(string Name, string Description, decimal Price, string Category);
