export type property = {
    id:number
  title: string
  description: string
  price: number
  location: string
  propertyType: string
  status:string
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