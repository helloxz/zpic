#!/bin/bash

# 工作目录
WORKDIR="/opt/zpic"
# 安装依赖
install_deps(){
    apt-get update
    apt-get install -y python3 python3-pip python3-venv procps
    # Pillow-SIMD需要的依赖
    apt install -y build-essential python3-dev zlib1g-dev libtiff5-dev liblcms2-dev libwebp-dev libfreetype6-dev libjpeg-dev libpng-dev
    mkdir -p  ${WORKDIR} && cd ${WORKDIR}
}

# 安装 Python 依赖
install_python_deps(){
    cd ${WORKDIR}
    python3 -m venv myenv
    source myenv/bin/activate
    # 安装 Pillow-SIMD 替代 Pillow
    CC="cc -mavx2" pip3 install -U --force-reinstall pillow-simd
    pip3 install -r requirements.txt
}


# 清理缓存，缩小镜像体积
clean(){
    # 清理pillow编译依赖
    apt remove --purge -y \
    build-essential \
    python3-dev \
    zlib1g-dev \
    libtiff5-dev \
    liblcms2-dev \
    libwebp-dev \
    libfreetype6-dev \
    libjpeg-dev \
    libpng-dev
    apt autoremove -y
    apt-get clean
    pip3 cache purge
    rm -rf /var/lib/apt/lists/*
}

install_deps && install_python_deps && clean