## Installation

```bash
$ yarn install
```

## env

```bash

$ touch .env
```

```sh
APP_POSTGRES_DB="issn_db"
APP_POSTGRES_PORT=5432
APP_POSTGRES_USER=
APP_POSTGRES_PASSWORD=

APP_KEYCLOAK_USER=
APP_KEYCLOAK_PASSWORD=

KEYCLOAK_CONNECT_URL="http://keycloak:8080/auth"
KEYCLOAK_CONNECT_REALM="issn"
KEYCLOAK_CONNECT_CLIENT_ID=
KEYCLOAK_CONNECT_CLIENT_NAME="issn-cluster"
KEYCLOAK_CONNECT_CLIENT_SECRET=

RABBITMQ_DEFAULT_USER=
RABBITMQ_DEFAULT_PASS=
RABBITMQ_USER=
RABBITMQ_PASS=
RABBITMQ_HOST="rabbitmq:5672"

RABBITMQ_AUTH_QUEUE="auth_queue"
RABBITMQ_PRESENCE_QUEUE="presence_queue"
RABBITMQ_PERSONS_QUEUE="persons_queue"

KEYCLOAK_POSTGRES_DB="issn_user_db"
KEYCLOAK_POSTGRES_USER=
KEYCLOAK_POSTGRES_PASSWORD=

DATABASE_URL=postgresql://${APP_POSTGRES_USER}:${APP_POSTGRES_PASSWORD}@postgres_issn:${APP_POSTGRES_PORT}/${APP_POSTGRES_DB}?schema=public

MINIO_DATA_ROOT_DIR="./.uploads"
MINIO_ACCESS_KEY="OMKjvHODec0UXbu9whyZ"
MINIO_SECRET_KEY="eQJTG6YrGh7KFTVq36ImDF8o57L6vfxoq9OzmRZD"
MINIO_PORT=9000
MINIO_ENDPOINT="localhost"
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
