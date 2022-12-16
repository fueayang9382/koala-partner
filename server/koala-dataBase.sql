// save our query 
//create a table

CREATE TABLE "koala" (
	"id" SERIAL PRIMARY KEY,
    "age" integer,
	"name" VARCHAR (250) NOT NULL,
	"gender" VARCHAR (1) NOT NULL,
	"rtt" varchar(1),
  "notes" varchar (500)
);


INSERT INTO "koala" 
	("age", "name", "gender", "rtt","notes") 
VALUES 
	('4', 'Scotty','M','Y','Born in Guatemala'),
	('5','Jean','F','Y','Allergic to lots of lava' ),
	('7','Ororo','F','N','Loves listening to Paula (Abdul)' ),
	('15','Logan','M','N','Loves the sauna'),
	('9','Charlie','M','Y','Favorite band is Nirvana' ),
	('4','Betsy','F','Y','Has a pet iguana' );
	

select * from "koala";

    INSERT INTO "koala"
    ("age", "name", "gender", "rtt","notes") 
    VALUES ($1,$2,$3,$4,$5);   `
