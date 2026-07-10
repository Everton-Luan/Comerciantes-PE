from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from controllers.login_controller import router as login_router

app = FastAPI(title="Comerciantes PE - API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(login_router)


@app.get("/")
def root():
    return {"status": "API Comerciantes PE no ar"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)