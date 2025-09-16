using Microsoft.EntityFrameworkCore;
using Webshop.Domain.Entities;
using Webshop.Domain.Repositories;
using Webshop.Infrastructure.Contexts;

namespace Webshop.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Product>> GetProductListChunk(int ChunkSize, int ChunkIndex, bool SortByAscending)
        {
            var query = _context.Products.AsQueryable();

            if (SortByAscending)
            {
                query= query.OrderBy(x => x.Name);
            }
            else
            {
                query= query.OrderByDescending(x => x.Name);
            }

            return await query.Skip(ChunkIndex * ChunkSize)
                .Take(ChunkSize)
                .ToListAsync();
        }
    }
}
