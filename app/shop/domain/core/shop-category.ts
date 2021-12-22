export const categories = ["featured", "clothes", "accessories", "prothesis", "art", "others"] as const;

export type ShopCategory = typeof categories[number] | "article";