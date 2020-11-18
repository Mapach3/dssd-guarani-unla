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
                name: "SubjectCodes",
                columns: table => new
                {
                    Code = table.Column<string>(nullable: false),
                    SubjectName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubjectCodes", x => x.Code);
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
                    SubjectCode = table.Column<string>(nullable: true),
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
                    CourseAverage = table.Column<double>(nullable: false),
                    InscriptionReminder = table.Column<bool>(nullable: false)
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
                    Active = table.Column<bool>(nullable: false),
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
                    Score = table.Column<int>(nullable: false),
                    InscriptionReminder = table.Column<bool>(nullable: false)
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
                values: new object[,] {
                     { 1, "Licenciatura en Sistemas"},
                      { 2, "Licenciatura en Turismo"},
                       { 3, "Licenciatura en Nutrición"}
                });
                 migrationBuilder.InsertData(
                table: "SubjectCodes",
                columns: new[] { "Code", "SubjectName" },
                values: new object[,] {
                     {"PROG1","Programación de Computadoras"},
                      {"MATE11","Matemática 1"},
                       {"ORGC1","Organización de Computadoras"},
                        {"ALGO1","Expresión de Problemas y Algoritmos"},
                         {"MATE21","Matemática 2"},
                          {"ARQ1","Arquitectura de Computadoras"},
                           {"IPC1","Introducción al Pensamiento Científico"},
                            {"MATE32","Matemática 3"},
                             {"IBD2","Introducción a Bases de Datos"},
                               {"ISO12","Ingeniería de Software 1"},
                                 {"ALGO2","Algoritmos y Estructuras de Datos"},
                                   {"OBJ12","Orientación a Objetos 1"},
                                     {"SEMI2","Seminario de Lenguajes"},
                                           {"PROBA2","Probabilidad y Estadística"},                                 
                     
                });
                 migrationBuilder.InsertData(
                table: "InscriptionWindow",
                columns: new[] { "Id", "EndDate", "StartDate" },
                values: new object[,]
                {
                    { 1, new DateTime(2020, 9, 01, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 15, 9, 0, 0, 0, DateTimeKind.Unspecified) },
                      { 2, new DateTime(2020, 9, 01, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 14, 9, 0, 0, 0, DateTimeKind.Unspecified) },
                        { 3, new DateTime(2020, 9, 01, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 13, 9, 0, 0, 0, DateTimeKind.Unspecified) },
                          { 4, new DateTime(2020, 9, 01, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 12, 9, 0, 0, 0, DateTimeKind.Unspecified) },
                    
                });
            migrationBuilder.InsertData(
                table: "Subject",
                columns: new[] { "Id", "Name", "StartTime","EndTime","WeekDay","Year","Period","Shift","SubjectCode","InscriptionWindowId","CareerId" },
                values: new object[,]
                {
                    { 1, "Programación de Computadoras",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Lunes", 1, 1, 1,"PROG1",1,1 },
                    { 2, "Programación de Computadoras",new DateTime(2020, 12, 1, 18, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 22, 0, 0, 0, DateTimeKind.Unspecified),"Martes", 1, 1, 3,"PROG1",1,1 },
                    { 3, "Matemática 1",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Jueves", 1, 1, 1,"MATE11",1,1 },
                     { 4, "Matemática 1",new DateTime(2020, 12, 1, 18, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 21, 0, 0, 0, DateTimeKind.Unspecified),"Jueves", 1, 1, 3,"MATE11",1,1 },
                    { 5, "Organización de Computadoras",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Miercoles", 1, 1, 1,"ORGC1",1,1 },
                    { 6, "Expresión de Problemas y Algoritmos",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Viernes", 1, 1, 1,"ALGO1",1,1 },
                    { 7, "Matemática 2",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Lunes", 1, 2, 1,"MATE21",1,1 },
                    { 8, "Arquitectura de Computadoras",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Martes", 1, 2, 1,"ARQ1",1,1 },
                    { 9, "Introducción al Pensamiento Cientifico",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 11, 0, 0, 0, DateTimeKind.Unspecified),"Jueves", 1, 2, 1,"IPC1",1,1 },
                    { 10, "Matemática 3",new DateTime(2020, 12, 1, 18, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 21, 0, 0, 0, DateTimeKind.Unspecified),"Jueves", 2, 1, 3,"MATE32",1,1 },
                    { 11, "Introducción a Bases de Datos",new DateTime(2020, 12, 1, 14, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 17, 0, 0, 0, DateTimeKind.Unspecified),"Lunes", 2, 1, 2,"IBD2",1,1 },
                    { 12, "Ingeniería de Software 1",new DateTime(2020, 12, 1, 8, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Jueves", 2, 1, 1,"IS12",1,1 },
                     { 13, "Algoritmos y Estructuras de Datos",new DateTime(2020, 12, 1, 8, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Jueves", 2, 1, 1,"ALGO2",1,1 },
                     { 14, "Orientación a Objetos 1",new DateTime(2020, 12, 1, 8, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Viernes", 2, 2, 1,"OBJ12",1,1 },
                     { 15, "Seminario de Lenguajes",new DateTime(2020, 12, 1, 9, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Martes", 2, 2, 1,"SEMI2",1,1 },
                    { 16, "Probabilidad y Estadística",new DateTime(2020, 12, 1, 8, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 1, 12, 0, 0, 0, DateTimeKind.Unspecified),"Lunes", 2, 2, 1,"PROBA2",1,1 },

                });

                
            migrationBuilder.InsertData(
                table: "Address",
                columns: new[] { "Id","StreetAndNumber","Location","PostalCode", "City", "Country"},
                values: new object[,]
                {
                    { 1, "29 de Septiembre 789", "Banfield", "7654", "Buenos Aires", "Argentina" },
                    { 2, "9 de Julio 123", "Adrogué", "1852", "1234", "Calle 123" },
                    { 3, "4 de Febrero 4567", "Longchamps", "1852", "Buenos Aires", "Argentina" },
                    { 4, "9 de Julio 123", "Adrogué", "1852", "Buenos Aires", "Argentina" },
                    { 5, "4 de Enero 8987", "Adrogué", "1852", "Buenos Aires", "Argentina" },
                     { 6, "8 de Marzo 7891", "Burzaco", "2222", "Buenos Aires", "Argentina" },
                      { 7, "9 de Julio 9876", "Gerli", "6789", "Buenos Aires", "Argentina" },
                      { 8, "4 de Abril 123", "Adrogué", "1256", "Buenos Aires", "Argentina" },
                       { 9, "8 de Mayo 123", "Burzaco", "1852", "Buenos Aires", "Argentina" },
                       { 10, "4 de Enero 213", "Burzaco", "1852", "Buenos Aires", "Argentina" },
                       { 11, "8 de Mayo 123", "Longchamps", "1852", "Buenos Aires", "Argentina" },
                       { 12, "4 de Junio", "Gerli", "2234", "Buenos Aires", "Argentina" },
                       {13, "8 de Abril 140", "Gerli", "2234", "Buenos Aires", "Argentina" },
                       { 14, "8 de Abril 143", "Longchamps", "2234", "Buenos Aires", "Argentina" },
                       { 15, "Avellaneda 1234", "Burzaco", "2234", "Buenos Aires", "Argentina" },
                       { 16, "25 de Mayo 897", "Gerli", "2234", "Buenos Aires", "Argentina" },
                       { 17, "4 de Julio 728", "Longchamps", "2234", "Buenos Aires", "Argentina" },
                       { 18, "25 de Mayo 441", "Gerli", "2234", "Buenos Aires", "Argentina" },
                       { 19, "25 de Mayo 234", "Burzaco", "2234", "Buenos Aires", "Argentina" }

                });

           

            
            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "Email", "UserName", "Password", "Name", "Surname", "Dni", "Active", "PasswordChanged", "ImgBase64", "Role", "AddressId", "CareerId" },
                values: new object[,]
                {
                    { 1, "jmalvarez@gmail.com", "jmalvarez", "unla2020", "Juan Manuel", "Alvarez", "11111111", true, true, "", 2,1,1},
                    { 2, "jlperez@gmail.com", "jlperez", "admin123", "Juan Luis", "Perez", "22222222", true, true, "", 2,2,1},
               { 3, "crodriguez@gmail.com", "crodriguez", "d0c3nt3", "Carlos", "Rodriguez", "33333333", true, true, "", 2,3,1},
               { 4, "eglopez@gmail.com", "eglopez", "prog&intr", "Egardo", "Lopez", "44444444", true, true, "", 2,4,1},
               { 5, "abalero@gmail.com", "abalero", "12345", "Alfio", "Balero", "55555555", true, true, "", 2,5,1},
               { 6, "achico@gmail.com", "achico", "1234567", "Andrés", "Chico", "66666666", true, true, "", 2,6,1},
               { 7, "ecofio@gmail.com", "ecofio", "1234567", "Ernesto", "Cofio", "77777777", true, true, "", 2,7,1},
               { 8, "pmartinez@gmail.com", "pmartinez", "1234567", "Pedro", "Martinez", "88888888", true, true, "", 2,8,1},
               { 9, "testmate1@gmail.com", "testMate1", "mate2020", "Test", "Mate1", "99999999", true, true, "", 1,9,1},
               { 10, "testprog1@gmail.com", "testProg1", "prog2020", "Test", "Prog1", "12345678", true, true, "", 1,10,1},
               { 11, "ibdmat3@gmail.com", "ibdmat3", "test2\0\0", "IbdM", "At3", "34567890", true, true, "", 1,11,1},
               { 12, "grad2020@gmail.com", "grad2020","grad@"+"2020"+"", "Juan Luis", "Perez", "22222222", true, true, "", 1,12,1},
               { 13, "ibdmat31@gmail.com", "ibdmat31","12345", "Tomas", "Juarez", "98765431", true, true, "", 1,13,1},
               { 14, "ibdmat32@gmail.com", "ibdmat32","12345", "Pedro", "Gimenez", "76102938", true, true, "", 1,14,1},
               { 15, "ibdmat33@gmail.com", "ibdmat33","12345", "Osvaldo", "Maresio", "12321456", true, true, "", 1,15,1},
               { 16, "ibdmat34@gmail.com", "ibdmat34","12345", "Juan", "Canto", "10293851", true, true, "", 1,16,1},
               { 17, "introdb1@gmail.com", "introdb1","12345", "IntroDB1", "Uno", "6675432", true, true, "", 1,17,1},
                 { 18, "introdb2@gmail.com", "introdb2","12345", "IntroDB2", "Dos", "9082621", true, true, "", 1,18,1},
                { 19, "introdb3@gmail.com", "iintrodb3","12345", "IntroDB3", "Tres", "22334455", true, true, "", 1,19,1}

                });

            migrationBuilder.InsertData(
                table: "Course",
                columns: new[] { "SubjectId", "UserId", "CourseAverage", "InscriptionReminder"},
                values: new object[,] 
                { 
                    {1,9,8,false } ,
                    {5,9,9,false} ,
                    {6,9,9,false } ,
                    {7,9,8,false} ,
                    {8,9,7,false},
                    {9,9,8,false},
                    {3,10,7,false},
                    {5,10,8,false},
                    {6,10,9,false},
                    {7,10,10,false},
                    {8,10,9,false},
                    {9,10,7,false},
                    {11,11,0,false},
                    {11,13,0,false},
                    {11,14,0,false},
                    {11,15,0,false},
                    {11,16,0,false},
                     {10,11,0,false},
                    {10,13,0,false},
                     {10,14,0,false},
                     {10,15,0,false},
                    {10,16,0,false},
                    {11,17,0,false},
                    {11,18,0,false},
                    {11,19,0,false},
                    {1,12,7,false},
                    {3,12,8,false},
                    {5,12,9,false},
                    {6,12,7,false},
                    {7,12,9,false},
                    {8,12,9,false},
                    {9,12,10,false},
                    {10,12,6,false},
                    {11,12,9,false},
                    {12,12,10,false},
                    {13,12,10,false},
                    {14,12,10,false},
                    {15,12,8,false},
                     {16,12,7,false},
                     {3,3,0,false},
                     {4,3,0,false},
                     {1,4,0,false},
                     {2,4,0,false},
                     {5,4,0,false},
                     {11,4,0,false},
                     {13,5,0,false},
                     {13,6,0,false},
                     {8,8,0,false},
                     {8,6,0,false},
                     {15,7,0,false},
                     {15,5,0,false},
                     {14,8,0,false},
                     
                     {14,6,0,false},
                     
                     {7,5,0,false},
                       {7,6,0,false},
                     
                     {9,8,0,false},
                     
                     {9,5,0,false},
                     
                     
                     
                     
                     });
                

          
            migrationBuilder.InsertData(
                table: "FinalCall",
                columns: new[] { "Id", "Date","Active", "SubjectId","InscriptionWindowId" },
                values: new object[,]{
                    { 1, new DateTime(2020, 12, 11, 18, 0, 0, 0, DateTimeKind.Unspecified),false,1,2 },
                    { 2, new DateTime(2020, 12, 13, 9, 0, 0, 0, DateTimeKind.Unspecified),false,3,2 },
                    { 3, new DateTime(2020, 8, 9, 9, 0, 0, 0, DateTimeKind.Unspecified),false,5,2 },
                    { 4, new DateTime(2020, 9, 11, 9, 0, 0, 0, DateTimeKind.Unspecified),false,6,2 },
                    { 5, new DateTime(2020, 10, 21, 9, 0, 0, 0, DateTimeKind.Unspecified),false,7,2 },
                    { 6, new DateTime(2020, 11, 14, 10, 0, 0, 0, DateTimeKind.Unspecified),false,8,2 },
                    { 7, new DateTime(2020, 3, 15, 11, 0, 0, 0, DateTimeKind.Unspecified),false,9,2 },
                    { 8, new DateTime(2020, 12, 16, 12, 0, 0, 0, DateTimeKind.Unspecified),false,10,2 },
                    { 9, new DateTime(2020, 9, 17, 13, 0, 0, 0, DateTimeKind.Unspecified),false,11,2 },
                    { 10, new DateTime(2020, 2, 18, 14, 0, 0, 0, DateTimeKind.Unspecified),false,12,2 },
                    { 11, new DateTime(2020, 4, 19, 15, 0, 0, 0, DateTimeKind.Unspecified),false,13,2 },
                    { 12, new DateTime(2020, 3, 21, 15, 0, 0, 0, DateTimeKind.Unspecified),false,14,2 },
                    { 13, new DateTime(2020, 7, 22, 15, 0, 0, 0, DateTimeKind.Unspecified),false,15,2 },
                    { 14, new DateTime(2020, 10, 23, 15, 0, 0, 0, DateTimeKind.Unspecified),false,16,2 },
                    
                    
                });
             
            
            
            migrationBuilder.InsertData(
                table: "InscriptionFinal",
                columns: new[] { "UserId", "FinalId", "Score", "InscriptionReminder"},
                values: new object[,] 
                { 
                    {12,1,8,false} ,
                     {12,2,9 ,false} ,
                      {12,3,9 ,false} ,
                       {12,4,10,false} ,
                        {12,5,10,false} ,
                         {12,6,10 ,false} ,
                          {12,7,7 ,false} ,
                           {12,8,10,false} ,
                            {11,9,8 ,false} ,
                             {12,10,8 ,false} ,
                              {12,11,8 ,false} ,
                               {12,12,8 ,false} ,
                                {12,13,9 ,false} ,
                                 {12,14,7 ,false}
                                       
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
                name: "SubjectCodes");

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
