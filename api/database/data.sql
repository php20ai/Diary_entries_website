DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries (
    Entry_ID INT GENERATED ALWAYS AS IDENTITY,
    Title VARCHAR(40) UNIQUE,
    Description VARCHAR(500) UNIQUE,
    Author VARCHAR(500),
    Date_created date default CURRENT_TIMESTAMP,
    Time_created time default CURRENT_TIMESTAMP);


INSERT INTO diary_entries (Title, Description, Author)
VALUES  ('Pakistan', 'Pakistan is Beautiful', 'ddddddddd'),
        ('Spain', 'Spain is Beautiful', 'evvvvvvv'),
        ('Canada', 'Canada is Beautiful', 'Aliah'),
        ('Flowers', 'Flowers are Beautiful', 'eeeeeee'),
        ('Sea', 'Sea is Beautiful', 'Aliah'),
        ('Sky', 'Sky is Beautiful', 'hhhhhhh'),
        ('Sun', 'Sun is Beautiful', 'Aliah'),
        ('Moon', 'Moon is Beautiful', 'Aliah');
        