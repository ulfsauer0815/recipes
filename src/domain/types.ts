export interface Ingredient {
  name: string;
  quantity?: number;
  unit?: string;
  replacement?: string;
}

export interface Step {
  description: string;
  ingredients?: Ingredient[];
}
