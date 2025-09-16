using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;
using Webshop.Domain.Entities;


namespace Webshop.Infrastructure.Contexts
{
    public class ApplicationDbContext :  IdentityDbContext<IdentityUser>{

        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Product> Products { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
            base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Notification>(entity =>
            {
                entity.HasKey(entity => entity.Id);
                entity.Property(entity => entity.Id)
                .ForMySQLHasDefaultValueSql("(uuid())");
                entity.Property(entity => entity.CreatedAt)
                .ForMySQLHasDefaultValueSql("(NOW())");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(entity => entity.Id);
                entity.Property(entity => entity.Id)
                .ForMySQLHasDefaultValueSql("(uuid())");
            }); 
        }
    }

}
