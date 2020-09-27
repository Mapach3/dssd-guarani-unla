using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DDSDGuarani.Domain
{
    public class MyContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Subject> Subject { get; set; }
        public DbSet<Course> Course { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=desktop-dogui;Database=DSSD.Guarani;Trusted_Connection=True;");

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>()
                .HasKey(co => new { co.IdSubject, co.IdUser });

            modelBuilder.Entity<Course>()
                .HasOne(co => co.User)
                .WithMany( u => u.SubjectCourses)
                .HasForeignKey(co => co.IdUser);

            modelBuilder.Entity<Course>()
                .HasOne(co => co.Subject)
                .WithMany(s => s.SubjectCourses)
                .HasForeignKey(co => co.IdSubject);
        }
    }

}
