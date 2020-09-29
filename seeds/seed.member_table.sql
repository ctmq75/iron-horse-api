  
BEGIN;

TRUNCATE
  mailinglist
  RESTART IDENTITY CASCADE;

INSERT INTO mailinglist (full_name, email)
VALUES
  ('test user', 'test@gmail.com'),
  ('demo user', 'demo@gmail.com');


COMMIT;
