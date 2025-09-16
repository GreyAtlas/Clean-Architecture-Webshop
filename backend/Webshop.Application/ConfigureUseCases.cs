using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Webshop.UseCases.Behaviors;
using Webshop.UseCases.Products.GetProductList;

namespace Webshop.UseCases
{
    public static class ConfigureUseCases
    {
        public static IServiceCollection AddUseCases(
            this IServiceCollection services)
        {
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(AppDomain.CurrentDomain.GetAssemblies()));
            services.AddValidatorsFromAssemblyContaining<GetProductListChunkQueryValidator>();
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            return services;
        }
    }
}
