import dynamic from "next/dynamic";
import { Test } from "../Test";

export const Components = {
  // Test: dynamic(() =>
  //   import("../Test").then((module) => ({
  //     default: module.Test,
  //   }))
  // ),
  Test,
};
