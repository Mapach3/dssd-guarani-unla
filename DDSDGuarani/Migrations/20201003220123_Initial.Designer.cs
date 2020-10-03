﻿// <auto-generated />
using System;
using DDSDGuarani.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DDSDGuarani.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20201003220123_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DDSDGuarani.Entities.Address", b =>
                {
                    b.Property<int>("IdAddress")
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

                    b.HasKey("IdAddress");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Course", b =>
                {
                    b.Property<int>("IdSubject")
                        .HasColumnType("int");

                    b.Property<int>("IdUser")
                        .HasColumnType("int");

                    b.Property<double>("CourseAverage")
                        .HasColumnType("float");

                    b.HasKey("IdSubject", "IdUser");

                    b.HasIndex("IdUser");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.EvaluationInstance", b =>
                {
                    b.Property<int>("IdEvaluationInstance")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int?>("IdSubject")
                        .HasColumnType("int");

                    b.Property<int?>("IdUser")
                        .HasColumnType("int");

                    b.Property<double>("Score")
                        .HasColumnType("float");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("IdEvaluationInstance");

                    b.HasIndex("IdSubject");

                    b.HasIndex("IdUser");

                    b.ToTable("EvaluationInstance");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.FinalCall", b =>
                {
                    b.Property<int>("IdFinalCall")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("IdInscriptionWindow")
                        .HasColumnType("int");

                    b.Property<int>("IdSubject")
                        .HasColumnType("int");

                    b.HasKey("IdFinalCall");

                    b.HasIndex("IdInscriptionWindow");

                    b.HasIndex("IdSubject");

                    b.ToTable("FinalCall");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.InscriptionFinal", b =>
                {
                    b.Property<int>("IdUser")
                        .HasColumnType("int");

                    b.Property<int>("IdFinal")
                        .HasColumnType("int");

                    b.HasKey("IdUser", "IdFinal");

                    b.HasIndex("IdFinal");

                    b.ToTable("InscriptionFinal");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.InscriptionWindow", b =>
                {
                    b.Property<int>("IdInscriptionWindow")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("IdInscriptionWindow");

                    b.ToTable("InscriptionWindow");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Subject", b =>
                {
                    b.Property<int>("IdSubject")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("IdInscriptionWindow")
                        .HasColumnType("int");

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

            modelBuilder.Entity("DDSDGuarani.Entities.User", b =>
                {
                    b.Property<int>("IdUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("IdAddress")
                        .IsRequired()
                        .HasColumnType("int");

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

            modelBuilder.Entity("DDSDGuarani.Entities.Course", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.Subject", "Subject")
                        .WithMany("SubjectCourses")
                        .HasForeignKey("IdSubject")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.User", "User")
                        .WithMany("UserCourses")
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Entities.EvaluationInstance", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.Subject", "Subject")
                        .WithMany("SubjectEvaluations")
                        .HasForeignKey("IdSubject");

                    b.HasOne("DDSDGuarani.Entities.User", "User")
                        .WithMany("UserEvaluations")
                        .HasForeignKey("IdUser");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.FinalCall", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.InscriptionWindow", "InscriptionWindow")
                        .WithMany("Finals")
                        .HasForeignKey("IdInscriptionWindow")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.Subject", "Subject")
                        .WithMany("SubjectFinals")
                        .HasForeignKey("IdSubject")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Entities.InscriptionFinal", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.FinalCall", "FinalCall")
                        .WithMany("FinallCallInscriptionFinals")
                        .HasForeignKey("IdFinal")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDSDGuarani.Entities.User", "User")
                        .WithMany("UserInscriptionFinals")
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DDSDGuarani.Entities.Subject", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.InscriptionWindow", "InscriptionWindow")
                        .WithMany("Subjects")
                        .HasForeignKey("IdInscriptionWindow");
                });

            modelBuilder.Entity("DDSDGuarani.Entities.User", b =>
                {
                    b.HasOne("DDSDGuarani.Entities.Address", "Address")
                        .WithOne("User")
                        .HasForeignKey("DDSDGuarani.Entities.User", "IdAddress")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
