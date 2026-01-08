#!/bin/bash
docker rmi helloz/zpic
docker build --no-cache -t helloz/zpic .
docker push helloz/zpic