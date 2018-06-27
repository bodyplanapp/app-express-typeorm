export default `
  enum Gender {
    MALE
    FEMALE 
    OTHER
  }
  type User { 
    id:             Int
    firstName:      String
    lastName:       String
    description:    String
    file:           Int
    email:          String
    password:       String
    createdAt:      String
    updatedAt:      String
    gender:         Gender
    activated:      Boolean
    username:       String
    followers:      Int
    followedBy:     Int
    birthday:       String
    lang:           String
    facebook:       Int
    google:         Int
    instagram:      Int
}
`;
