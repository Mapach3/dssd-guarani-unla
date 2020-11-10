using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace StudentModule.Entities
{
    public class MyContext : DbContext
    {
        public MyContext()
        {
        }

        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Subject> Subject { get; set; }
        public DbSet<Career> Career { get; set; }
        public DbSet<InscriptionWindow> InscriptionWindow { get; set; }
        public DbSet<FinalCall> FinalCall { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<InscriptionFinal> InscriptionFinal { get; set; }
        public DbSet<EvaluationInstance> EvaluationInstance { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>()
                .HasKey(co => new { co.SubjectId, co.UserId });

            modelBuilder.Entity<Course>()
                .HasOne(co => co.User)
                .WithMany(u => u.Courses)
                .HasForeignKey(co => co.UserId);

            modelBuilder.Entity<Course>()
                .HasOne(co => co.Subject)
                .WithMany(s => s.Courses)
                .HasForeignKey(co => co.SubjectId);

            modelBuilder.Entity<InscriptionFinal>()
                .HasKey(co => new { co.UserId, co.FinalId });

            modelBuilder.Entity<InscriptionFinal>()
                .HasOne(co => co.User)
                .WithMany(u => u.InscriptionFinals)
                .HasForeignKey(co => co.UserId);

            modelBuilder.Entity<InscriptionFinal>()
                .HasOne(co => co.FinalCall)
                .WithMany(s => s.InscriptionFinals)
                .HasForeignKey(co => co.FinalId);
        }
    }
}
