docker exec -it $( docker ps | grep ufal/dspace:dspace-7_x | cut -d' ' -f1 ) /bin/bash
