using MediatR;
using Webshop.UseCases.Notifications.Dtos;

namespace Webshop.UseCases.Notifications.GetMostRecentUserNotification
{
    public record GetMostRecentUserNotificationQuery(
        string UserId) :
        IRequest<NotificationDto>;
}
