docker exec -it $( docker ps | grep ufal/dspace-angular:dspace-7_x | cut -d' ' -f1 ) /bin/sh
