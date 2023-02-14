from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 

from pydantic import BaseModel

import uvicorn 


#Initializing the fast API server
app = FastAPI()

origins = [

    "http://localhost.tiangolo.com",

    "https://localhost.tiangolo.com",

    "http://localhost",

    "http://localhost:8083",

    "http://localhost:3000",

    ]

app.add_middleware(

    CORSMiddleware,

    allow_origins=origins,

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

    )

class Frame(BaseModel):
    # Structure of the requestbody  

    frame_num: int 
    frame_height: float 
    frame_width: float 
    keypoints: dict


@app.get("/")
def root():
    return {"message": "AteltaLAPI to process pose estimates"}

@app.post("/get_score/")
def get_score(frame: Frame):
    print(frame)
    return{"Get score"}

if __name__ == "__main__":
    uvicorn.run(app, port=8080, host="0.0.0.0")