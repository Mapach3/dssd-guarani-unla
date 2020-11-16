using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DDSDGuarani.Migrations
{
    public partial class initial : Migration
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
                name: "Career",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Career", x => x.Id);
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
                    UserName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Dni = table.Column<string>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    PasswordChanged = table.Column<bool>(nullable: false),
                    ImgBase64 = table.Column<string>(nullable: true),
                    Role = table.Column<int>(nullable: false),
                    AddressId = table.Column<int>(nullable: false),
                    CareerId = table.Column<int>(nullable: false)
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
                    table.ForeignKey(
                        name: "FK_User_Career_CareerId",
                        column: x => x.CareerId,
                        principalTable: "Career",
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
                    WeekDay = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Period = table.Column<int>(nullable: false),
                    Shift = table.Column<int>(nullable: false),
                    InscriptionWindowId = table.Column<int>(nullable: false),
                    CareerId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subject_Career_CareerId",
                        column: x => x.CareerId,
                        principalTable: "Career",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "FinalCall",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(nullable: false),
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
                    FinalId = table.Column<int>(nullable: false),
                    Score = table.Column<int>(nullable: false)
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
                 migrationBuilder.InsertData(
                table: "Career",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Lic en Sistemas"});
            migrationBuilder.InsertData(
                table: "Address",
                columns: new[] { "Id", "City", "Country", "Location", "PostalCode", "StreetAndNumber" },
                values: new object[,]
                {
                    { 1, "1234", "Argentina", "Lanus", "1234", "Calle 123" },
                    { 2, "1223", "Argentina", "Banfield", "1234", "Calle 123" },
                    { 3, "1223", "Argentina", "Lomas", "1234", "Calle 123" },
                    { 4, "1245", "Argentina", "Temperley", "1234", "Calle 123" },
                    { 5, "1222", "Argentina", "Adrogue", "1234", "Calle 123" }
                });

            migrationBuilder.InsertData(
                table: "InscriptionWindow",
                columns: new[] { "Id", "EndDate", "StartDate" },
                values: new object[,]
                {
                    { 1, new DateTime(2020, 9, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 6, 10, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, new DateTime(2020, 9, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 6, 15, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Subject",
                columns: new[] { "Id", "CareerId", "EndTime", "InscriptionWindowId", "Name", "Period", "Shift", "StartTime", "Year" },
                values: new object[,]
                {
                    { 1, 1, new DateTime(2020, 8, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, "Matematica 1", 1, 2, new DateTime(2020, 6, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 2020 },
                    { 2, 1, new DateTime(2020, 8, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, "Matematica 2", 2, 3, new DateTime(2020, 6, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 2020 }
                });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "Active", "AddressId", "CareerId", "Dni", "Email", "ImgBase64", "Name", "Password", "PasswordChanged", "Role", "Surname", "UserName" },
                values: new object[,]
                {
                    { 1, true, 1, 1, "40897248", "pereyratomas18@gmail.com", null, "Tomas", "1234", true, 2, "Pereyra", "tomas" },
                    { 2, true, 2, 1, "11111111", "pereyratomas18@gmail.com", null,  "Gian", "1234", true, 2, "Manuel", "gian" },
                    { 3, true, 3, 1, "22222222", "pereyratomas18@gmail.com", null, "Lucho", "1234", true, 1, "Manuel", "lucho" },
                    { 4, true, 4, 1, "33333333", "pereyratomas18@gmail.com", null, "Juan", "1234", true, 1, "Manuel", "juan" },
                    { 5, true, 5, 1, "44444444", "pereyratomas18@gmail.com", null, "Guido", "1234", true, 1, "Manuel", "guido" }
                });

            migrationBuilder.InsertData(
                table: "Course",
                columns: new[] { "SubjectId", "UserId", "CourseAverage" },
                values: new object[,] 
                { 
                    {1, 1, 0.0 } ,
                    {1, 3, 4.0 } ,
                    {1, 4, 5.0 } ,
                    {1, 5, 8.0 } 

                    
                });
                

            migrationBuilder.InsertData(
                table: "Course",
                columns: new[] { "SubjectId", "UserId", "CourseAverage" },
                values: new object[] { 2, 1, 0.0 });
            migrationBuilder.InsertData(
                table: "FinalCall",
                columns: new[] { "Id", "Date", "SubjectId","InscriptionWindowId" },
                values: new object[] { 2, new DateTime(2020, 9, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 1,1 });
            migrationBuilder.InsertData(
                table: "InscriptionFinal",
                columns: new[] { "UserId", "FinalId", "Score" },
                values: new object[,] 
                { 
                    {3, 2, 6.0 } ,
                    {4, 2, 4.0 } ,
                    {5, 2, 5.0 }                    
                });


            migrationBuilder.CreateIndex(
                name: "IX_Course_UserId",
                table: "Course",
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
                name: "IX_Subject_CareerId",
                table: "Subject",
                column: "CareerId");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_InscriptionWindowId",
                table: "Subject",
                column: "InscriptionWindowId");

            migrationBuilder.CreateIndex(
                name: "IX_User_AddressId",
                table: "User",
                column: "AddressId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_CareerId",
                table: "User",
                column: "CareerId");
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
                name: "Career");

            migrationBuilder.DropTable(
                name: "InscriptionWindow");
        }
    }
}
