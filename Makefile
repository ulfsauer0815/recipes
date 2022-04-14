# requires jq & sponge (moreutils)
.PHONY: sort-recipes
sort-recipes:
	jq '.|=sort_by(.name)'  src/resources/recipes.json | sponge src/resources/recipes.json
