IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Customerts] (
    [CustomerId] int NOT NULL IDENTITY,
    [FirstName] nvarchar(max) NULL,
    [LastName] nvarchar(max) NULL,
    [BusinessName] nvarchar(max) NULL,
    [DateOfBirth] datetime2 NOT NULL,
    [CreatedDate] datetime2 NOT NULL,
    CONSTRAINT [PK_Customerts] PRIMARY KEY ([CustomerId])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20210806063430_safe365BackEnd.Models.CustomerContext', N'5.0.8');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'CustomerId', N'BusinessName', N'CreatedDate', N'DateOfBirth', N'FirstName', N'LastName') AND [object_id] = OBJECT_ID(N'[Customerts]'))
    SET IDENTITY_INSERT [Customerts] ON;
INSERT INTO [Customerts] ([CustomerId], [BusinessName], [CreatedDate], [DateOfBirth], [FirstName], [LastName])
VALUES (1, N'Shopping', '2021-08-06T12:14:33.8365608+05:30', '1990-04-25T00:00:00.0000000', N'Meet', N'Soni');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'CustomerId', N'BusinessName', N'CreatedDate', N'DateOfBirth', N'FirstName', N'LastName') AND [object_id] = OBJECT_ID(N'[Customerts]'))
    SET IDENTITY_INSERT [Customerts] OFF;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20210806064434_safe365BackEnd.Models.CustomerContextSeed', N'5.0.8');
GO

COMMIT;
GO

