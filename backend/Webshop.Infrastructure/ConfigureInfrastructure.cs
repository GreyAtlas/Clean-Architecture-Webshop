using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Webshop.Infrastructure.Contexts;
using Microsoft.EntityFrameworkCore;
using Webshop.Domain.Repositories;
using Webshop.Infrastructure.Repositories;

namespace Webshop.Infrastructure
{
    public static class ConfigureInfrastructure
    {
        public static IServiceCollection AddInfrastructure(
                 this IServiceCollection services,
                  IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseMySQL(connectionString: configuration.GetConnectionString("DefaultConnection") ?? "");
            });
            services.AddScoped<INotificationRepository, NotificationRepository>();
            services.AddScoped<IProductRepository, ProductRepository>();


            return services;

        }
    }
}
