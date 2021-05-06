# Experimenting with Node.js and GraphQL

## How to run

```shell
docker-compose up backend
```

```shell
docker-compose exec backend bash
npm install
node src/index.js
```


## How to query

- From outside the container, the API can be accessed on port 8080
- You can access GraphiQL on http://localhost:8080/graphql
- Alternatively, the API can be queried directly by:
  ```
  POST http://localhost:8080/graphql
  {
    "query": "{ rollThreeDice  }"
  }
  ```
