/*DATA SET PRUEBAS DSSD */

/*Carreras*/
insert into Career values('Licenciatura en Sistemas')
insert into Career values('Licenciatura en Turismo')
insert into Career values('Licenciatura en Nutrici�n')

/*Ventanas de Inscripci�n*/
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-15T09:00:00.000' AS DateTime))
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-14T09:00:00.000' AS DateTime))
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-13T09:00:00.000' AS DateTime))
insert into InscriptionWindow values(CAST(N'2020-09-01T01:00:00.000' AS DateTime),CAST(N'2020-12-12T09:00:00.000' AS DateTime))

/*materias*/
/*PRIMER A�O PRIMER CUATRIMESTRE*/
/*programacion turno ma�ana*/
insert into [Subject] values('Programaci�n de Computadoras',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Lunes',1,1,1,1,1)
/*programaci�n turno noche*/
insert into [Subject] values('Programaci�n de Computadoras',CAST(N'2020-12-01T18:00:00.000' AS DateTime),CAST(N'2020-12-01T22:00:00.000' AS DateTime),'Martes',1,1,3,1,1)
/*mate 1 turno ma�ana*/
insert into [Subject] values('Matem�tica 1',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Jueves',1,1,1,1,1)
/*mate 1 turno noche*/
insert into [Subject] values('Matem�tica 1',CAST(N'2020-12-01T18:00:00.000' AS DateTime),CAST(N'2020-12-01T21:00:00.000' AS DateTime),'Jueves',1,1,3,1,1)
/*otras materias de primer a�o primer cuatrimestre*/
insert into [Subject] values('Organizacion de Computadoras',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Miercoles',1,1,1,1,1)
insert into [Subject] values('Expresi�n de Problemas y Algoritmos',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Viernes',1,1,1,1,1)

/*PRIMER A�O SEGUNDO CUATRIMESTRE*/
insert into [Subject] values('Matem�tica 2',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Lunes',1,2,1,1,1)
insert into [Subject] values('Arquitectura de Computadoras',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Martes',1,2,1,1,1)
insert into [Subject] values('Introducci�n a Pensamiento Cientifico',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T11:00:00.000' AS DateTime),'Jueves',1,2,1,1,1)


/*SEGUNDO A�O PRIMER CUATRIMESTRE*/
/*mate 3 solo turno noche*/
insert into [Subject] values('Matem�tica 3',CAST(N'2020-12-01T18:00:00.000' AS DateTime),CAST(N'2020-12-01T21:00:00.000' AS DateTime),'Jueves',2,1,3,1,1)
/*intro bd solo turno tarde*/
insert into [Subject] values('Introduccion a Bases de Datos',CAST(N'2020-12-01T14:00:00.000' AS DateTime),CAST(N'2020-12-01T17:00:00.000' AS DateTime),'Lunes',2,1,2,1,1)

/*otras materias de segundo a�o primer cuatrimestre*/
insert into [Subject] values('Ingenier�a de Software 1',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Jueves',2,1,1,1,1)
insert into [Subject] values('Algoritmo y Estructura de Datos',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Jueves',2,1,1,1,1)

/*SEGUNDO A�O SEGUNDO CUATRIMESTRE*/
insert into [Subject] values('Orientaci�n a Objetos 1',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Viernes',2,2,1,1,1)
insert into [Subject] values('Seminario de Lenguajes',CAST(N'2020-12-01T09:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Martes',2,2,1,1,1)
insert into [Subject] values('Probabilidad y Estad�stica',CAST(N'2020-12-01T08:00:00.000' AS DateTime),CAST(N'2020-12-01T12:00:00.000' AS DateTime),'Lunes',2,2,1,1,1)







/*admin*/
insert into [Address] values('29 de Septiembre 789','Banfield','7654','Buenos Aires','Argentina');
insert into [User] values('jmalvarez@gmail.com','jmalvarez','unla2020','Juan Manuel','Alvarez','11111111',1,1,'',0,1,1);

/*********************docentes**********************************************/
/*sin asignacion*/
insert into [Address] values('9 de Julio 123','Adrogu�','1852','Buenos Aires','Argentina');
insert into [User] values('jlperez@gmail.com','jlperez','admin123','Juan Luis','Perez','22222222',1,1,'',2,2,1);

/*matematica 1 turno ma�ana y noche*/
insert into [Address] values('4 de Febrero 4567','Longchamps','1852','Buenos Aires','Argentina');
insert into [User] values('crodriguez@gmail.com','crodriguez','d0c3nt3','Carlos','Rodriguez','33333333',1,1,'',2,3,1);

/*prog, organizacion y IntroDB*/
insert into [Address] values('9 de Julio 123','Adrogu�','1852','Buenos Aires','Argentina');
insert into [User] values('eglopez@gmail.com','eglopez','prog&intr','Egardo','Lopez','44444444',1,1,'',2,4,1);

/*otros docentes para asignar a las materias*/
insert into [Address] values('4 de Enero 8987','Adrogu�','1852','Buenos Aires','Argentina');
insert into [User] values('abalero@gmail.com','abalero','12345','Alfio','Balero','55555555',1,1,'',2,5,1);

insert into [Address] values('8 de Marzo 7891','Burzaco','2222','Buenos Aires','Argentina');
insert into [User] values('achico@gmail.com','achico','1234567','Andr�s','Chico','66666666',1,1,'',2,6,1);

insert into [Address] values('9 de Julio 9876','Gerli','6789','Buenos Aires','Argentina');
insert into [User] values('ecofio@gmail.com','ecofio','1234567','Ernesto','Cofio','77777777',1,1,'',2,7,1);

insert into [Address] values('4 de Abril 123','Adrogu�','1256','Buenos Aires','Argentina');
insert into [User] values('pmartinez@gmail.com','pmartinez','1234567','Pedro','Martinez','88888888',1,1,'',2,8,1);


/*alumnos*/
/*no curs� mate 1*/
insert into [Address] values('8 de Mayo 123','Burzaco','1852','Buenos Aires','Argentina');
insert into [User] values('testmate1@gmail.com','testMate1','mate2020','Test','Mate1','99999999',1,1,'',1,9,1);
/*no curs� Programaci�n*/
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
/*primer a�o: */
/*uno que no haya cursado mate 1, pero todas las demas aprobadas => testMate1 ID=9*/
insert into course values(1,9,8)
insert into course values(5,9,9)
insert into course values(6,9,9)
insert into course values(7,9,8)
insert into course values(8,9,7)
insert into course values(9,9,8)

/*uno que no haya cursado prog, pero todas las demas aprobadas => testProg1*/
insert into course values(3,10,7)
insert into course values(5,10,8)
insert into course values(6,10,9)
insert into course values(7,10,10)
insert into course values(8,10,9)
insert into course values(9,10,7)

/*SEGUNDO A�O: */
/*5 alumnos inscriptos tanto en IBD como en mate 3. => uno es ibdmat3*/
insert into course values(11,11,0)
insert into course values(11,13,0)
insert into course values(11,14,0)
insert into course values(11,15,0)
insert into course values(11,16,0)

insert into course values(10,11,0)
insert into course values(10,13,0)
insert into course values(10,14,0)
insert into course values(10,15,0)
insert into course values(10,16,0)

/*3 alumnos solo introDB*/
insert into course values(11,17,0)
insert into course values(11,18,0)
insert into course values(11,19,0)


/*graduado*/
insert into course values(1,12,7)
insert into course values(3,12,8)
insert into course values(5,12,9)
insert into course values(6,12,7)
insert into course values(7,12,9)
insert into course values(8,12,9)
insert into course values(9,12,10)
insert into course values(10,12,6)
insert into course values(11,12,9)
insert into course values(12,12,10)
insert into course values(13,12,10)
insert into course values(14,12,10)
insert into course values(15,12,8)
insert into course values(16,12,7)

/*un mismo docente para matematica turno ma�ana y noche => cdrodriguez*/
insert into course values(3,3,0);
insert into course values(4,3,0);

/*uno en programacion, organizacion y IntroBD => */
insert into course values(1,4,0);
insert into course values(2,4,0);
insert into course values(5,4,0);
insert into course values(11,4,0);



/*Docentes en otras materias, para llenar espacio y que no quede feo*/

/*ALGORITMOS*/
insert into course values(13,5,0);
insert into course values(13,6,0);

/*Arquitectura*/
insert into course values(8,8,0);
insert into course values(8,6,0);

/*Seminario de Lenguajes*/
insert into course values(15,7,0);
insert into course values(15,5,0);

/*Orientaci�n a Objetos*/
insert into course values(14,8,0);
insert into course values(14,6,0);

/*Matematica 2*/

insert into course values(7,5,0);
insert into course values(7,6,0);

/*Pensamiento Cient�fico*/
insert into course values(9,8,0);
insert into course values(9,5,0);
