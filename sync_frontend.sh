#!/bin/bash
BASE_DIR=$(pwd)
cd $BASE_DIR

# 删除现有的文件
rm -rf app/static/assets/*
# 编译并复制文件
cd frontend
pnpm build
cp -ar dist/static/assets/* ../app/static/assets/
# 删除不需要的文件
cd $BASE_DIR
rm -rf app/static/assets/index.html
rm -rf app/static/assets/favicon.ico