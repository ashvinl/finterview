import logging
import sys
from llama_index.core import SimpleDirectoryReader
from llama_index.core import VectorStoreIndex

# Specify the directory containing your documents
directory_path = "data"

# Create a SimpleDirectoryReader instance
directory_reader = SimpleDirectoryReader(input_dir=directory_path)

# Load the documents from the directory
documents = directory_reader.load_data()

# Create the index
index = VectorStoreIndex.from_documents(documents)

# Create a query engine
query_engine = index.as_query_engine()

# Query the index
response = query_engine.query("if i asked the question of what are the two sides of a restructuring deal and the applicant responded: In a restructuring deal, there are typically two opposing factions: the debtor, representing the company itself, and the creditors, encompassing individuals or entities that have extended loans or financial support to the company. The debtor side is focused on strategizing ways to navigate bankruptcy proceedings or mitigate its impact, while the creditor side involves advising purchasers and lenders seeking to capitalize on the company's assets or liabilities., give a score on this response based on accuracy, clearness, and qualifications. ")
print(response)

# Loop for continuous queries
while(True):
    inp = input("Query: ")
    response = query_engine.query(inp)
    print(response)