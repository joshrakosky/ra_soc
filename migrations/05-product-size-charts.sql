-- Spec-sheet links from RA.MESA_SOC.Appreciation.Gift_Products_ver2.xlsx column P.
-- Drinkware, tech, and the blanket have no chart, so those rows stay null.

ALTER TABLE ra_soc_products
  ADD COLUMN IF NOT EXISTS size_chart_url TEXT;

UPDATE ra_soc_products AS p
SET size_chart_url = v.url
FROM (
  VALUES
    ('NKIO8137', 'https://www.sanmar.com/p/74375_Navy/specSheetMeasurements'),
    ('NKIO8141', 'https://www.sanmar.com/p/74376_Black/specSheetMeasurements'),
    ('ST228073TB', 'https://www.sanmar.com/p/79573_Hazy/specSheetMeasurements'),
    ('ST222350TB', 'https://www.sanmar.com/p/79574_LightSkyBl/specSheetMeasurements'),
    ('EB558', 'https://www.sanmar.com/p/9000_Black/specSheetMeasurements'),
    ('EB559', 'https://www.sanmar.com/p/9001_Black/specSheetMeasurements'),
    ('CT106416', 'https://www.sanmar.com/p/47894_CarbonHthr/specSheetMeasurements'),
    ('CT106419', 'https://www.sanmar.com/p/47895_Navy/specSheetMeasurements'),
    ('NF0A3LGZ', 'https://www.sanmar.com/p/8655_TNFBlack/specSheetMeasurements'),
    ('NF0A3LH1', 'https://www.sanmar.com/p/8656_TNFDkGyH/specSheetMeasurements'),
    ('NF0A7V64', 'https://www.sanmar.com/p/25873_UrbNvyHt/specSheetMeasurements'),
    ('NF0A7V62', 'https://www.sanmar.com/p/25874_TNFDkGyH/specSheetMeasurements'),
    ('TMB100', 'https://www.sanmar.com/p/38576_DustyBlue/specSheetMeasurements'),
    ('NF0A52S7', 'https://www.sanmar.com/p/10536_SummitNavy/specSheetMeasurements'),
    ('NF0A8EZN', 'https://www.sanmar.com/p/61279_TNFBlack/specSheetMeasurements')
) AS v(sku, url)
WHERE p.sku = v.sku;
