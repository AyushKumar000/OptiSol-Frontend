import axios from "axios";

/**
 * Create an Axios instance with a pre-configured base URL.
 * This is a best practice because you only have to define the base URL once.
 * If your API moves, you only have to change it here.
 */
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // The base URL of your Flask backend
  headers: {
    "Content-Type": "application/json",
  },
});

// ============================================================================
// AUTHENTICATION API CALLS
// ============================================================================

/**
 * Sends a request to register a new user.
 * @param {object} userData - The user's data.
 * @param {string} userData.username - The desired username.
 * @param {string} userData.email - The user's email address.
 * @param {string} userData.password - The user's password.
 * @returns {Promise} An Axios promise with the response.
 */
export const registerUser = (userData) => {
  return apiClient.post("/auth/register", userData);
};

/**
 * Sends a request to log in a user.
 * @param {object} credentials - The user's login credentials.
 * @param {string} credentials.username - The username to log in with.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise} An Axios promise with the response.
 */
export const loginUser = (credentials) => {
  return apiClient.post("/auth/login", credentials);
};

/**
 * Fetches the current user's profile information.
 * Requires a valid access token.
 * @param {string} token - The user's JWT access token.
 * @returns {Promise} An Axios promise with the response.
 */
export const getProfile = (token) => {
  return apiClient.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * Sends a request to log out a user by invalidating their refresh token.
 * @param {string} refreshToken - The user's JWT refresh token.
 * @returns {Promise} An Axios promise with the response.
 */
export const logoutUser = (refreshToken) => {
  return apiClient.post("/auth/logout", { refresh_token: refreshToken });
};

/**
 * Sends a request to get a new access token using a refresh token.
 * @param {string} refreshToken - The user's JWT refresh token.
 * @returns {Promise} An Axios promise with the response.
 */
export const refreshToken = (refreshToken) => {
  return apiClient.post("/auth/refresh", { refresh_token: refreshToken });
};

// ============================================================================
// FUTURE API CALLS (You can add these later)
// ============================================================================
// Example for getting user credentials (based on your Postman collection)

/**
 * Fetches credentials for a specific user.
 * @param {string} userId - The ID of the user.
 * @param {string} token - The user's JWT access token.
 * @returns {Promise} An Axios promise with the response.
 */
/*
export const getCredentials = (userId, token) => {
  return apiClient.get(`/users/${userId}/credentials`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
*/
