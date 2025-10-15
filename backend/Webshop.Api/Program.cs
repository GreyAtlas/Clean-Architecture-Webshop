using Microsoft.AspNetCore.Identity;
using Microsoft.OpenApi.Models;
using Webshop.Api.Endpoints;
using Webshop.Api.Identity;
using Webshop.Infrastructure;
using Webshop.Infrastructure.Contexts;
using Webshop.UseCases;

var builder = WebApplication.CreateBuilder(args);
var AllowedOrigins = "_allowedOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173")
                          .WithHeaders("Content-Type", "Authorization")
                          .AllowCredentials();
                      });
});
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen(cfg =>
{
    cfg.SwaggerDoc("v1", new OpenApiInfo { Title = "WebshopApi", Version = "v1" });
    cfg.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });
    cfg.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});
builder.Services.AddAuthorization();
builder.Services.Configure<IdentityOptions>(options =>
{
    options.User.RequireUniqueEmail = true;

});
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddUseCases();
builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddSignInManager<CustomSignInManager<IdentityUser>>();
builder.Services.AddProblemDetails();

var app = builder.Build();

app.UseCors(AllowedOrigins);


if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseHttpsRedirection();
}

app.UseExceptionHandler();

app.MapGroup("/identity")
    .MapIdentityApi<IdentityUser>();

app.MapGroup("/notifications")
        .MapNotificationEndpoints();

app.MapGroup("/products")
    .MapProductEndpoints();

app.Run();

