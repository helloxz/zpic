#!/bin/bash
# 新建虚拟环境
python3 -m venv myenv
# 激活虚拟环境
source myenv/bin/activate

pip3 install nuitka

BASE_DIR="/data/apps/zpic-github"

# 定义一个函数来处理编译和清理
compile_and_cleanup() {
    local TARGET_DIR="$1"
    local OUTPUT_DIR="${BASE_DIR}/${TARGET_DIR}"

    echo "Compiling directory: ${TARGET_DIR}"

    for pyfile in "${TARGET_DIR}"/*.py; do
        # 如果目录中没有.py文件，则跳过
        [ -e "$pyfile" ] || continue
        local basename_py=$(basename "$pyfile")
        if [[ "$basename_py" == "__init__.py" ]]; then
            continue
        fi
        local name="${basename_py%.py}"
        nuitka \
            --mode=module \
            --output-dir="$OUTPUT_DIR" \
            --remove-output \
            --no-pyi-file \
            --lto=yes \
            "${TARGET_DIR}/${name}.py"
    done

    # 删除原始的.py文件，但保留__init__.py
    find "${OUTPUT_DIR}" -maxdepth 1 -type f -name "*.py" ! -name "__init__.py" -delete
    echo "Cleaned up .py files in ${TARGET_DIR}"
    echo "---------------------------------"
}

# 要处理的目录列表
DIRECTORIES=(
    "app/api/admin"
    "app/utils"
    "app/api"
)

# 循环处理每个目录
for DIR in "${DIRECTORIES[@]}"; do
    compile_and_cleanup "$DIR"
done

echo "All compilations and cleanups are done."