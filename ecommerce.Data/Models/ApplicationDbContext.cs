using System;
using ecommerce.Data.Enum;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ecommerce.Data.Models
{
    //DbContext for normal IdentityDbContext for identity
    public class ApplicationDbContext : IdentityDbContext<User>
    {



        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach (var entry in ChangeTracker.Entries<Buyer>().Where(e => e.State == EntityState.Added))
            {
                var entity = entry.Entity;

                // Check if the Id is 0 (indicating it's a new entity)
                if (entity.Id == 0)
                {
                    // Perform the database insert asynchronously to get the auto-incremented Id
                    await base.SaveChangesAsync(cancellationToken);

                    // Update the reference number using the generated Id

                }
            }

            return await base.SaveChangesAsync(cancellationToken);
        }
        public DbSet<Buyer> Buyers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Sellers> Sellers { get; set; }
    }


}