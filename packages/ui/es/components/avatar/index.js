import { cva as e } from "class-variance-authority";
import "vue";
import "clsx";
import "tailwind-merge";
import "radix-vue";
const a = e(
  "inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-10 w-10 text-xs",
        base: "h-16 w-16 text-2xl",
        lg: "h-32 w-32 text-5xl"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md"
      }
    }
  }
);
export {
  a as avatarVariant
};
//# sourceMappingURL=index.js.map
