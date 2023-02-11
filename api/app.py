from fastapi import FastAPI


app = FastAPI()

@app.get("/")
def root():
    return {"message": "AteltaLAPI to process pose estimates"}

@app.get("/predict")
def predict(pose_estimate: dict):

    return{"Get score"}