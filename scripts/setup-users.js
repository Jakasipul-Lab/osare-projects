-- Erstelle 3 Datenbank-Rollen:

-- 1. ADMIN (du allein)
INSERT INTO users (email, password_hash, role, name, company)
VALUES (
  'admin@easafariroutes.com',
  'hash_hier_einfügen',  -- Nutze bcrypt!
  'admin',
  'Osare Nakinson',
  'OSARE HQ'
);

-- 2. VENDOR_BOB (Bob kann nur seine eigenen Listings sehen)
INSERT INTO users (email, password_hash, role, vendor_id, name, company)
VALUES (
  'bob@safarioperator.com',
  'hash_hier_einfügen',
  'vendor',
  123,  -- vendor_id
  'Bob',
  'Bob Safari Tours'
);

-- Die Vendor-ID muss in der vendors-Tabelle existieren!
