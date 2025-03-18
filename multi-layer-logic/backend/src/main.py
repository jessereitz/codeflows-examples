from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette import status

from .request_models import LoginRequest, LoginResponse
from .auth_service import create_token_for_user, is_password_correct_for_user

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/login")
def login(login_request: LoginRequest):
    if is_password_correct_for_user(login_request.username, login_request.password):
        return LoginResponse(username=login_request.username, token=create_token_for_user(login_request.username))
    
    raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
        )
