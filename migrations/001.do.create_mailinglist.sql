CREATE TABLE mailinglist (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL
);