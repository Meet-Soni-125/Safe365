using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using safe365BackEnd.Models;

namespace safe365BackEnd.Models
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions options)
            : base(options)
        {

        }
        public DbSet<Customer> Customerts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(new Customer
            {
                CustomerId = 1,
                FirstName = "Meet",
                LastName = "Soni",
                BusinessName = "Shopping",
                DateOfBirth = new DateTime(1990, 04, 25),
                CreatedDate = DateTime.Now
            });
        }
    }
}
