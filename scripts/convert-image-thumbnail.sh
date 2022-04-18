#!/bin/bash

IN_FILE="$1"
OUT_FILE="$2"

[ -f "$OUT_FILE" ] && echo "$OUT_FILE already exists" && exit 0

# create output directory if it doesn't exist
out_dir=$(dirname "$OUT_FILE")
mkdir -p "$out_dir"

# convert
convert \
    -strip \
    -resize x150 \
    -quality 50 \
    "$IN_FILE" "$OUT_FILE"
