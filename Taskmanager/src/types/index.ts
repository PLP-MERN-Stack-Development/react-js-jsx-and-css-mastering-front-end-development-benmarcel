// Define the structure of a task item
export interface item {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

export type Theme = "light" | "dark";
export type fetchItem ={
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}