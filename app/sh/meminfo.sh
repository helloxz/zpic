#!/bin/bash
set -euo pipefail

total_kb="$(
  ps -eo rss=,args= | awk '
    BEGIN { sum=0 }
    {
      if ($0 ~ /(^|[[:space:]\/])(python|python3|granian|uvicorn)([[:space:]]|$)/) {
        sum += $1
      }
    }
    END { print sum }
  '
)"

echo ${total_kb}
