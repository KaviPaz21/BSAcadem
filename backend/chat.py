import streamlit as st
import os
import google.generativeai as genai
#AIzaSyBU90iZqxi-zhS9yXn5v6a6Vf5Z1rapTwk
genai.configure(api_key=os.getenv("APIKEY"))

model = genai.GenerativeModel("gemini-pro")
chat = model.start_chat(history=[])

class assistent:
    def responsemodel(message):
        response = chat.send_message(message, stream=False)
        return response

    def chat(self, msg):
        response = assistent.responsemodel(msg)
        return response.text