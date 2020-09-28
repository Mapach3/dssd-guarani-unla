﻿// <auto-generated />
using System;
using DDSDGuarani.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DDSDGuarani.Domain.Migrations
{
    [DbContext(typeof(MyContext))]
    partial class MyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.Address", b =>
                {
                    b.Property<long>("IdAddress")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StreetAndNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdAddress");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.Course", b =>
                {
                    b.Property<long>("IdSubject")
                        .HasColumnType("bigint");

                    b.Property<long>("IdUser")
                        .HasColumnType("bigint");

                    b.Property<double>("CourseAverage")
                        .HasColumnType("float");

                    b.HasKey("IdSubject", "IdUser");

                    b.HasIndex("IdUser");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.InscriptionWindow", b =>
                {
                    b.Property<long>("IdInscriptionWindow")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("IdInscriptionWindow");

                    b.ToTable("InscriptionWindow");
                });

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.Subject", b =>
                {
                    b.Property<long>("IdSubject")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<long?>("IdInscriptionWindow")
                        .HasColumnType("bigint");

                    b.Property<int>("Period")
                        .HasColumnType("int");

                    b.Property<int>("Shift")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("IdSubject");

                    b.HasIndex("IdInscriptionWindow");

                    b.ToTable("Subject");
                });

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.User", b =>
                {
                    b.Property<long>("IdUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("IdAddress")
                        .IsRequired()
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PasswordChanged")
                        .HasColumnType("bit");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<string>("Surname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdUser");

                    b.HasIndex("IdAddress")
                        .IsUnique();

                    b.ToTable("User");
                });

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.Course", b =>
                {
                    b.HasOne("DDSDGuarani.Domain.Entities.Subject", "Subject")
                        .WithMany("SubjectCourses")
                        .HasForeignKey("IdSubject")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Domain.Entities.User", "User")
                        .WithMany("UserCourses")
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.Subject", b =>
                {
                    b.HasOne("DDSDGuarani.Domain.Entities.InscriptionWindow", "InscriptionWindow")
                        .WithMany("Subjects")
                        .HasForeignKey("IdInscriptionWindow");
                });

            modelBuilder.Entity("DDSDGuarani.Domain.Entities.User", b =>
                {
                    b.HasOne("DDSDGuarani.Domain.Entities.Address", "Address")
                        .WithOne("User")
                        .HasForeignKey("DDSDGuarani.Domain.Entities.User", "IdAddress")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
