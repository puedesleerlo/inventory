DROP DATABASE IF EXISTS tdg;
CREATE DATABASE tdg;

\c tdg;

CREATE TABLE deparments {
    id SERIAL PRIMARY KEY
    name VARCHAR
}

CREATE TABLE units {
    id SERIAL PRIMARY KEY
    name VARCHAR
}

CREATE TABLE materials (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  unit INT,
  quantity INTEGER,
  department INT,
);

INSERT INTO materials (name, unit, quantity, department)
  VALUES ('Tyler', 'Retrieved', 3, 'M');