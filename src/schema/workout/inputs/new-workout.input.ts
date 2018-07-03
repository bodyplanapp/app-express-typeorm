export default `
    input NewWorkout {
        name:         String
        creatdAt:     String
        updatedAt:    String
        plan:         Int
        exercises:     [NewExercise]
    }
`;
