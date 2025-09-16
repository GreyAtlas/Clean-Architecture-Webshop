

namespace Webshop.UseCases.Products.Dtos
{
    public record ProductDto(Guid Id, string Name, decimal Price, string Description, string ImageUrl);

}
