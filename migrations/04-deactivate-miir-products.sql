-- MiiR Kumo pullovers are no longer offered. Keep the rows so past orders still resolve.
UPDATE ra_soc_products
SET active = FALSE
WHERE sku IN ('MRA220', 'MRAW221');
