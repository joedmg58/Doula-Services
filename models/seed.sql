USE mydoulaclients_db;

INSERT INTO contacts ( clientName, clientLastName, clientEmail, clientDueDate, clientMessage, 
                       clientContactOption, clientHasAppointment, clientWeeks )
VALUES
("Nombre","Apellido","1234567890","mail@domain.com","2019-03-09 05:00:00","Test message","Phone",0,36),
("Jane","Doe","9541234560","janedoe@yahoo.uk","2018-09-28 00:00:00","I would like to add ...","SMS",0,36);



2
3
CREATE TABLE Admins(
    Admin_id INT AUTO_INCREMENT,
    PRIMARY KEY (Admin_id),
    Admin_name VARCHAR(30) NOT NULL,
    Admin_pwd TEXT(30) NOT NULL
)
