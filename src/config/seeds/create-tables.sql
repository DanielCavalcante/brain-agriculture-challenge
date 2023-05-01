CREATE TABLE states (
    id       serial4 NOT NULL,
    uf_code INT          NOT NULL,
    name     VARCHAR (50) NOT NULL,
    uf       CHAR 	 (2)  NOT NULL,
    region   INT	      NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE cities (
  id       serial4 NOT NULL,
  code INT		  NOT NULL,
  name VARCHAR(255) NOT NULL,
  uf	 CHAR(2)	  NOT NULL,
  PRIMARY KEY (id)
);