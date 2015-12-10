CREATE OR REPLACE FUNCTION last_updated()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE OR REPLACE FUNCTION date_created()
RETURNS TRIGGER AS $$
BEGIN
  NEW.date_created = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER parks_last_updated BEFORE INSERT OR UPDATE ON parks FOR EACH ROW EXECUTE PROCEDURE last_updated();
CREATE TRIGGER parks_date_created BEFORE INSERT ON parks FOR EACH ROW EXECUTE PROCEDURE date_created();
