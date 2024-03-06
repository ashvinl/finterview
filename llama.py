import os
from dotenv import load_dotenv
from llama_index.core import SimpleDirectoryReader, VectorStoreIndex  

# Load environment variables from .env file
load_dotenv()

# Get the API key from the environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

def analyze_response(question, response, query_engine):
    query = "You are an interviewer for an investment banking position. Given the following response to an interview question, provide detailed feedback based on its detail, conciseness, understandability, and accuracy. If it is wrong, explain where the user went wrong and how they can fix it. Give the feedback in 2nd person POV as if you are an interviewer giving the user feedback:"
    query += f"{question} {response}"
    
    

    response = query_engine.query(query)
    return response
def main():
    directory_reader = SimpleDirectoryReader(input_dir="data")
    documents = directory_reader.load_data()

    index = VectorStoreIndex.from_documents(documents)
    query_engine = index.as_query_engine()
    question = ""
    while question != "exit":  
        question = input("Enter the interview question (type 'exit' to quit): ")
        if question == "exit":
            break  

        while not question.strip():
            print("Please provide a question.")
            question = input("Enter the interview question (type 'exit' to quit): ")

        print("\n")
        
        user_response = input("Enter the response to the interview question: ")
        while not user_response.strip():  # Check if the response is blank or only contains whitespace
            print("Please provide a response.")
            user_response = input("Enter the response to the interview question: ")
        
        print("\n")
        analysis = analyze_response(question, user_response, query_engine)
        print(analysis)

if __name__ == "__main__":
    main()
