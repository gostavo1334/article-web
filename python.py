def ask_question():
    # Display the question and options
    print("\nWhat is the capital city of France?")
    print("A) Berlin")
    print("B) Paris")
    print("C) Rome")
    print("D) Madrid")

    # Get user input and convert to uppercase for consistency
    answer = input("Enter your answer (A/B/C/D): ").upper()

    # Validate input
    valid_answers = ['A', 'B', 'C', 'D']
    while answer not in valid_answers:
        print("Invalid input! Please enter A, B, C, or D.")
        print("Your answer" + " " +answer)
        answer = input("Enter your answer (A/B/C/D): ").upper


    # Check answer and provide feedback
    if answer == "B":
        print("\n🎉 Congratulations! That's correct! Paris is the capital of France.")
        return True
    else:
        print("\n❌ Sorry, that's incorrect. The correct answer is B) Paris.")
        return False

# Run the quiz
ask_question()