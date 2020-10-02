using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DDSDGuarani.Domain.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    IdAddress = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StreetAndNumber = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    PostalCode = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.IdAddress);
                });

            migrationBuilder.CreateTable(
                name: "InscriptionWindow",
                columns: table => new
                {
                    IdInscriptionWindow = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InscriptionWindow", x => x.IdInscriptionWindow);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    IdUser = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    PasswordChanged = table.Column<bool>(nullable: false),
                    Role = table.Column<int>(nullable: false),
                    IdAddress = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.IdUser);
                    table.ForeignKey(
                        name: "FK_User_Address_IdAddress",
                        column: x => x.IdAddress,
                        principalTable: "Address",
                        principalColumn: "IdAddress",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Subject",
                columns: table => new
                {
                    IdSubject = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartTime = table.Column<DateTime>(nullable: false),
                    EndTime = table.Column<DateTime>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    Period = table.Column<int>(nullable: false),
                    Shift = table.Column<int>(nullable: false),
                    IdInscriptionWindow = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject", x => x.IdSubject);
                    table.ForeignKey(
                        name: "FK_Subject_InscriptionWindow_IdInscriptionWindow",
                        column: x => x.IdInscriptionWindow,
                        principalTable: "InscriptionWindow",
                        principalColumn: "IdInscriptionWindow",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Course",
                columns: table => new
                {
                    IdSubject = table.Column<int>(nullable: false),
                    IdUser = table.Column<int>(nullable: false),
                    CourseAverage = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => new { x.IdSubject, x.IdUser });
                    table.ForeignKey(
                        name: "FK_Course_Subject_IdSubject",
                        column: x => x.IdSubject,
                        principalTable: "Subject",
                        principalColumn: "IdSubject",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Course_User_IdUser",
                        column: x => x.IdUser,
                        principalTable: "User",
                        principalColumn: "IdUser",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FinalCall",
                columns: table => new
                {
                    IdFinalCall = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(nullable: false),
                    IdSubject = table.Column<int>(nullable: false),
                    IdInscriptionWindow = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FinalCall", x => x.IdFinalCall);
                    table.ForeignKey(
                        name: "FK_FinalCall_InscriptionWindow_IdInscriptionWindow",
                        column: x => x.IdInscriptionWindow,
                        principalTable: "InscriptionWindow",
                        principalColumn: "IdInscriptionWindow",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FinalCall_Subject_IdSubject",
                        column: x => x.IdSubject,
                        principalTable: "Subject",
                        principalColumn: "IdSubject",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "InscriptionFinal",
                columns: table => new
                {
                    IdUser = table.Column<int>(nullable: false),
                    IdFinal = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InscriptionFinal", x => new { x.IdUser, x.IdFinal });
                    table.ForeignKey(
                        name: "FK_InscriptionFinal_FinalCall_IdFinal",
                        column: x => x.IdFinal,
                        principalTable: "FinalCall",
                        principalColumn: "IdFinalCall",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InscriptionFinal_User_IdUser",
                        column: x => x.IdUser,
                        principalTable: "User",
                        principalColumn: "IdUser",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Course_IdUser",
                table: "Course",
                column: "IdUser");

            migrationBuilder.CreateIndex(
                name: "IX_FinalCall_IdInscriptionWindow",
                table: "FinalCall",
                column: "IdInscriptionWindow");

            migrationBuilder.CreateIndex(
                name: "IX_FinalCall_IdSubject",
                table: "FinalCall",
                column: "IdSubject");

            migrationBuilder.CreateIndex(
                name: "IX_InscriptionFinal_IdFinal",
                table: "InscriptionFinal",
                column: "IdFinal");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_IdInscriptionWindow",
                table: "Subject",
                column: "IdInscriptionWindow");

            migrationBuilder.CreateIndex(
                name: "IX_User_IdAddress",
                table: "User",
                column: "IdAddress",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Course");

            migrationBuilder.DropTable(
                name: "InscriptionFinal");

            migrationBuilder.DropTable(
                name: "FinalCall");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Subject");

            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "InscriptionWindow");
        }
    }
}
