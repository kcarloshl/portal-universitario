create database portal_universitario;
use portal_universitario;

create table alunos(
	ra varchar(20) primary key,
    senha_hash varchar(255) not null,
    nome varchar(100) not null,
    curso varchar(100) not null,
    periodo int not null,
    email varchar(100),
    situacao varchar(30) not null
    );
    
    describe alunos;
    select * from alunos;