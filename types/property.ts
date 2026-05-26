export type PImages = {
  id:number
  url:string
  image_type:string
}
export type Specification = {
  key:string
  value:string
}
export type amenity = {
  id:number
  name:string
}

export type propertyAmenity = {
  amenity:amenity
}

export type property = {
    id:number
  title: string
  description: string
  price: number
  address:string
  location: string
  city:string
  propertyType: string
  status:string
  images:PImages[]
  specification:Specification[]
  propertyAmenity:propertyAmenity[]
}

export type testimonial = {
    id:number
  name: string
  role:string
  content: string
  star: number
  location: string
  image?:string
  createAt:string
}