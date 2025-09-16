using FluentValidation;
using MediatR;

namespace Webshop.UseCases.Behaviors
{
    public class ValidationBehavior<TRequest, TResponse>
        : IPipelineBehavior<TRequest, TResponse>
        where TRequest : class
    {
        private readonly IEnumerable<IValidator<TRequest>> _validators;

        public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
        {
            _validators = validators;
        }
        public async Task<TResponse> Handle(
            TRequest request,
            RequestHandlerDelegate<TResponse> next,
            CancellationToken cancellationToken)
        {
            if (_validators.Any())
            {
                var context = new ValidationContext<TRequest>(request);
                var validationFailures = await Task.WhenAll(
                    _validators.Select(validator => validator.ValidateAsync(context)));

                var errors = validationFailures
                    .Where(validationResult => !validationResult.IsValid)
                    .SelectMany(validationResult => validationResult.Errors)
                    .Select(validationFailure => validationFailure)
                    .ToList();

                if (errors.Count != 0)
                {
                    throw new ValidationException(errors);
                }

            }

            return await next(cancellationToken);
        }
    }
}