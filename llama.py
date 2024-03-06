import os
from dotenv import load_dotenv
from llama_index.core import SimpleDirectoryReader, VectorStoreIndex  

# Load environment variables from .env file
load_dotenv()

# Get the API key from the environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

def analyze_response(question, response, query_engine):
    query = '''You are an AI-powered interview bot designed to evaluate responses for investment banking positions. For each interviewee response, you must:

        1. Analyze the response for:
        - Detail: Assess the depth and relevance of the information provided.
        - Conciseness: Evaluate the brevity and efficiency of the response, ensuring it's to the point and doesn't take too long. 
        - Understandability: Determine how easily someone can comprehend the response, considering clarity and simplicity. Additionally, consider the tone, as this is a professional interview and the interviewee should speak in a well spoken way not being too informal.
        - Accuracy: Verify the correctness of the content, pointing out any inaccuracies or misconceptions.
    
        2. Provide detailed feedback:
        - For each of the above categories, offer specific insights on the strengths and weaknesses of the response. 
        - If a response is lacking or incorrect, explain where it falls short and suggest how the interviewee can improve.

        3. Score the response:
        - Assign a score from 1 to 10 in each of the four categories (Detail, Conciseness, Understandability, Accuracy), with 10 being the highest score.

        Your feedback should be delivered in the 2nd person point of view, as if you are the interviewer directly communicating with the interviewee. Ensure your feedback is constructive, guiding the interviewee on how to enhance their responses for future questions. '''
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
            print("***Please provide a question.***")
            question = input("Enter the interview question (type 'exit' to quit): ")

        print("\n")
        
        user_response = input("Enter the response to the interview question: ")
        while not user_response.strip():  
            print("***Please provide a response.***")
            user_response = input("Enter the response to the interview question: ")
        
        print("\n")
        analysis = analyze_response(question, user_response, query_engine)
        print("***Here is your analysis:***", analysis)

if __name__ == "__main__":
    main()
