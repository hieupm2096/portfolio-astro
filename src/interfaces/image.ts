export default interface Image {
  id?: number
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  hash?: string
  ext?: string
  mime?: string
  size?: number
  url?: string
  previewUrl?: string
  createdAt?: Date
  updatedAt?: Date
  blurhash?: string
}
