import OptimizedImg from '@/substrates/toroid-web/components/OptimizedImg.svelte'

export const OptImg = OptimizedImg

const photosSrc = import.meta.glob('./photos/**/*.{png,jpg}', {
  query: { format: 'webp', width: '100;250;500', picture: '' },
  import: 'default',
  eager: true,
})

const photosMeta = import.meta.glob('./photos/**/*.{png,jpg}', {
  query: { format: 'webp', as: 'meta:height;width', picture: '' },
  import: 'default',
  eager: true,
})

// const photosOriginal = import.meta.glob('../photos/**/*.{png,jpg}', {
//   import: 'default',
//   eager: true
// })

let rawPhotos: { [key: string]: ImgData } = {}
for (let srcs in photosSrc) {
  const name = srcs
    .replace('./photos/', '')
    .replace('.png', '')
    .replace('.jpg', '')
  const src = photosSrc[srcs]
  const meta = photosMeta[srcs]
  rawPhotos[name] = {
    src: src as [string, string, string],
    meta: meta as { width: number; height: number },
  }
}

export type ImgData = {
  src: [string, string, string]
  meta: { width: number; height: number }
}

export type FlatRecord = Record<string, ImgData>

// Generic recursive type for the resulting tree
export type NestedRecord = {
  [key: string]: ImgData | NestedRecord
}

function nestBySlash(flat: FlatRecord): NestedRecord {
  const root: NestedRecord = {}

  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split('/')
    let current = root

    // Traverse the path, creating nested objects if needed
    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1
      if (isLast) {
        current[part] = value
      } else {
        if (!current[part] || typeof current[part] !== 'object') {
          current[part] = {}
        }
        current = current[part] as NestedRecord
      }
    })
  }

  return root
}

export const photos = rawPhotos
export const nestedPhotos = nestBySlash(rawPhotos)

export function pickPhotos(photos: NestedRecord, list: string[]) {
  const result: FlatRecord = {}
  for (let name of list) {
    result[name] = photos[name] as ImgData
  }
  return result
}
