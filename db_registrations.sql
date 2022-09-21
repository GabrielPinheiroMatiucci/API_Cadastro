DROP DATABASE IF EXISTS db_registrations;

CREATE DATABASE IF NOT EXISTS db_registrations;

USE db_registrations;

CREATE TABLE tb_registrations (
cd_registration INT NOT NULL AUTO_INCREMENT,
nm_person VARCHAR(200) NOT NULL,
cd_cpf CHAR(11) NOT NULL UNIQUE,
cd_phone_number VARCHAR(11) NOT NULL,
CONSTRAINT pk_registrations
	PRIMARY KEY(cd_registration)
);
