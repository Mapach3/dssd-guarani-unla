/*DATA SET PRUEBAS DSSD */

/*Carreras*/
insert into Career values('Licenciatura en Sistemas')
insert into Career values('Licenciatura en Turismo')
insert into Career values('Licenciatura en Nutrición')


/*tabla de codigos*/
/*datos de la tabla*/
insert into SubjectCodes values('PROG1','Programación de Computadoras');
insert into SubjectCodes values('MATE11','Matemática 1');
insert into SubjectCodes values('ORGC1','Organización de Computadoras');
insert into SubjectCodes values('ALGO1','Expresión de Problemas y Algoritmos');
insert into SubjectCodes values('MATE21','Matemática 2');
insert into SubjectCodes values('ARQ1','Arquitectura de Computadoras');
insert into SubjectCodes values('IPC1','Introducción al Pensamiento Científico');
insert into SubjectCodes values('MATE32','Matemática 3');
insert into SubjectCodes values('IBD2','Introducción a Bases de Datos');
insert into SubjectCodes values('ISO12','Ingeniería de Software 1');
insert into SubjectCodes values('ALGO2','Algoritmos y Estructuras de Datos');
insert into SubjectCodes values('OBJ12','Orientación a Objetos 1');
insert into SubjectCodes values('SEMI2','Seminario de Lenguajes');
insert into SubjectCodes values('PROBA2','Probabilidad y Estadística');

/*Ventanas de Inscripción*/
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-15T09:00:00.000' AS DateTime))
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-14T09:00:00.000' AS DateTime))
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-13T09:00:00.000' AS DateTime))
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-12T09:00:00.000' AS DateTime))

/*materias*/
/*PRIMER AÑO PRIMER CUATRIMESTRE*/
/*programacion turno mañana*/
insert into [Subject] values('Programación de Computadoras',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Lunes',1,1,1,'PROG1',1,1)
/*programación turno noche*/
insert into [Subject] values('Programación de Computadoras',CAST(N'2020-12-01T18:00:00.000' AS DateTime),CAST(N'2020-12-01T22:00:00.000' AS DateTime),'Martes',1,1,3,'PROG1',1,1)
/*mate 1 turno mañana*/
insert into [Subject] values('Matemática 1',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Jueves',1,1,1,'MATE11',1,1)
/*mate 1 turno noche*/
insert into [Subject] values('Matemática 1',CAST(N'2020-12-01T18:00:00.000' AS DateTime),CAST(N'2020-12-01T21:00:00.000' AS DateTime),'Jueves',1,1,3,'MATE11',1,1)
/*otras materias de primer año primer cuatrimestre*/
insert into [Subject] values('Organización de Computadoras',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Miercoles',1,1,1,'ORGC1',1,1)
insert into [Subject] values('Expresión de Problemas y Algoritmos',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Viernes',1,1,1,'ALGO1',1,1)

/*PRIMER AÑO SEGUNDO CUATRIMESTRE*/
insert into [Subject] values('Matemática 2',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Lunes',1,2,1,'MATE21',1,1)
insert into [Subject] values('Arquitectura de Computadoras',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Martes',1,2,1,'ARQ1',1,1)
insert into [Subject] values('Introducción al Pensamiento Cientifico',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T11:00:00.000' AS DateTime),'Jueves',1,2,1,'IPC1',1,1)


/*SEGUNDO AÑO PRIMER CUATRIMESTRE*/
/*mate 3 solo turno noche*/
insert into [Subject] values('Matemática 3',CAST(N'2020-12-01T18:00:00.000' AS DateTime),CAST(N'2020-12-01T21:00:00.000' AS DateTime),'Jueves',2,1,3,'MATE32',1,1)
/*intro bd solo turno tarde*/
insert into [Subject] values('Introducción a Bases de Datos',CAST(N'2020-12-01T14:00:00.000' AS DateTime),CAST(N'2020-12-01T17:00:00.000' AS DateTime),'Lunes',2,1,2,'IBD2',1,1)

/*otras materias de segundo año primer cuatrimestre*/
insert into [Subject] values('Ingeniería de Software 1',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Jueves',2,1,1,'IS12',1,1)
insert into [Subject] values('Algoritmos y Estructuras de Datos',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Jueves',2,1,1,'ALGO2',1,1)

/*SEGUNDO AÑO SEGUNDO CUATRIMESTRE*/
insert into [Subject] values('Orientación a Objetos 1',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Viernes',2,2,1,'OBJ12',1,1)
insert into [Subject] values('Seminario de Lenguajes',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Martes',2,2,1,'SEMI2',1,1)
insert into [Subject] values('Probabilidad y Estadística',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Lunes',2,2,1,'PROBA2',1,1)





/*admin*/
insert into [Address] values('29 de Septiembre 789','Banfield','7654','Buenos Aires','Argentina');
insert into [User] values('jmalvarez@gmail.com','jmalvarez','unla2020','Juan Manuel','Alvarez','11111111',1,1,'',0,1,1);

/*********************docentes**********************************************/
/*sin asignacion*/
insert into [Address] values('9 de Julio 123','Adrogué','1852','Buenos Aires','Argentina');
insert into [User] values('jlperez@gmail.com','jlperez','admin123','Juan Luis','Perez','22222222',1,1,'',2,2,1);

/*matematica 1 turno mañana y noche*/
insert into [Address] values('4 de Febrero 4567','Longchamps','1852','Buenos Aires','Argentina');
insert into [User] values('crodriguez@gmail.com','crodriguez','d0c3nt3','Carlos','Rodriguez','33333333',1,1,'',2,3,1);

/*prog, organizacion y IntroDB*/
insert into [Address] values('9 de Julio 123','Adrogué','1852','Buenos Aires','Argentina');
insert into [User] values('eglopez@gmail.com','eglopez','prog&intr','Egardo','Lopez','44444444',1,1,'',2,4,1);

/*otros docentes para asignar a las materias*/
insert into [Address] values('4 de Enero 8987','Adrogué','1852','Buenos Aires','Argentina');
insert into [User] values('abalero@gmail.com','abalero','12345','Alfio','Balero','55555555',1,1,'',2,5,1);

insert into [Address] values('8 de Marzo 7891','Burzaco','2222','Buenos Aires','Argentina');
insert into [User] values('achico@gmail.com','achico','1234567','Andrés','Chico','66666666',1,1,'',2,6,1);

insert into [Address] values('9 de Julio 9876','Gerli','6789','Buenos Aires','Argentina');
insert into [User] values('ecofio@gmail.com','ecofio','1234567','Ernesto','Cofio','77777777',1,1,'',2,7,1);

insert into [Address] values('4 de Abril 123','Adrogué','1256','Buenos Aires','Argentina');
insert into [User] values('pmartinez@gmail.com','pmartinez','1234567','Pedro','Martinez','88888888',1,1,'',2,8,1);


/*alumnos*/
/*no cursó mate 1*/
insert into [Address] values('8 de Mayo 123','Burzaco','1852','Buenos Aires','Argentina');
insert into [User] values('testmate1@gmail.com','testMate1','mate2020','Test','Mate1','99999999',1,1,'',1,9,1);
/*no cursó Programación*/
insert into [Address] values('4 de Enero 213','Burzaco','1852','Buenos Aires','Argentina');
insert into [User] values('testprog1@gmail.com','testProg1','prog2020','Test','Prog1','12345678',1,1,'',1,10,1);
/*cursa introBD y Mate 3*/
insert into [Address] values('8 de Mayo 123','Longchamps','1852','Buenos Aires','Argentina');
insert into [User] values('ibdmat3@gmail.com','ibdmat3','test2\0\0','IbdM','At3','34567890',1,1,'',1,11,1);
/*graduado*/
insert into [Address] values('4 de Junio','Gerli','2234','Buenos Aires','Argentina');
insert into [User] values('grad2020@gmail.com','grad2020','grad@"2020"','Graduado','2020','65456789',1,1,'',1,12,1);

/*4 estudiantes mas que estan en IntroBD y Mate 3(el primero es ibdmat3) */
insert into [Address] values('8 de Abril 140','Gerli','2234','Buenos Aires','Argentina');
insert into [User] values('ibdmat31@gmail.com','ibdmat31','12345','Tomas','Juarez','98765431',1,1,'',1,13,1);

insert into [Address] values('8 de Abril 143','Longchamps','2234','Buenos Aires','Argentina');
insert into [User] values('ibdmat32@gmail.com','ibdmat32','12345','Pedro','Gimenez','76102938',1,1,'',1,14,1);

insert into [Address] values('Avellaneda 1234','Burzaco','2234','Buenos Aires','Argentina');
insert into [User] values('ibdmat33@gmail.com','ibdmat33','12345','Osvaldo','Maresio','12321456',1,1,'',1,15,1);

insert into [Address] values('25 de Mayo 897','Gerli','2234','Buenos Aires','Argentina');
insert into [User] values('ibdmat34@gmail.com','ibdmat34','12345','Juan','Canto','10293851',1,1,'',1,16,1);

/*3 solo inscriptos en introBD*/

insert into [Address] values('4 de Julio 728','Longchamps','2234','Buenos Aires','Argentina');
insert into [User] values('introdb1@gmail.com','introdb1','12345','IntroDB1','Uno','6675432',1,1,'',1,17,1);

insert into [Address] values('25 de Mayo 441','Gerli','2234','Buenos Aires','Argentina');
insert into [User] values('introdb2@gmail.com','introdb2','12345','IntroDB2','Dos','9082621',1,1,'',1,18,1);

insert into [Address] values('25 de Mayo 234','Burzaco','2234','Buenos Aires','Argentina');
insert into [User] values('introdb3@gmail.com','iintrodb3','12345','IntroDB3','Tres','22334455',1,1,'',1,19,1);


/*INSCRIPCIONES DE MATERIAS*/
/*ALUMNOS*/
/*primer año: */
/*uno que no haya cursado mate 1, pero todas las demas aprobadas => testMate1 ID=9*/
insert into course values(1,9,8,0)
insert into course values(5,9,9,0)
insert into course values(6,9,9,0)
insert into course values(7,9,8,0)
insert into course values(8,9,7,0)
insert into course values(9,9,8,0)

/*uno que no haya cursado prog, pero todas las demas aprobadas => testProg1*/
insert into course values(3,10,7,0)
insert into course values(5,10,8,0)
insert into course values(6,10,9,0)
insert into course values(7,10,10,0)
insert into course values(8,10,9,0)
insert into course values(9,10,7,0)

/*SEGUNDO AÑO: */
/*5 alumnos inscriptos tanto en IBD como en mate 3. => uno es ibdmat3*/
insert into course values(11,11,0,0)
insert into course values(11,13,0,0)
insert into course values(11,14,0,0)
insert into course values(11,15,0,0)
insert into course values(11,16,0,0)

insert into course values(10,11,0,0)
insert into course values(10,13,0,0)
insert into course values(10,14,0,0)
insert into course values(10,15,0,0)
insert into course values(10,16,0,0)

/*3 alumnos solo introDB*/
insert into course values(11,17,0,0)
insert into course values(11,18,0,0)
insert into course values(11,19,0,0)


/*graduado cursadas*/
insert into course values(1,12,7,0)
insert into course values(3,12,8,0)
insert into course values(5,12,9,0)
insert into course values(6,12,7,0)
insert into course values(7,12,9,0)
insert into course values(8,12,9,0)
insert into course values(9,12,10,0)
insert into course values(10,12,6,0)
insert into course values(11,12,9,0)
insert into course values(12,12,10,0)
insert into course values(13,12,10,0)
insert into course values(14,12,10,0)
insert into course values(15,12,8,0)
insert into course values(16,12,7,0)

/*TODO: Crear finales e InscriptionFinal para el graduado*/

/*Finales para el graduado*/
insert into FinalCall values(CAST(N'2020-12-11T18:00:00.000' AS DateTime),0,1,2)
insert into FinalCall values(CAST(N'2020-12-13T09:00:00.000' AS DateTime),0,3,2)
insert into FinalCall values(CAST(N'2020-08-09T09:00:00.000' AS DateTime),0,5,2)
insert into FinalCall values(CAST(N'2020-09-11T09:00:00.000' AS DateTime),0,6,2)
insert into FinalCall values(CAST(N'2020-10-21T09:00:00.000' AS DateTime),0,7,2)
insert into FinalCall values(CAST(N'2020-11-14T10:00:00.000' AS DateTime),0,8,2)
insert into FinalCall values(CAST(N'2020-03-15T11:00:00.000' AS DateTime),0,9,2)
insert into FinalCall values(CAST(N'2020-12-16T12:00:00.000' AS DateTime),0,10,2)
insert into FinalCall values(CAST(N'2020-09-17T13:00:00.000' AS DateTime),0,11,2)
insert into FinalCall values(CAST(N'2020-02-18T14:00:00.000' AS DateTime),0,12,2)
insert into FinalCall values(CAST(N'2020-04-19T15:00:00.000' AS DateTime),0,13,2)
insert into FinalCall values(CAST(N'2020-03-21T15:00:00.000' AS DateTime),0,14,2)
insert into FinalCall values(CAST(N'2020-07-22T15:00:00.000' AS DateTime),0,15,2)
insert into FinalCall values(CAST(N'2020-10-23T15:00:00.000' AS DateTime),0,16,2)

/*InscriptionFinals SOLO PARA EL GRADUADO*/
insert into InscriptionFinal values(12,1,8,0)
insert into InscriptionFinal values(12,2,9,0)
insert into InscriptionFinal values(12,3,9,0)
insert into InscriptionFinal values(12,4,10,0)
insert into InscriptionFinal values(12,5,10,0)
insert into InscriptionFinal values(12,6,10,0)
insert into InscriptionFinal values(12,7,7,0)
insert into InscriptionFinal values(12,8,10,0)
insert into InscriptionFinal values(11,9,8,0)
insert into InscriptionFinal values(12,10,8,0)
insert into InscriptionFinal values(12,11,8,0)
insert into InscriptionFinal values(12,12,8,0)
insert into InscriptionFinal values(12,13,9,0)
insert into InscriptionFinal values(12,14,7,0)

/*un mismo docente para matematica turno mañana y noche => cdrodriguez*/
insert into course values(3,3,0,0)
insert into course values(4,3,0,0)

/*uno en programacion, organizacion y IntroBD => */
insert into course values(1,4,0,0)
insert into course values(2,4,0,0)
insert into course values(5,4,0,0)
insert into course values(11,4,0,0)



/*Docentes en otras materias, para llenar espacio y que no quede feo*/

/*ALGORITMOS*/
insert into course values(13,5,0,0)
insert into course values(13,6,0,0)

/*Arquitectura*/
insert into course values(8,8,0,0)
insert into course values(8,6,0,0)

/*Seminario de Lenguajes*/
insert into course values(15,7,0,0)
insert into course values(15,5,0,0)

/*Orientación a Objetos*/
insert into course values(14,8,0,0)
insert into course values(14,6,0,0)

/*Matematica 2*/

insert into course values(7,5,0,0)
insert into course values(7,6,0,0)

/*Pensamiento Científico*/
insert into course values(9,8,0,0)
insert into course values(9,5,0,0)