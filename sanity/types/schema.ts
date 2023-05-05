import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Restaurant
 *
 *
 */
export interface Restaurant extends SanityDocument {
  _type: 'restaurant'

  /**
   * Restaurant name — `string`
   *
   *
   */
  name?: string

  /**
   * Short description — `string`
   *
   *
   */
  short_description?: string

  /**
   * Image of the restaurant — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  /**
   * Latitude of the restaurant — `number`
   *
   *
   */
  lat?: number

  /**
   * Longitude of the restaurant — `number`
   *
   *
   */
  long?: number

  /**
   * Restaurant address — `string`
   *
   *
   */
  address?: string

  /**
   * Enter a Rating from (1-5 Stars) — `number`
   *
   *
   */
  rating?: number

  /**
   * Category — `reference`
   *
   *
   */
  type?: SanityReference<Category>

  /**
   * Dishes — `array`
   *
   *
   */
  dishes?: Array<SanityKeyedReference<Dish>>
}

/**
 * Dish
 *
 *
 */
export interface Dish extends SanityDocument {
  _type: 'dish'

  /**
   * Name of dish — `string`
   *
   *
   */
  name?: string

  /**
   * Short description — `string`
   *
   *
   */
  short_description?: string

  /**
   * Price of the dish in GBP — `number`
   *
   *
   */
  price?: number

  /**
   * Image of the Dish — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Menu Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: 'category'

  /**
   * Category name — `string`
   *
   *
   */
  name?: string

  /**
   * Image of category — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

/**
 * Featured
 *
 *
 */
export interface Featured extends SanityDocument {
  _type: 'featured'

  /**
   * Featured Caregory name — `string`
   *
   *
   */
  name?: string

  /**
   * Short description — `string`
   *
   *
   */
  short_description?: string

  /**
   * Restaurants — `array`
   *
   *
   */
  restaurants?: Array<SanityKeyedReference<Restaurant>>
}

export type Documents = Restaurant | Dish | Category | Featured
