import tool from "./main";

tool({
  root: process.cwd(),
  git: {
    config: ["user.name=willy874", "user.email=willy8742891@gmail.com"],
  },
});
