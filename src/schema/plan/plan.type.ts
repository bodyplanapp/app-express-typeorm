export default `
enum Type {
  EXERCISE
  NUTRITIONAL
  OTHER
}

enum Status {
  AVAILABLE
  CANCELLED
  REMOVED 
  OTHER
}

  type Plan { 
    id:               ID
    name:             String
    description:      String
    price:            Float
    creatdAt:         String
    lang:             String
    trainer:          Trainer
    followers:        Int
    rating:           Float
    type:             Type
    status:           Status
}
`;
