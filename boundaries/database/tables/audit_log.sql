-- Audit Triggers
-- https://wiki.postgresql.org/wiki/Audit_trigger_91plus

-- The link above includes the guide for creating the audit log

-- the code below is just to activate it

--DROP TRIGGER audit_trigger_row ON boundaries;
--DROP TRIGGER audit_trigger_stm ON boundaries;

SELECT audit.audit_table('parks');
SELECT audit.audit_table('parks_poly');
SELECT audit.audit_table('parks_line');
