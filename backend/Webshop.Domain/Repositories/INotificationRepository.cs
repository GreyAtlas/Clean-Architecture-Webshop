using Webshop.Domain.Entities;

namespace Webshop.Domain.Repositories
{
    public interface INotificationRepository
    {
        Task<IEnumerable<Notification>> GetUserNotificationsAsync(string userId, int page, int pageSize);
        
        Task<Guid> CreateNotification(string userId, string message);
        Task<Notification> GetMostRecentUserNotificationAsync(string userId);
    }
}
