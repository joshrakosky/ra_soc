// Thumbnail files on disk are not the seed paths.
// Pattern: /images/{RA|MESA}_{FileSku}_{COLOR.TOKEN}.jpg
// A few supplier names differ from the spreadsheet; those aliases live here.

import type { LogoBrand } from '@/types'

/** Spreadsheet item number → token used in the filename. */
const FILE_SKU: Record<string, string> = {
  ST222350TB: 'SW222350TB', // Women's Tommy Bahama files say SW, not ST
  OWALA32: 'OWALA',
  'ANK-1654': 'ANKER',
  '7124-11': 'MOPHIE',
  '1603-01': 'STANLEY',
  '103073': 'BLANKET',
}

/** Spreadsheet color → token used in the filename. */
const COLOR_TOKEN: Record<string, string> = {
  'Black Heather': 'BLACK.HTHR',
  'Royal Heather': 'ROYAL.HTHR',
  Red: 'SCARLET',
  'Pitch Black': 'PITCH.BLACK',
  'Indigo Navy': 'INDIGO.NAVY',
  'Dockside Blue': 'DOCKSIDE.BLUE',
  'Ultimate Grey': 'ULTIMATE.GREY',
  'Light Sky Blue': 'LIGHT.SKY.BLUE',
  'Metal-Steel': 'METAL.GREY',
  'Cobalt-Navy': 'COBALT.NAVY',
  'Carbon Heather': 'CARBON.HTHR',
  'Heather Grey': 'HEATHER.GREY',
  'TNF Black': 'TNF.BLACK',
  'TNF Dark Grey Heather': 'TNF.DARK.GREY.HTHR',
  'Urban Navy Heather': 'URBAN.NAVY.HTHR',
  'Dusty Blue': 'DUSTY.BLUE',
  'River Blue Navy': 'RIVER.BLUE.NAVY',
  'Shadow Grey': 'SHADOW.GREY',
  'Mid Grey': 'MID.GREY',
  'Summit Navy': 'SUMMIT.NAVY',
  'Blue Steel': 'BLUE.STEEL',
  'Cape Taupe': 'CAPE.TAUPE',
  'Rescue Red': 'RESCUE.RED',
}

function colorToken(colorName: string): string {
  if (COLOR_TOKEN[colorName]) return COLOR_TOKEN[colorName]
  return colorName.toUpperCase().replace(/[^A-Z0-9]+/g, '.')
}

/** Public URL for a color photo. MESA mophie file has an extra A in the name. */
export function catalogImagePath(itemNumber: string, colorName: string, brand: LogoBrand): string {
  if (itemNumber === '7124-11' && brand === 'MESA') {
    return '/images/MESA_MOPHIE_BLACKA.jpg'
  }
  const sku = FILE_SKU[itemNumber] ?? itemNumber
  return `/images/${brand}_${sku}_${colorToken(colorName)}.jpg`
}
