CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
)

INSERT INTO tasks (title, description) VALUES
    ('TASK 1', ' SOME DESCRIPTION'),
    ('TASK 2', ' SOME DESCRIPTION 2');