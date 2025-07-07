using example.dtos;
using example.usecase.Products.Create;
using example.usecase.Products.Get;
using example.usecase.Products.Single;
using Microsoft.AspNetCore.Mvc;

namespace example.api.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ICreateProductUseCase _createProductUseCase;
        private readonly IGetProductUseCase _getProductUseCase;
        private readonly ISingleProductUseCase _singleProductUseCase;

        public ProductController(
            ICreateProductUseCase createProductUseCase,
            IGetProductUseCase getProductUseCase,
            ISingleProductUseCase singleProductUseCase
        )
        {
            _createProductUseCase = createProductUseCase;
            _getProductUseCase = getProductUseCase;
            _singleProductUseCase = singleProductUseCase;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateProductDto dto)
        {
            var request = await _createProductUseCase.ExecuteAsync(dto);
            return Ok(request);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _getProductUseCase.ExecuteAsync();
            return Ok(products);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var product = await _singleProductUseCase.ExecuteAsync(id);
            return Ok(product);
        }
    }
}
