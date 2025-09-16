
namespace Webshop.Domain.Entities
{
    public class Notification
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public required string UserId {  get; set; }
        public required string Message { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public Notification() { }
        public Notification(string userId, string message)
        {
            UserId = userId;
            Message = message;
            CreatedAt = DateTime.UtcNow;
        }
    }
}
