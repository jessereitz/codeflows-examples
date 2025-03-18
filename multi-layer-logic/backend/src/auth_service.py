CURRENT_USERS = [{
    'username': 'user@email.com',
    'password': 'password'
}]

def get_user(username: str):
    for user in CURRENT_USERS:
        if user['username'] == username:
            return user
    return None

def is_password_correct_for_user(username: str, password: str):
    user = get_user(username)
    if user is None:
        return False
    return user['password'] == password

def create_token_for_user(username: str):
    return f'{username}-token'
