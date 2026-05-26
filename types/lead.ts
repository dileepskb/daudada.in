export type Lead = {
id:number
  name:string
  phone:string
  email:string
  status:string
  source:string

//   departmentId Int?
//   department   Department? @relation(fields: [departmentId], references: [id])

//   createdById Int
//   createdBy   User @relation("CreatedBy", fields: [createdById], references: [id])

//   assignedToId Int?
//   assignedTo   User? @relation("AssignedTo", fields: [assignedToId], references: [id])

//   notes String?
//   location String?
//   property_type String?
//   area String?
//   unit String? 
//   expected_price String 

//   activities Activity[]

//   createdAt DateTime @default(now())

}