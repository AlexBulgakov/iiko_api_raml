iikoBiz Server API documentation in RAML format for futher JS client generation.

### Build
npm run build

### Example of usage
    ```
    var client = new IikoBizServerApi({
        baseUri: '/' // necessary if there is local redirect to iicobiz server
    });

    var query = {
        user_id: 'OpenServiceAPI',
        user_secret: 'xxxxxx'
    };

      return client.api['0'].auth.accessToken.get(query)
          .then(result => alert(result.body));
    ```

### HTML docs
... are available in build/docs/index.html