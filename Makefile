# requires jq & sponge (moreutils)
.PHONY: sort-recipes
sort-recipes:
	jq --indent 4 '.|=sort_by(.name)' src/resources/recipes.json | sponge src/resources/recipes.json

.PHONY: convert-images
convert-images:
	./scripts/convert-images.sh
