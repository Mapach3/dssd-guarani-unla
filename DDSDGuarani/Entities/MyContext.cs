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
            Console.WriteLine("Seeding data to database");

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

                modelBuilder.Entity<Career>().HasData(
                    new Career{
                        Id=1,
                        Name="Lic en Sistemas"
                    }
                );
            
            modelBuilder.Entity<Address>().HasData(
                new Address
                {
                    Id=1,
                    StreetAndNumber="Calle 123",
                    Location="Lanus",
                    PostalCode="1234",
                    City="1234",
                    Country="Argentina"
                },
                 new Address
                {
                    Id=2,
                    StreetAndNumber="Calle 123",
                    Location="Lanus",
                    PostalCode="1234",
                    City="1234",
                    Country="Argentina"
                }
              
               );
            modelBuilder.Entity<User>().HasData(
                new User{
                    Id=1,
                    Email="pereyratomas18@gmail.com",
                    Password="1234",
                    Name="Tomas",
                    Surname="Pereyra",
                    Dni="40897248",
                    Active=true,
                    PasswordChanged=true,
                    ImgBase64=null,
                    Role=Enums.UserRole.TEACHER,
                    AddressId=1

                },
                new User{
                    Id=2,
                    Email="pereyratomas18@gmail.com",
                    Password="1234",
                    Name="Juan",
                    Surname="Manuel",
                    Dni="11111111",
                    Active=true,
                    PasswordChanged=true,
                    ImgBase64=null,
                    Role=Enums.UserRole.TEACHER,
                    AddressId=2

                }
            );
              modelBuilder.Entity<InscriptionWindow>().HasData(
                  new InscriptionWindow{
                      Id=1,
                      StartDate=  new DateTime(2020, 6, 10),
                      EndDate = new DateTime(2020, 9, 10),                  

                  },
                  new InscriptionWindow{
                      Id=2,
                      StartDate=  new DateTime(2020, 6, 15),
                      EndDate = new DateTime(2020, 9, 15),                  

                  }
              );

              modelBuilder.Entity<Subject>().HasData(
                  new Subject{
                      Id=1,
                      Name="Matematica 1",
                      StartTime =new DateTime(2020, 6, 25),
                      EndTime=new DateTime(2020, 8, 25),
                      ScoreUploadLimit=new DateTime(2020, 8, 20),
                      Year=2020,
                      Period=1,
                      Shift=Enums.SubjectShift.AFTERNOON,
                      InscriptionWindowId=1,
                      CareerId=1



                  },
                  new Subject{
                      Id=2,
                      Name="Matematica 2",
                      StartTime =new DateTime(2020, 6, 25),
                      EndTime=new DateTime(2020, 8, 25),
                      ScoreUploadLimit=new DateTime(2020, 8, 20),
                      Year=2020,
                      Period=2,
                      Shift=Enums.SubjectShift.EVENING,
                      InscriptionWindowId=1,
                      CareerId=1



                  }
                   
              );

               modelBuilder.Entity<Course>().HasData(
                   new Course{
                    SubjectId=1,
                    UserId=1,
                    CourseAverage=0
                   },
                   new Course{
                    SubjectId=2,
                    UserId=1,
                    CourseAverage=0
                   }
               );

        
        }
    }
}
