using MediatR;

namespace Webshop.UseCases.Notifications.CreateNotification
{
    public record CreateNotificationCommand(string userId, string message) : IRequest;
}
