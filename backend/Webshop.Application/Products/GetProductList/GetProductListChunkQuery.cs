using MediatR;
using Webshop.UseCases.Products.Dtos;

namespace Webshop.UseCases.Products.GetProductList
{
    public record GetProductListChunkQuery : IRequest<ProductListDto>
    {
        public int ChunkSize { get; init; }
        public int ChunkIndex { get; init; }
        public bool SortByAscending { get; init; }
        public GetProductListChunkQuery(int? chunkSize = null, int? chunkIndex = null, bool? sortByAscending = null)
        {
            ChunkSize = chunkSize ?? 20;
            ChunkIndex = chunkIndex ?? 0;
            SortByAscending = sortByAscending ?? true;
        }
    }

}
