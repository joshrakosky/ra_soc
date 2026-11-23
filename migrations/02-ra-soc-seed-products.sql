-- Auto-generated from RA_MESA_SOCAppreciationGiftProducts.xlsx
-- Re-run: npm run generate-seed

-- Upsert catalog rows by sku (item number).

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Nike Dri-FIT Stride 1/2-Zip',
  NULL,
  'NKIO8137',
  'NKIO8137',
  '/images/NKIO8137_Anthracite.jpg',
  ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']::TEXT[],
  '[{"name":"Anthracite","image_url":"/images/NKIO8137_Anthracite.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Black","image_url":"/images/NKIO8137_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Black Heather","image_url":"/images/NKIO8137_BlackHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Navy","image_url":"/images/NKIO8137_Navy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Royal","image_url":"/images/NKIO8137_Royal.jpg","logos":{"RA":true,"MESA":false},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Royal Heather","image_url":"/images/NKIO8137_RoyalHeather.jpg","logos":{"RA":true,"MESA":false},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Red","image_url":"/images/NKIO8137_Red.jpg","logos":{"RA":true,"MESA":false},"sizes":{"XS":"available","S":"unavailable","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}}]'::JSONB,
  1,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Nike Women''s Dri-FIT Stride 1/2-Zip',
  NULL,
  'NKIO8141',
  'NKIO8141',
  '/images/NKIO8141_Anthracite.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL']::TEXT[],
  '[{"name":"Anthracite","image_url":"/images/NKIO8141_Anthracite.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Black","image_url":"/images/NKIO8141_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Black Heather","image_url":"/images/NKIO8141_BlackHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Navy","image_url":"/images/NKIO8141_Navy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Royal","image_url":"/images/NKIO8141_Royal.jpg","logos":{"RA":true,"MESA":false},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Royal Heather","image_url":"/images/NKIO8141_RoyalHeather.jpg","logos":{"RA":true,"MESA":false},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Red","image_url":"/images/NKIO8141_Red.jpg","logos":{"RA":true,"MESA":false},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}}]'::JSONB,
  2,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'MiiR® Kumo 1/4-Snap Pullover',
  NULL,
  'MRA220',
  'MRA220',
  '/images/MRA220_IndigoNavy.jpg',
  ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']::TEXT[],
  '[{"name":"Indigo Navy","image_url":"/images/MRA220_IndigoNavy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"unavailable","L":"unavailable","XL":"unavailable","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Pitch Black","image_url":"/images/MRA220_PitchBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"unavailable","L":"unavailable","XL":"available","2XL":"available","3XL":"available","4XL":"available"}}]'::JSONB,
  3,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'MiiR® Women''s Kumo 1/4-Zip Pullover',
  NULL,
  'MRAW221',
  'MRAW221',
  '/images/MRAW221_IndigoNavy.jpg',
  ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']::TEXT[],
  '[{"name":"Indigo Navy","image_url":"/images/MRAW221_IndigoNavy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"unavailable","M":"unavailable","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Pitch Black","image_url":"/images/MRAW221_PitchBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"unavailable","M":"unavailable","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}}]'::JSONB,
  4,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Tommy Bahama® Coconut Bay 1/2-Zip',
  NULL,
  'ST228073TB',
  'ST228073TB',
  '/images/ST228073TB_Black.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']::TEXT[],
  '[{"name":"Black","image_url":"/images/ST228073TB_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"Dockside Blue","image_url":"/images/ST228073TB_DocksideBlue.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"Hazy","image_url":"/images/ST228073TB_Hazy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"Ultimate Grey","image_url":"/images/ST228073TB_UltimateGrey.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}}]'::JSONB,
  5,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Tommy Bahama® Women’s Coconut Bay 1/2-Zip',
  NULL,
  'ST222350TB',
  'ST222350TB',
  '/images/ST222350TB_Black.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL']::TEXT[],
  '[{"name":"Black","image_url":"/images/ST222350TB_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"unavailable","M":"unavailable","L":"available","XL":"available","2XL":"available"}},{"name":"Dockside Blue","image_url":"/images/ST222350TB_DocksideBlue.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"unavailable","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Hazy","image_url":"/images/ST222350TB_Hazy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Light Sky Blue","image_url":"/images/ST222350TB_LightSkyBlue.jpg","logos":{"RA":true,"MESA":false},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}}]'::JSONB,
  6,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Eddie Bauer® WeatherEdge® Jacket',
  NULL,
  'EB558',
  'EB558',
  '/images/EB558_Black.jpg',
  ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']::TEXT[],
  '[{"name":"Black","image_url":"/images/EB558_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Cobalt-Navy","image_url":"/images/EB558_CobaltNavy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"unavailable","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Metal-Steel","image_url":"/images/EB558_MetalSteel.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}}]'::JSONB,
  7,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Eddie Bauer® Women''s WeatherEdge® Jacket',
  NULL,
  'EB559',
  'EB559',
  '/images/EB559_Black.jpg',
  ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']::TEXT[],
  '[{"name":"Black","image_url":"/images/EB559_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"unavailable","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Cobalt-Navy","image_url":"/images/EB559_CobaltNavy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}},{"name":"Metal-Steel","image_url":"/images/EB559_MetalSteel.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available","4XL":"available"}}]'::JSONB,
  8,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Carhartt® Textured Full-Zip Fleece Jacket',
  NULL,
  'CT106416',
  'CT106416',
  -- Filenames match assets: {RA|MESA}_{Item}_{ColorToken}.jpg
  '/images/RA_CT106416_BLACK.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']::TEXT[],
  '[{"name":"Black","image_url":"/images/RA_CT106416_BLACK.jpg","images":{"RA":"/images/RA_CT106416_BLACK.jpg","MESA":"/images/MESA_CT106416_BLACK.jpg"},"logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"Carbon Heather","image_url":"/images/RA_CT106416_CARBON.HTHR.jpg","images":{"RA":"/images/RA_CT106416_CARBON.HTHR.jpg","MESA":"/images/MESA_CT106416_CARBON.HTHR.jpg"},"logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"Heather Grey","image_url":"/images/RA_CT106416_HEATHER.GREY.jpg","images":{"RA":"/images/RA_CT106416_HEATHER.GREY.jpg","MESA":"/images/MESA_CT106416_HEATHER.GREY.jpg"},"logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"Navy","image_url":"/images/RA_CT106416_NAVY.jpg","images":{"RA":"/images/RA_CT106416_NAVY.jpg","MESA":"/images/MESA_CT106416_NAVY.jpg"},"logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}}]'::JSONB,
  9,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Carhartt® Women’s Textured Full-Zip Fleece Jacket',
  NULL,
  'CT106419',
  'CT106419',
  '/images/CT106419_Black.jpg',
  ARRAY['XS', 'S', 'M', 'L', 'XL', '2XL']::TEXT[],
  '[{"name":"Black","image_url":"/images/CT106419_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Carbon Heather","image_url":"/images/CT106419_CarbonHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Heather Grey","image_url":"/images/CT106419_HeatherGrey.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Navy","image_url":"/images/CT106419_Navy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"XS":"available","S":"available","M":"available","L":"available","XL":"available","2XL":"available"}}]'::JSONB,
  10,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'The North Face® Ridgewall Soft Shell Vest',
  NULL,
  'NF0A3LGZ',
  'NF0A3LGZ',
  '/images/NF0A3LGZ_TNFBlack.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']::TEXT[],
  '[{"name":"TNF Black","image_url":"/images/NF0A3LGZ_TNFBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"TNF Dark Grey Heather","image_url":"/images/NF0A3LGZ_TNFDarkGreyHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}}]'::JSONB,
  11,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'The North Face® Women''s Ridgewall Soft Shell Vest',
  NULL,
  'NF0A3LH1',
  'NF0A3LH1',
  '/images/NF0A3LH1_TNFBlack.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL']::TEXT[],
  '[{"name":"TNF Black","image_url":"/images/NF0A3LH1_TNFBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"TNF Dark Grey Heather","image_url":"/images/NF0A3LH1_TNFDarkGreyHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}}]'::JSONB,
  12,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'The North Face® Skyline Full-Zip Fleece Jacket',
  NULL,
  'NF0A7V64',
  'NF0A7V64',
  '/images/NF0A7V64_TNFBlack.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL', '3XL']::TEXT[],
  '[{"name":"TNF Black","image_url":"/images/NF0A7V64_TNFBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"TNF Dark Grey Heather","image_url":"/images/NF0A7V64_TNFDarkGreyHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}},{"name":"Urban Navy Heather","image_url":"/images/NF0A7V64_UrbanNavyHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available","3XL":"available"}}]'::JSONB,
  13,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'The North Face® Women''s Skyline Full-Zip Fleece Jacket',
  NULL,
  'NF0A7V62',
  'NF0A7V62',
  '/images/NF0A7V62_TNFBlack.jpg',
  ARRAY['S', 'M', 'L', 'XL', '2XL']::TEXT[],
  '[{"name":"TNF Black","image_url":"/images/NF0A7V62_TNFBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"TNF Dark Grey Heather","image_url":"/images/NF0A7V62_TNFDarkGreyHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}},{"name":"Urban Navy Heather","image_url":"/images/NF0A7V62_UrbanNavyHeather.jpg","logos":{"RA":true,"MESA":true},"sizes":{"S":"available","M":"available","L":"available","XL":"available","2XL":"available"}}]'::JSONB,
  14,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'TravisMathew Approach Backpack',
  NULL,
  'TMB100',
  'TMB100',
  '/images/TMB100_Black.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Black","image_url":"/images/TMB100_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Dusty Blue","image_url":"/images/TMB100_DustyBlue.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Graphite","image_url":"/images/TMB100_Graphite.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"River Blue Navy","image_url":"/images/TMB100_RiverBlueNavy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Shadow Grey","image_url":"/images/TMB100_ShadowGrey.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  15,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'The North Face® Dyno Backpack',
  NULL,
  'NF0A52S7',
  'NF0A52S7',
  '/images/NF0A52S7_MidGrey.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Mid Grey","image_url":"/images/NF0A52S7_MidGrey.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Summit Navy","image_url":"/images/NF0A52S7_SummitNavy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"TNF Black","image_url":"/images/NF0A52S7_TNFBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  16,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'The North Face® 25L Travel Tote',
  NULL,
  'NF0A8EZN',
  'NF0A8EZN',
  '/images/NF0A8EZN_TNFBlack.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"TNF Black","image_url":"/images/NF0A8EZN_TNFBlack.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  17,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  '32oz. Owala Freesip',
  NULL,
  'OWALA32',
  'OWALA32',
  '/images/OWALA32_Black.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Black","image_url":"/images/OWALA32_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Blue Steel","image_url":"/images/OWALA32_BlueSteel.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"White","image_url":"/images/OWALA32_White.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  18,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  '20oz. YETI Rambler Tumbler',
  NULL,
  'YETI-DT20',
  'YETI-DT20',
  '/images/YETI-DT20_Black.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Black","image_url":"/images/YETI-DT20_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Cape Taupe","image_url":"/images/YETI-DT20_CapeTaupe.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Charcoal","image_url":"/images/YETI-DT20_Charcoal.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Navy","image_url":"/images/YETI-DT20_Navy.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Rescue Red","image_url":"/images/YETI-DT20_RescueRed.jpg","logos":{"RA":true,"MESA":false},"sizes":{"OS":"available"}},{"name":"Royal","image_url":"/images/YETI-DT20_Royal.jpg","logos":{"RA":true,"MESA":false},"sizes":{"OS":"available"}},{"name":"Seafoam","image_url":"/images/YETI-DT20_Seafoam.jpg","logos":{"RA":true,"MESA":false},"sizes":{"OS":"available"}},{"name":"White","image_url":"/images/YETI-DT20_White.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  19,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'mophie Snap+ Juice Pack Mini (5,000mAh)',
  NULL,
  '7124-11',
  '7124-11',
  '/images/7124-11_Black.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Black","image_url":"/images/7124-11_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  20,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Anker MagGo Power Bank (10,000mAh)',
  NULL,
  'ANK-1654',
  'ANK-1654',
  '/images/ANK-1654_Black.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Black","image_url":"/images/ANK-1654_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  21,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  '40oz. Stanley Quencher H2.O FlowState Tumbler',
  NULL,
  '1603-01',
  '1603-01',
  '/images/1603-01_Ash.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Ash","image_url":"/images/1603-01_Ash.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Black","image_url":"/images/1603-01_Black.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Cream","image_url":"/images/1603-01_Cream.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Frost","image_url":"/images/1603-01_Frost.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Twilight","image_url":"/images/1603-01_Twilight.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  22,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

INSERT INTO ra_soc_products (
  name, description, sku, item_number, image_url, available_sizes, colors, sort_order, active
) VALUES (
  'Ruched Faux Fur Recycled Polyester Blanket (60" x 50")',
  NULL,
  '103073',
  '103073',
  '/images/103073_Ivory.jpg',
  ARRAY['OS']::TEXT[],
  '[{"name":"Ivory","image_url":"/images/103073_Ivory.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}},{"name":"Mocha","image_url":"/images/103073_Mocha.jpg","logos":{"RA":true,"MESA":true},"sizes":{"OS":"available"}}]'::JSONB,
  23,
  TRUE
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  item_number = EXCLUDED.item_number,
  image_url = EXCLUDED.image_url,
  available_sizes = EXCLUDED.available_sizes,
  colors = EXCLUDED.colors,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;
