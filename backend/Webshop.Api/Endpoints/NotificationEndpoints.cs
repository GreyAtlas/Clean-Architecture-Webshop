using MediatR;
using System.Security.Claims;
using Webshop.UseCases.Notifications.GetMostRecentUserNotification;

namespace Webshop.Api.Endpoints
{
    public static class NotificationEndpoints
    {
        public static RouteGroupBuilder MapNotificationEndpoints(this RouteGroupBuilder group)
        {
            group.MapGet("/mostRecent", async (ClaimsPrincipal _user, IMediator _mediator) =>
            {
                var userId = _user.FindFirstValue(ClaimTypes.NameIdentifier);
                var result = await _mediator.Send(new GetMostRecentUserNotificationQuery(userId ?? ""));
                return Results.Ok(result);
            });

            return group.RequireAuthorization();
        }
    }
}
