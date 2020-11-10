USE [GuaraniUnla]
GO

DELETE FROM [GuaraniUnla].[dbo].[FinalCall]
DELETE FROM [GuaraniUnla].[dbo].[InscriptionFinal]
DELETE FROM [GuaraniUnla].[dbo].[InscriptionWindow]
DELETE FROM [GuaraniUnla].[dbo].[Subject]
DELETE FROM [GuaraniUnla].[dbo].[Course]
DELETE FROM [GuaraniUnla].[dbo].[Address]
DELETE FROM [GuaraniUnla].[dbo].[User]
DELETE FROM [GuaraniUnla].[dbo].[Career]


SET IDENTITY_INSERT [dbo].[Career] ON 
INSERT [dbo].[Career] ([Id], [Name]) VALUES (1, N'Licenciatura en Sistemas')
SET IDENTITY_INSERT [dbo].[Career] OFF
GO

SET IDENTITY_INSERT [dbo].[Address] ON 
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (1, N'Calle 1 123', N'Lanus', N'1234', N'Lanus', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (2, N'Calle 2 123', N'Lomas de Zamora', N'1234', N'Lomas de Zamora', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (3, N'Calle 3 123', N'Monte Grande', N'1234', N'Monte Grande', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (4, N'Calle 4 123', N'Adrogue', N'1234', N'Almirante Brown', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (5, N'Calle 5 123', N'Lanus', N'1234', N'Lanus', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (6, N'Calle 6 123', N'Villa Crespo', N'1234', N'CABA', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (7, N'Calle 7 123', N'Avellaneda', N'1234', N'Avellaneda', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (8, N'Calle 8 123', N'Escalada', N'1234', N'Lanus', N'Argentina')
INSERT [dbo].[Address] ([Id], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (9, N'Calle 9 123', N'Burzaco', N'1234', N'Almirante Brown', N'Argentina')
SET IDENTITY_INSERT [dbo].[Address] OFF
GO

SET IDENTITY_INSERT [dbo].[User] ON 
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (1, N'jmanuel@unla.com.ar', N'jmanuel', N'123456', N'Juan', N'Manuel', N'11111111', 1, 1, null, 0, 1, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (2, N'gnativo@unla.com.ar', N'gnativo', N'123456', N'Gian', N'Nativo', N'44444444', 1, 1, null, 1, 2, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (3, N'lotegui@unla.com.ar', N'lotegui', N'123456', N'Luciano', N'Otegui', N'55555555', 1, 1, null, 1, 3, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (4, N'gcontento@unla.com.ar', N'gcontento', N'123456', N'Guido', N'Contento', N'66666666', 1, 1, null, 1, 4, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (5, N'tpereyra@unla.com.ar', N'tpereyra', N'123456', N'Tomas', N'Pereyra', N'77777777', 1, 1, null, 1, 5, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (6, N'hmerlino@unla.com.ar', N'hmerlino', N'123456', N'Hernan', N'Merlino', N'33333333', 1, 1, null, 2, 6, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (7, N'avranic@unla.com.ar', N'avranic', N'123456', N'Alejandra', N'Vranic', N'22222222', 1, 1, null, 2, 7, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (8, N'dazcurra@unla.com.ar', N'dazcurra', N'123456', N'Diego', N'Azcurra', N'88888888', 1, 1, null, 2, 8, 1)
INSERT [dbo].[User] ([Id], [Email], [UserName], [Password], [Name], [Surname], [Dni], [Active], [PasswordChanged], [ImgBase64], [Role], [AddressId], [CareerId]) VALUES (9, N'ingresante@unla.com.ar', N'eingresante', N'123456', N'El', N'Ingresante', N'99999999', 1, 0, null, 1, 9, 1)
SET IDENTITY_INSERT [dbo].[User] OFF
GO

SET IDENTITY_INSERT [dbo].[InscriptionWindow] ON 
INSERT [dbo].[InscriptionWindow] ([Id], [StartDate], [EndDate]) VALUES (1, CAST(N'2020-07-15T10:00:00.000' AS DateTime), CAST(N'2020-07-19T11:00:00.000' AS DateTime))
INSERT [dbo].[InscriptionWindow] ([Id], [StartDate], [EndDate]) VALUES (2, CAST(N'2020-02-15T10:00:00.000' AS DateTime), CAST(N'2020-02-19T11:00:00.000' AS DateTime))
INSERT [dbo].[InscriptionWindow] ([Id], [StartDate], [EndDate]) VALUES (3, CAST(N'2021-02-15T10:00:00.000' AS DateTime), CAST(N'2021-02-19T11:00:00.000' AS DateTime))
INSERT [dbo].[InscriptionWindow] ([Id], [StartDate], [EndDate]) VALUES (4, CAST(N'2020-07-04T10:00:00.000' AS DateTime), CAST(N'2020-07-08T11:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[InscriptionWindow] OFF
GO

SET IDENTITY_INSERT [dbo].[Subject] ON 
INSERT [dbo].[Subject] ([Id], [Name], [StartTime], [EndTime],[WeekDay], [Year], [Period], [Shift], [InscriptionWindowId], [CareerId]) VALUES (1, N'Objetos 2', CAST(N'2020-08-01T00:00:00.000' AS DateTime), CAST(N'2020-12-01T00:00:00.000' AS DateTime),'Lunes', 2020, 2020, 3, 1, 1)
INSERT [dbo].[Subject] ([Id], [Name], [StartTime], [EndTime],[WeekDay], [Year], [Period], [Shift], [InscriptionWindowId], [CareerId]) VALUES (2, N'DSSD', CAST(N'2020-08-01T00:00:00.000' AS DateTime), CAST(N'2020-12-01T00:00:00.000' AS DateTime), 'Martes', 2020, 2020, 1, 1, 1)
INSERT [dbo].[Subject] ([Id], [Name], [StartTime], [EndTime],[WeekDay], [Year], [Period], [Shift], [InscriptionWindowId], [CareerId]) VALUES (3, N'Programacion Concurrente', CAST(N'2020-03-01T00:00:00.000' AS DateTime), CAST(N'2020-07-01T00:00:00.000' AS DateTime),'Miércoles', 2020, 2020, 1, 2, 1)
INSERT [dbo].[Subject] ([Id], [Name], [StartTime], [EndTime],[WeekDay], [Year], [Period], [Shift], [InscriptionWindowId], [CareerId]) VALUES (4, N'AYED', CAST(N'2021-03-01T00:00:00.000' AS DateTime), CAST(N'2021-07-01T00:00:00.000' AS DateTime),'Jueves', 2021, 2021, 3, 3, 1)
INSERT [dbo].[Subject] ([Id], [Name], [StartTime], [EndTime],[WeekDay], [Year], [Period], [Shift], [InscriptionWindowId], [CareerId]) VALUES (5, N'Matematica Discreta', CAST(N'2021-03-01T00:00:00.000' AS DateTime), CAST(N'2021-07-01T00:00:00.000' AS DateTime),'Sábado', 2021, 2021, 2, 3, 1)
SET IDENTITY_INSERT [dbo].[Subject] OFF
GO


INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (3, 2, 7)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (3, 3, 8)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (3, 4, 9)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (3, 5, 10)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (3, 6, 0)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (1, 2, 0)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (1, 3, 0)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (1, 4, 0)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (1, 5, 0)
INSERT [dbo].[Course] ([SubjectId], [UserId], [CourseAverage]) VALUES (1, 7, 0)
GO


SET IDENTITY_INSERT [dbo].[FinalCall] ON 
INSERT [dbo].[FinalCall] ([Id], [Date], [SubjectId], [InscriptionWindowId]) VALUES (1, CAST(N'2020-07-15T00:00:00.000' AS DateTime), 3, 4)
SET IDENTITY_INSERT [dbo].[FinalCall] OFF
GO


INSERT [dbo].[InscriptionFinal] ([UserId], [FinalId], [Score]) VALUES (2, 1, 0)
INSERT [dbo].[InscriptionFinal] ([UserId], [FinalId], [Score]) VALUES (3, 1, 0)
INSERT [dbo].[InscriptionFinal] ([UserId], [FinalId], [Score]) VALUES (4, 1, 0)
INSERT [dbo].[InscriptionFinal] ([UserId], [FinalId], [Score]) VALUES (5, 1, 10)
INSERT [dbo].[InscriptionFinal] ([UserId], [FinalId], [Score]) VALUES (6, 1, 8)
GO