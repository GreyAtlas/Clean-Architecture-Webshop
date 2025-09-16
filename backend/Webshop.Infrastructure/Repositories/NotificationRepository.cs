using Microsoft.EntityFrameworkCore;
using Webshop.Domain.Entities;
using Webshop.Domain.Repositories;
using Webshop.Infrastructure.Contexts;

namespace Webshop.Infrastructure.Repositories
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly ApplicationDbContext _context;

        public NotificationRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Task<IEnumerable<Notification>> GetUserNotificationsAsync(string userId, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public async Task<Notification> GetMostRecentUserNotificationAsync(string userId)
        {
            var queryable = await _context.Notifications
                .Where(n => n.UserId == userId)
                .OrderByDescending(n => n.CreatedAt)
                .FirstAsync();
            return queryable;
        }

        public async Task<Guid> CreateNotification(string userId, string message)
        {
            var result = await _context.Notifications.AddAsync(new Notification { UserId = userId, Message = message });
            await _context.SaveChangesAsync();
            return result.Entity.Id;
        }
    }
}
