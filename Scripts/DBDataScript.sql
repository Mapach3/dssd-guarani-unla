USE [GuaraniUnla]
GO

DELETE FROM [GuaraniUnla].[dbo].[InscriptionFinal]
DELETE FROM [GuaraniUnla].[dbo].[FinalCall]
DELETE FROM [GuaraniUnla].[dbo].[EvaluationInstance]
DELETE FROM [GuaraniUnla].[dbo].[Subject]
DELETE FROM [GuaraniUnla].[dbo].[InscriptionWindow]
DELETE FROM [GuaraniUnla].[dbo].[Course]
DELETE FROM [GuaraniUnla].[dbo].[Address]
DELETE FROM [GuaraniUnla].[dbo].[User]

SET IDENTITY_INSERT [dbo].[Address] ON 
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (1, N'Calle 1 123', N'Lanus', N'1234', N'Lanus', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (2, N'Calle 2 123', N'Lomas de Zamora', N'1234', N'Lomas de Zamora', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (3, N'Calle 3 123', N'Monte Grande', N'1234', N'Monte Grande', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (4, N'Calle 4 123', N'Adrogue', N'1234', N'Almirante Brown', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (5, N'Calle 5 123', N'Lanus', N'1234', N'Lanus', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (6, N'Calle 6 123', N'Villa Crespo', N'1234', N'CABA', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (7, N'Calle 7 123', N'Avellaneda', N'1234', N'Avellaneda', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (8, N'Calle 8 123', N'Escalada', N'1234', N'Lanus', N'Argentina')
INSERT [dbo].[Address] ([IdAddress], [StreetAndNumber], [Location], [PostalCode], [City], [Country]) VALUES (9, N'Calle 9 123', N'Burzaco', N'1234', N'Almirante Brown', N'Argentina')
SET IDENTITY_INSERT [dbo].[Address] OFF
GO

SET IDENTITY_INSERT [dbo].[User] ON 
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (1, N'jmanuel@unla.com.ar', N'123456', N'Juan', N'Manuel', 1, 1, 0, 1)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (2, N'gnativo@unla.com.ar', N'123456', N'Gian', N'Nativo', 1, 1, 1, 2)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (3, N'lotegui@unla.com.ar', N'123456', N'Luciano', N'Otegui', 1, 1, 1, 3)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (4, N'gcontento@unla.com.ar', N'123456', N'Guido', N'Contento', 1, 1, 1, 4)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (5, N'tpereyra@unla.com.ar', N'123456', N'Tomas', N'Pereyra', 1, 1, 1, 5)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (6, N'hmerlino@unla.com.ar', N'123456', N'Hernan', N'Merlino', 1, 1, 2, 6)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (7, N'avranic@unla.com.ar', N'123456', N'Alejandra', N'Vranic', 1, 1, 2, 7)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (8, N'dazcurra@unla.com.ar', N'123456', N'Diego', N'Azcurra', 1, 1, 2, 8)
INSERT [dbo].[User] ([IdUser], [Email], [Password], [Name], [Surname], [Active], [PasswordChanged], [Role], [IdAddress]) VALUES (9, N'ingresante@unla.com.ar', N'123456', N'El', N'Ingresante', 1, 0, 1, 9)
SET IDENTITY_INSERT [dbo].[User] OFF
GO

SET IDENTITY_INSERT [dbo].[InscriptionWindow] ON 
INSERT [dbo].[InscriptionWindow] ([IdInscriptionWindow], [StartDate], [EndDate]) VALUES (1, CAST(N'2020-07-15T10:00:00.000' AS DateTime), CAST(N'2020-07-19T11:00:00.000' AS DateTime))
INSERT [dbo].[InscriptionWindow] ([IdInscriptionWindow], [StartDate], [EndDate]) VALUES (2, CAST(N'2020-02-15T10:00:00.000' AS DateTime), CAST(N'2020-02-19T11:00:00.000' AS DateTime))
INSERT [dbo].[InscriptionWindow] ([IdInscriptionWindow], [StartDate], [EndDate]) VALUES (3, CAST(N'2021-02-15T10:00:00.000' AS DateTime), CAST(N'2020-02-19T11:00:00.000' AS DateTime))
INSERT [dbo].[InscriptionWindow] ([IdInscriptionWindow], [StartDate], [EndDate]) VALUES (4, CAST(N'2020-07-04T10:00:00.000' AS DateTime), CAST(N'2020-07-08T11:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[InscriptionWindow] OFF
GO

SET IDENTITY_INSERT [dbo].[Subject] ON 
INSERT [dbo].[Subject] ([IdSubject], [StartTime], [EndTime], [Year], [Period], [Shift], [IdInscriptionWindow]) VALUES (1, CAST(N'2020-08-01T00:00:00.000' AS DateTime), CAST(N'2020-12-01T00:00:00.000' AS DateTime), 2020, 2020, 3, 1)
INSERT [dbo].[Subject] ([IdSubject], [StartTime], [EndTime], [Year], [Period], [Shift], [IdInscriptionWindow]) VALUES (2, CAST(N'2020-08-01T00:00:00.000' AS DateTime), CAST(N'2020-12-01T00:00:00.000' AS DateTime), 2020, 2020, 1, 1)
INSERT [dbo].[Subject] ([IdSubject], [StartTime], [EndTime], [Year], [Period], [Shift], [IdInscriptionWindow]) VALUES (3, CAST(N'2020-03-01T00:00:00.000' AS DateTime), CAST(N'2020-07-01T00:00:00.000' AS DateTime), 2020, 2020, 1, 2)
INSERT [dbo].[Subject] ([IdSubject], [StartTime], [EndTime], [Year], [Period], [Shift], [IdInscriptionWindow]) VALUES (4, CAST(N'2021-03-01T00:00:00.000' AS DateTime), CAST(N'2021-07-01T00:00:00.000' AS DateTime), 2021, 2021, 3, 3)
INSERT [dbo].[Subject] ([IdSubject], [StartTime], [EndTime], [Year], [Period], [Shift], [IdInscriptionWindow]) VALUES (5, CAST(N'2021-03-01T00:00:00.000' AS DateTime), CAST(N'2021-07-01T00:00:00.000' AS DateTime), 2021, 2021, 2, 3)
SET IDENTITY_INSERT [dbo].[Subject] OFF
GO

SET IDENTITY_INSERT [dbo].[Course] ON 
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (3, 2, 7)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (3, 3, 8)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (3, 4, 9)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (3, 5, 10)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (3, 6, 0)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (1, 2, 0)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (1, 3, 0)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (1, 4, 0)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (1, 5, 0)
INSERT [dbo].[Course] ([IdSubject], [IdUser], [CourseAverage]) VALUES (1, 7, 0)
SET IDENTITY_INSERT [dbo].[Course] OFF
GO

SET IDENTITY_INSERT [dbo].[EvaluationInstance] ON 
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (1, 7, CAST(N'2020-07-01T00:00:00.000' AS DateTime), 0, 3, 2)
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (2, 8, CAST(N'2020-07-01T00:00:00.000' AS DateTime), 0, 3, 3)
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (3, 9, CAST(N'2020-07-01T00:00:00.000' AS DateTime), 0, 3, 4)
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (4, 10, CAST(N'2020-07-01T00:00:00.000' AS DateTime), 0, 3, 5)
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (5, 7, CAST(N'2020-07-15T00:00:00.000' AS DateTime), 1, 3, 2)
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (6, 8, CAST(N'2020-07-15T00:00:00.000' AS DateTime), 1, 3, 3)
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (7, 9, CAST(N'2020-07-15T00:00:00.000' AS DateTime), 1, 3, 4)
INSERT [dbo].[EvaluationInstance] ([IdEvaluationInstance], [Score], [Date], [Type], [IdSubject], [IdUser]) VALUES (8, 10, CAST(N'2020-07-15T00:00:00.000' AS DateTime), 1, 3, 5)
SET IDENTITY_INSERT [dbo].[EvaluationInstance] OFF
GO

SET IDENTITY_INSERT [dbo].[FinalCall] ON 
INSERT [dbo].[FinalCall] ([IdFinalCall], [Date], [IdSubject], [IdInscriptionWindow]) VALUES (1, CAST(N'2020-07-15T00:00:00.000' AS DateTime), 3, 4)
SET IDENTITY_INSERT [dbo].[FinalCall] OFF
GO

SET IDENTITY_INSERT [dbo].[InscriptionFinal] ON 
INSERT [dbo].[InscriptionFinal] ([IdUser], [IdFinal]) VALUES (2, 1)
INSERT [dbo].[InscriptionFinal] ([IdUser], [IdFinal]) VALUES (3, 1)
INSERT [dbo].[InscriptionFinal] ([IdUser], [IdFinal]) VALUES (4, 1)
INSERT [dbo].[InscriptionFinal] ([IdUser], [IdFinal]) VALUES (5, 1)
INSERT [dbo].[InscriptionFinal] ([IdUser], [IdFinal]) VALUES (6, 1)
SET IDENTITY_INSERT [dbo].[InscriptionFinal] OFF
GO