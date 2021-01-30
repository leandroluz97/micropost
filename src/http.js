class EasyAwait {
  //MAke http request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  //MAke http request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //MAke http request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //MAke http request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const resData = await 'Post Deleted';
    return resData;
  }
}

export const http = new EasyAwait();
