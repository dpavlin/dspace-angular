#docker compose --env-file .env -f docker/docker-compose.yml -f docker/docker-compose-rest.yml pull
#docker compose --env-file .env -p ffzg-dspace -f docker/docker-compose.yml -f docker/docker-compose-rest.yml up -d --no-build
docker compose --env-file .env -p ffzg-zzl -f docker/docker-compose.yml -f docker/docker-compose-rest.yml up --no-build
