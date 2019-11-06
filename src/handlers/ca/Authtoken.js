export const CA_TOKEN_KEY = 'ca_token';
export const USER_TOKEN_KEY = 'user_token';

export class AuthService {
    isCALoggedIn = () => true && localStorage.getItem(CA_TOKEN_KEY)

    isUserLoggedIn = () => true && localStorage.getItem(USER_TOKEN_KEY)

    getToken = key => localStorage.getItem(key)

    setCAToken = token => localStorage.setItem(CA_TOKEN_KEY, token)

    setUserToken = token => localStorage.setItem(USER_TOKEN_KEY, token)

    caLogout = () => localStorage.removeItem(CA_TOKEN_KEY)

    userLogout = () => localStorage.removeItem(USER_TOKEN_KEY)
}
