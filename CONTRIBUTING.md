# Contribute to Rotaract-Nitk

Welcome to Rotaract Nitk, we appreciate you, for being here 🥳. <br/>
We believe your contribution can make a change, however small it may be !

## Table of contents

- [Development Guide](#development-guide)
    - [Working with Migrations and Models](#working-with-migrations-and-models)

## Development Guide

### Working with Migrations and Models

#### Important Points to keep in mind

- All changes to the database must be made through Migrations, so for even minute modifications, create suitable Migrations.
- No deletion or modification of Migrations must be made, once they are merged into the main branch.
- Use sequelize-constraints only in Migrations and not in Models.
- Using Sequelize creates a table ```SequelizeMeta``` in your database, you must not mess with it.

#### Creating Migrations and Models

We'll use sequelize-cli to generate Migration and Model files, then we can modify them as per need.

- To create a new Table:

```
npx sequelize-cli model:generate --name modelName --attributes columnName1:dataType1,columnName2:dataType2,columnName3:dataType3 . . .
```
> This creates corresponding Migration file too.


- To modify existing tables:

```
npx sequelize-cli migration:generate migrationName
```
> This creates a template for migration, which can be used to define logic as per requirement.
