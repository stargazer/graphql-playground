# Experimenting with FastAPI and GraphQL

## How to run

```shell
cd fastapi
docker-compose up backend
```

```shell
docker-compose exec backend bash
cd src
uvicorn main:app --host 0.0.0.0 --port 3000
```


## How to query

- From outside the container, the API can be accessed on port 8080
- You can access GraphiQL on http://localhost:8080/graphql
- Alternatively, the API can be queried directly by:
  ```
  POST http://localhost:8080/graphql
  {
    "query": "{ goodbye(name: \"dude!\") }"
  }
  ```
