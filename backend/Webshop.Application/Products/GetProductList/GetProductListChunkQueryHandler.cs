using MediatR;
using Webshop.Domain.Repositories;
using Webshop.UseCases.Products.Dtos;

namespace Webshop.UseCases.Products.GetProductList
{
    public class GetProductListChunkQueryHandler : IRequestHandler<GetProductListChunkQuery, ProductListDto>
    {
        private readonly IProductRepository _productRepository;

        public GetProductListChunkQueryHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<ProductListDto> Handle(GetProductListChunkQuery request, CancellationToken cancellationToken)
        {

            var result = await _productRepository.GetProductListChunk(request.ChunkSize, request.ChunkIndex, request.SortByAscending);
            return new ProductListDto
            (
                Products: result.Select(product => new ProductDto(
                        Id: product.Id,
                        Name: product.Name,
                        Price: product.Price,
                        Description: product.Description,
                        ImageUrl: product.ImageUrl)).ToList()
            );
        }
    }
}
