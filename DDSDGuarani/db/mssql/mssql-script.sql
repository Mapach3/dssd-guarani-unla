USE [master]
GO

IF DB_ID('guarani') IS NOT NULL
  set noexec on  

CREATE DATABASE [guarani];
GO

USE [guarani]
GO