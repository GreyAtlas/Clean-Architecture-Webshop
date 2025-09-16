using FluentValidation;

namespace Webshop.UseCases.Products.GetProductList
{
    public class GetProductListChunkQueryValidator : AbstractValidator<GetProductListChunkQuery>
    {
        public GetProductListChunkQueryValidator()
        {
            RuleFor(x => x.ChunkIndex).GreaterThanOrEqualTo(0);
            RuleFor(x => x.ChunkSize).InclusiveBetween(0,60);
        }
    }
}
