#!/bin/bash

RED='\033[1;31m'
GREEN='\033[1;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

set -e
echo -e "${YELLOW}[local] docker build --rm -t todo-list-front-end:latest .${NC}"
docker build --rm -t todo-list-front-end:latest .
echo -e "${YELLOW}[local] docker rm -f -v TODO-List-Front-End${NC}"
docker rm -f -v TODO-List-Front-End
echo -e "${YELLOW}[local] docker run --name TODO-List-Front-End -d --network-alias todo-list-front-end -p 3000:3000 --network net_c34-122-0 todo-list-front-end:latest${NC}"
docker run --name TODO-List-Front-End -d --network-alias todo-list-front-end -p 3000:3000 --network net_c34-122-0 todo-list-front-end:latest
sleep 5
#echo -e "${YELLOW}[local] curl --max-time 30 -s http://127.0.0.1:3000/buildDate${NC}"
#curl --max-time 30 -s http://127.0.0.1:3000/buildDate
echo -e "${YELLOW}[local] w3m http://127.0.0.1:3000${NC}"
w3m http://127.0.0.1:3000