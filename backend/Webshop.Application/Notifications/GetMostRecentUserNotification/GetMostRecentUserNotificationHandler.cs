using MediatR;
using Webshop.UseCases.Notifications.Dtos;
using Webshop.Domain.Repositories;

namespace Webshop.UseCases.Notifications.GetMostRecentUserNotification
{
    public class GetMostRecentUserNotificationQueryHandler : IRequestHandler<GetMostRecentUserNotificationQuery, NotificationDto>
    {
        private readonly INotificationRepository _notificationRepository;

        public GetMostRecentUserNotificationQueryHandler(INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository;
        }

        public async Task<NotificationDto> Handle(GetMostRecentUserNotificationQuery request, CancellationToken cancellationToken)
        {
            var result = await _notificationRepository.GetMostRecentUserNotificationAsync(request.UserId);
            return new NotificationDto(result.Message,result.CreatedAt);
        }
    }
}
