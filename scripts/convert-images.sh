#!/bin/bash

IN_DIR="public/img/original"
OUT_DIR_HIRES="public/img/4000px"
OUT_DIR_DETAILS="public/img/750px"
OUT_DIR_THUMBNAIL="public/img/300px"
IGNORE_DIR="unsorted"

function file_not_exists() {
    if [ -f "$1" ]; then
        echo "File $1 already exists"
        return 1
    fi
    return 0
}

pushd "$(dirname "$0")/.." >/dev/null || exit 1

find "$IN_DIR" \
    -ipath "*/$IGNORE_DIR" -prune -o \
    -iname "*.jpg" -print0 |
    while IFS= read -r -d '' in_file; do
        filename="${in_file#"$IN_DIR/"}"
        out_file_hires="$OUT_DIR_HIRES/$filename"
        out_file_details="$OUT_DIR_DETAILS/$filename"
        out_file_thumbnail="$OUT_DIR_THUMBNAIL/$filename"

        file_not_exists "$out_file_hires" &&
            ./scripts/convert-image-hires.sh "$in_file" "$out_file_hires"

        file_not_exists "$out_file_details" &&
            ./scripts/convert-image-details.sh "$in_file" "$out_file_details"

        file_not_exists "$out_file_thumbnail" &&
            ./scripts/convert-image-thumbnail.sh "$in_file" "$out_file_thumbnail"
    done

popd >/dev/null || exit 1
