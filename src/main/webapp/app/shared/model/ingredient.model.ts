export interface IIngredient {
  id?: number;
  name?: string;
  description?: string | null;
  amount?: number | null;
  weight?: number | null;
}

export const defaultValue: Readonly<IIngredient> = {};
