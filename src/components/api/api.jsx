export default class Api {
    constructor(baseUrl) {
      this._baseUrl = baseUrl;
    }
  
    _request(url, options) {
      return fetch(url, options).then(this._checkResponse);
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getData = () => {
        return this._request(`${this._baseUrl}/api/ingredients`)
      }

  }
  