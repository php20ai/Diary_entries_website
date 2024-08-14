DROP TABLE IF EXISTS diary_entries

CREATE TABLE diary_entries (
    Entry_ID INT GENERATED ALWAYS AS IDENTITY,
    Title VARCHAR(40) UNIQUE,
    Description VARCHAR(500) UNIQUE,
    Author VARCHAR(500),
    Date DATE,
    Time TIME
)

INSERT INTO diary_entries  (Title, Description, Author, Date, Time)
VALUES ("Pakistan", "Pakistan is Beautiful", "Aliah", "14/08/2024", "13:04"),
        ("Beautiful Day", "Today I ate icecream and chocolate", "Seehh", "17/11/2023", "22:03"),
        ("Travelling", "I went to Greece and I saw a beautiful lake.", "Lilly", "06/05/2022", "19:30")
        ("Food", "I like to eat Curry", "zzzhhh", "29/02/2021", "12:50"),
        ("Pakistan", "Pakistan is Beautiful", "Aliah", "14/08/2024", "13:04"),
        ("Pakistan", "Pakistan is Beautiful", "Aliah", "14/08/2024", "13:04"),
        ("Pakistan", "Pakistan is Beautiful", "Aliah", "14/08/2024", "13:04"),
        ("Pakistan", "Pakistan is Beautiful", "Aliah", "14/08/2024", "13:04")