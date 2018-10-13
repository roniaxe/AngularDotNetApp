using Microsoft.EntityFrameworkCore;
using TestWebApi.Models;

namespace TestWebApi.Data
{
    public class TestEntities : DbContext
    {
        public TestEntities(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Blog>().HasData(
                new Blog {Id = 1, Name = "Books Blog"},
                new Blog {Id = 2, Name = "Code Blog"},
                new Blog {Id = 3, Name = "Angular Blog"});
        }

        public DbSet<Blog> Blogs { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
