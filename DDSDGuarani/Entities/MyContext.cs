using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DDSDGuarani.Entities
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
                .HasKey(co => new { co.IdSubject, co.IdUser });

            modelBuilder.Entity<Course>()
                .HasOne(co => co.User)
                .WithMany(u => u.UserCourses)
                .HasForeignKey(co => co.IdUser);

            modelBuilder.Entity<Course>()
                .HasOne(co => co.Subject)
                .WithMany(s => s.SubjectCourses)
                .HasForeignKey(co => co.IdSubject);

            modelBuilder.Entity<InscriptionFinal>()
                .HasKey(co => new { co.IdUser, co.IdFinal });

            modelBuilder.Entity<InscriptionFinal>()
                .HasOne(co => co.User)
                .WithMany(u => u.UserInscriptionFinals)
                .HasForeignKey(co => co.IdUser);

            modelBuilder.Entity<InscriptionFinal>()
                .HasOne(co => co.FinalCall)
                .WithMany(s => s.FinallCallInscriptionFinals)
                .HasForeignKey(co => co.IdFinal);

        }
    }

}
