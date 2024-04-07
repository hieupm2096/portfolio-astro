import type Image from "./image.ts";

export default interface Post {
  id?: number
  title?: string
  slug?: string
  description?: string
  note?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
  priority?: number
  content?: null
  cover?: Image
}
