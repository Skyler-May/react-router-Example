import { TestPage } from "~/pages/test";
import type { Route } from "./+types/testpage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "This  is a test" },
    { name: "description", content: "Hello Test" },
  ];
}

export default function Test() {
  return <TestPage />;
}
