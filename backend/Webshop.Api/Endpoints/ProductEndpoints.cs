using MediatR;
using Webshop.UseCases.Products.GetProductList;

namespace Webshop.Api.Endpoints
{
    public static class ProductEndpoints
    {
        public static RouteGroupBuilder MapProductEndpoints(this RouteGroupBuilder group)
        {
            group.MapGet("/pagedlist", async (int? chunkSize, int? chunkIndex, bool? sortByAscending, IMediator _mediator) =>
            {
                var result = await _mediator.Send(new GetProductListChunkQuery(chunkSize, chunkIndex, sortByAscending));
                return Results.Ok(result);
            });

            return group;
        }
    }
}
