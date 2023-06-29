import { Poppins } from "next/font/google";
const poppin = Poppins;
export function fontPoppinReturn<
  T extends
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900")
>(weights: T[]) {
  return poppin({
    weight: "500",
    style: ["normal"],
    subsets: ["devanagari"],
  });
}
