import type { Ingredient, ServingIngredient } from "./types";

const ingredientMapping: Record<string, string> = {
  Äpfel: "Apfel",
  Zitronen: "Zitrone",
  Eier: "Ei",
  Tomaten: "Tomate",
  Zwiebeln: "Zwiebel",
  "Eier (Eiweiß)": "Ei (Eiweiß)",
  "Eier (Eigelb)": "Ei (Eigelb)",
  Mandeln: "Mandel",
  Karotten: "Karotte",
  Spitzpaprikas: "Spitzpaprika",
  Paprikas: "Paprika"
};

const unitMapping: Record<string, string> = {
  Zehen: "Zehe",
  Bund: "Bunde",
};

function singularName(plural: string): string {
  return ingredientMapping[plural] ?? plural;
}

function singularUnit(plural: string): string {
  return unitMapping[plural] ?? plural;
}

function getIngredientAmountFormatted(amount: number | undefined) {
  return amount?.toLocaleString(undefined, { maximumFractionDigits: 2 }) ?? "";
}

function getIngredientAmount(
  ingredient: Ingredient,
  baseServings: number | undefined,
  servings: number
): number | undefined {
  if (ingredient.quantity == null) {
    return undefined;
  }
  return (ingredient.quantity / (baseServings || 1)) * servings;
}

function getIngredientName(
  ingredient: Ingredient,
  amount: number | undefined
): string {
  if (isSingular(amount)) {
    return singularName(ingredient.name);
  }
  return ingredient.name;
}

function getUnit(
  ingredient: Ingredient,
  amount: number | undefined
): string | undefined {
  if (ingredient.unit != null && isSingular(amount)) {
    return singularUnit(ingredient.unit);
  }
  return ingredient.unit;
}

function isSingular(amount: number | undefined): boolean {
  return amount != null && amount <= 1;
}

export function servingIngredients(
  ingredients: Ingredient[],
  baseServings: number | undefined,
  servings: number
): ServingIngredient[] {
  return ingredients.map((ingredient) => {
    const amount = getIngredientAmount(ingredient, baseServings, servings);
    return {
      name: getIngredientName(ingredient, amount),
      amount: getIngredientAmountFormatted(amount),
      unit: getUnit(ingredient, amount),
      replacement: ingredient.replacement,
    };
  });
}
