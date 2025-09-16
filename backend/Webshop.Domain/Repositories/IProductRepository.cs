using Webshop.Domain.Entities;

namespace Webshop.Domain.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProductListChunk(int ChunkSize, int ChunkIndex, bool SortByAscending);
    }
}
