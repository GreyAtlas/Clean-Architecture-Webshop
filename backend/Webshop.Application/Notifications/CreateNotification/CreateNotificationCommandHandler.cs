using MediatR;
using Webshop.Domain.Repositories;

namespace Webshop.UseCases.Notifications.CreateNotification
{
    public class CreateNotificationCommandHandler : IRequestHandler<CreateNotificationCommand>
    {
        private readonly INotificationRepository _notificationRepository;

        public CreateNotificationCommandHandler(INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository;
        }
        public async Task Handle(CreateNotificationCommand request, CancellationToken cancellationToken)
        {
            await _notificationRepository.CreateNotification(request.userId, request.message);
        }
    }
}
