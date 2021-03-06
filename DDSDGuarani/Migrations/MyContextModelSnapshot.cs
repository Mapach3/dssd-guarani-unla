﻿// <auto-generated />
using System;
using DDSDGuarani.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DDSDGuarani.Migrations
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

            modelBuilder.Entity("DDSDGuarani.Entities.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
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

                    b.HasKey("Id");

                    b.ToTable("Address");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            City = "1234",
                            Country = "Argentina",
                            Location = "Lanus",
                            PostalCode = "1234",
                            StreetAndNumber = "Calle 123"
                        },
                        new
                        {
                            Id = 2,
                            City = "1234",
                            Country = "Argentina",
                            Location = "Lanus",
                            PostalCode = "1234",
                            StreetAndNumber = "Calle 123"
                        });
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Career", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Career");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Course", b =>
                {
                    b.Property<int>("SubjectId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<double>("CourseAverage")
                        .HasColumnType("float");

                    b.Property<bool>("InscriptionReminder")
                        .HasColumnType("bit");

                    b.HasKey("SubjectId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("Course");

                    b.HasData(
                        new
                        {
                            SubjectId = 1,
                            UserId = 1,
                            CourseAverage = 0.0
                        },
                        new
                        {
                            SubjectId = 2,
                            UserId = 1,
                            CourseAverage = 0.0
                        });
                });

            modelBuilder.Entity("DDSDGuarani.Entities.FinalCall", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("InscriptionWindowId")
                        .HasColumnType("int");

                    b.Property<int>("SubjectId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("InscriptionWindowId");

                    b.HasIndex("SubjectId");

                    b.ToTable("FinalCall");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.InscriptionFinal", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("FinalId")
                        .HasColumnType("int");

                    b.Property<bool>("InscriptionReminder")
                        .HasColumnType("bit");

                    b.Property<int>("Score")
                        .HasColumnType("int");

                    b.HasKey("UserId", "FinalId");

                    b.HasIndex("FinalId");

                    b.ToTable("InscriptionFinal");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.InscriptionWindow", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("InscriptionWindow");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            EndDate = new DateTime(2020, 9, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            StartDate = new DateTime(2020, 6, 10, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = 2,
                            EndDate = new DateTime(2020, 9, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            StartDate = new DateTime(2020, 6, 15, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CareerId")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("InscriptionWindowId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Period")
                        .HasColumnType("int");

                    b.Property<int>("Shift")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("SubjectCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WeekDay")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CareerId");

                    b.HasIndex("InscriptionWindowId");

                    b.ToTable("Subject");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CareerId = 0,
                            EndTime = new DateTime(2020, 8, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            InscriptionWindowId = 1,
                            Name = "Matematica 1",
                            Period = 1,
                            ScoreUploadLimit = new DateTime(2020, 8, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Shift = 2,
                            StartTime = new DateTime(2020, 6, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Year = 2020
                        },
                        new
                        {
                            Id = 2,
                            CareerId = 0,
                            EndTime = new DateTime(2020, 8, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            InscriptionWindowId = 1,
                            Name = "Matematica 2",
                            Period = 2,
                            ScoreUploadLimit = new DateTime(2020, 8, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Shift = 3,
                            StartTime = new DateTime(2020, 6, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Year = 2020
                        });
                });

            modelBuilder.Entity("DDSDGuarani.Entities.SubjectCodes", b =>
                {
                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("SubjectName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Code");

                    b.ToTable("SubjectCodes");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<int>("AddressId")
                        .HasColumnType("int");

                    b.Property<int>("CareerId")
                        .HasColumnType("int");

                    b.Property<string>("Dni")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImgBase64")
                        .HasColumnType("nvarchar(max)");

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

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AddressId")
                        .IsUnique();

                    b.HasIndex("CareerId");

                    b.ToTable("User");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Active = true,
                            AddressId = 1,
                            CareerId = 0,
                            Dni = "40897248",
                            Email = "pereyratomas18@gmail.com",
                            Name = "Tomas",
                            Password = "1234",
                            PasswordChanged = true,
                            Role = 2,
                            Surname = "Pereyra"
                        },
                        new
                        {
                            Id = 2,
                            Active = true,
                            AddressId = 2,
                            CareerId = 0,
                            Dni = "11111111",
                            Email = "pereyratomas18@gmail.com",
                            Name = "Juan",
                            Password = "1234",
                            PasswordChanged = true,
                            Role = 2,
                            Surname = "Manuel"
                        });
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Course", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.Subject", "Subject")
                        .WithMany("Courses")
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.User", "User")
                        .WithMany("Courses")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Entities.FinalCall", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.InscriptionWindow", "InscriptionWindow")
                        .WithMany("Finals")
                        .HasForeignKey("InscriptionWindowId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.Subject", "Subject")
                        .WithMany("Finals")
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Entities.InscriptionFinal", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.FinalCall", "FinalCall")
                        .WithMany("InscriptionFinals")
                        .HasForeignKey("FinalId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.User", "User")
                        .WithMany("InscriptionFinals")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Subject", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.Career", "Career")
                        .WithMany("Subjects")
                        .HasForeignKey("CareerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.InscriptionWindow", "InscriptionWindow")
                        .WithMany("Subjects")
                        .HasForeignKey("InscriptionWindowId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Entities.User", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.Address", "Address")
                        .WithOne("User")
                        .HasForeignKey("DDSDGuarani.Entities.User", "AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.Career", "Career")
                        .WithMany()
                        .HasForeignKey("CareerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
