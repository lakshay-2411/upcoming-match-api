const API_BASE_URL = 'http://localhost:5000/api';

// API client with error handling
class ApiClient {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url);
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

const apiClient = new ApiClient();

// API functions
export const fetchMatches = async (page = 1, limit = 10, league = null) => {
  const params = { page, limit };
  if (league) params.league = league;
  
  return apiClient.get('/matches', params);
};

export const fetchMatchById = async (id) => {
  return apiClient.get(`/matches/${id}`);
};

export const checkServerHealth = async () => {
  return apiClient.get('/health');
};

export default apiClient;