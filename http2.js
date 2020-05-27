class HTTP {
    // make an HTTP GET request
    get(url) {
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => resolve(data))
                    .catch(err => reject(err));
            });
        }
        // make an HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // make an HTTP PUT request
    put(url, data) {
            return new Promise((resolve, reject) => {
                fetch(url, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(res => res.json())
                    .then(data => resolve(data))
                    .catch(err => reject(err));
            });
        }
        // make an HTTP DELETE request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                .then(res => res.json())
                .then(() => resolve('Resource Deleted'))
                .catch(err => reject(err));
        });
    }
}