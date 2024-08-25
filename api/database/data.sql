DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries (
    Entry_ID INT GENERATED ALWAYS AS IDENTITY,
    Title VARCHAR(40) UNIQUE,
    Description VARCHAR(500) UNIQUE,
    Author VARCHAR(500),
    Date DATE,
    Time TIME
);

INSERT INTO diary_entries (Title, Description, Author, Date, Time)
VALUES  ('Pakistan', 'Pakistan is Beautiful', 'ddddddddd', '08/14/2024', '13:04'),
        ('Spain', 'Spain is Beautiful', 'evvvvvvv', '08/15/2024', '13:04'),
        ('Canada', 'Canada is Beautiful', 'Aliah', '02/20/2024', '13:04'),
        ('Flowers', 'Flowers are Beautiful', 'eeeeeee', '03/14/2024', '13:04'),
        ('Sea', 'Sea is Beautiful', 'Aliah', '09/22/2024', '13:04'),
        ('Sky', 'Sky is Beautiful', 'hhhhhhh', '08/26/2024', '13:04'),
        ('Sun', 'Sun is Beautiful', 'Aliah', '09/01/2024', '13:04'),
        ('Moon', 'Moon is Beautiful', 'Aliah', '01/23/2024', '13:04');
        
        