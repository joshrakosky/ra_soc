-- Everyone stays one-order-per-email; the test login may place multiple orders.
DROP INDEX IF EXISTS idx_ra_soc_orders_one_per_email;

CREATE UNIQUE INDEX IF NOT EXISTS idx_ra_soc_orders_one_per_email
  ON ra_soc_orders (email)
  WHERE email <> 'josh.rakosky@proforma.com';
