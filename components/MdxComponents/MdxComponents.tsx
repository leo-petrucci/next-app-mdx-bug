import dynamic from "next/dynamic";

export const Components = {
  Test: dynamic(() =>
    import("../Test").then((module) => ({
      default: module.Test,
    }))
  ),
};
