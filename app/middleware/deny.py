from fastapi import Request

async def deny_uas(request: Request):
    """
    Middleware to deny requests based on User-Agent.
    """
    user_agent = request.headers.get("User-Agent", "")
    #print(f"Received request with User-Agent: {user_agent}")  # Debugging line
    
    # List of denied User-Agents
    denied_uas = ["MicroMessenger"]
    # print(user_agent)

    # Check if the User-Agent is in the denied list
    if any(denied_ua.lower() in user_agent.lower() for denied_ua in denied_uas):
        return True
    
    # If not denied, proceed with the request
    return False