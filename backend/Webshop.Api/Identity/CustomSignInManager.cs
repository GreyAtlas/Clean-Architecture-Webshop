using MediatR;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Webshop.UseCases.Notifications.CreateNotification;

namespace Webshop.Api.Identity
{
    public class CustomSignInManager<TUser> : SignInManager<TUser> where TUser : IdentityUser
    {
        private readonly IMediator _mediator;
        public CustomSignInManager(UserManager<TUser> userManager,
            IHttpContextAccessor contextAccessor,
            IUserClaimsPrincipalFactory<TUser> claimsFactory,
            IOptions<IdentityOptions> optionsAccessor,
            ILogger<SignInManager<TUser>> logger,
            IAuthenticationSchemeProvider schemes,
            IUserConfirmation<TUser> confirmation,
            IMediator mediator) : base(userManager, contextAccessor, claimsFactory, optionsAccessor, logger, schemes, confirmation)
        {
            _mediator = mediator;
        }
        public override async Task<SignInResult> PasswordSignInAsync(string userName, string password, bool isPersistent, bool lockoutOnFailure)
        {
            var result = await base.PasswordSignInAsync(userName, password, isPersistent, lockoutOnFailure);

            if (result.Succeeded)
            {
                TUser val = await UserManager.FindByNameAsync(userName);
                if (val != null)
                {
                    await _mediator.Send(new CreateNotificationCommand(val.Id, "User: " + userName + ", has signed in"));
                }
            }
            return result;
        }
    }
}
