import { cva, type VariantProps } from "class-variance-authority";

export const ButtonVariants = cva("p-2.5 rounded-md cursor-pointer", {
  variants: {
    variant: {
      primary:
        "bg-(--bg-dimmed) text-(--bg) font-medium text-sm hover:bg-(--bg-light-dimmed)",
      secondary: "text-(--text-light) font-medium text-sm hover:text-(--text)",
      optional: "text-(--text-light) hover:bg-(--bg-dark)",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
