import type { Metadata } from "next";
import MyPlanClient from "./MyPlan";

export const metadata: Metadata = {
  title: "FitLog | My Plan",
};

export default function Page() {
  return <MyPlanClient />;
}
