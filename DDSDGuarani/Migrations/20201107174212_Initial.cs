using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DDSDGuarani.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StreetAndNumber = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    PostalCode = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InscriptionWindow",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InscriptionWindow", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Dni = table.Column<string>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    PasswordChanged = table.Column<bool>(nullable: false),
                    ImgBase64 = table.Column<string>(nullable: true),
                    Role = table.Column<int>(nullable: false),
                    AddressId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                    table.ForeignKey(
                        name: "FK_User_Address_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Address",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Subject",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    StartTime = table.Column<DateTime>(nullable: false),
                    EndTime = table.Column<DateTime>(nullable: false),
                    ScoreUploadLimit = table.Column<DateTime>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    Period = table.Column<int>(nullable: false),
                    Shift = table.Column<int>(nullable: false),
                    InscriptionWindowId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subject_InscriptionWindow_InscriptionWindowId",
                        column: x => x.InscriptionWindowId,
                        principalTable: "InscriptionWindow",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Course",
                columns: table => new
                {
                    SubjectId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    CourseAverage = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => new { x.SubjectId, x.UserId });
                    table.ForeignKey(
                        name: "FK_Course_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Course_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EvaluationInstance",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Score = table.Column<double>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    SubjectId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EvaluationInstance", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EvaluationInstance_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EvaluationInstance_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FinalCall",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(nullable: false),
                    ScoreUploadLimit = table.Column<DateTime>(nullable: false),
                    SubjectId = table.Column<int>(nullable: false),
                    InscriptionWindowId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FinalCall", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FinalCall_InscriptionWindow_InscriptionWindowId",
                        column: x => x.InscriptionWindowId,
                        principalTable: "InscriptionWindow",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FinalCall_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "InscriptionFinal",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    FinalId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InscriptionFinal", x => new { x.UserId, x.FinalId });
                    table.ForeignKey(
                        name: "FK_InscriptionFinal_FinalCall_FinalId",
                        column: x => x.FinalId,
                        principalTable: "FinalCall",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InscriptionFinal_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Course_UserId",
                table: "Course",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_EvaluationInstance_SubjectId",
                table: "EvaluationInstance",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_EvaluationInstance_UserId",
                table: "EvaluationInstance",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FinalCall_InscriptionWindowId",
                table: "FinalCall",
                column: "InscriptionWindowId");

            migrationBuilder.CreateIndex(
                name: "IX_FinalCall_SubjectId",
                table: "FinalCall",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_InscriptionFinal_FinalId",
                table: "InscriptionFinal",
                column: "FinalId");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_InscriptionWindowId",
                table: "Subject",
                column: "InscriptionWindowId");

            migrationBuilder.CreateIndex(
                name: "IX_User_AddressId",
                table: "User",
                column: "AddressId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Course");

            migrationBuilder.DropTable(
                name: "EvaluationInstance");

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
