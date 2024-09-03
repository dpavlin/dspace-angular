docker compose --env-file .env -p dspace-ffzg -f docker/cli.yml run --rm dspace-cli create-administrator -e test@test.edu -f firstname -l lastname -p password -c en -o organization
docker compose --env-file .env -p dspace-ffzg -f docker/cli.yml run --rm dspace-cli user --add -m user@test.edu -g givenname -s surname -l en -p user -o organization
