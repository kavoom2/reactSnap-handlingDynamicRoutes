#!/usr/bin/env node
// ! ES6 Module과 CommonJS Module을 Mixing하기 위해 "ESM" 패키지를 사용합니다.
// ** https://www.npmjs.com/package/esm
require = require("esm")(module);

// * 패키지 React Snap의 index.js | run.js를 사용헙니다.
// * 해당 스크립트 중 includes를 package.json에 의존하지 않고, React-Router에 따라 동적으로 변하도록 하였습니다.

const url = require("url");
const { run } = require("react-snap");
const {
  reactSnap,
  homepage,
  devDependencies,
  dependencies,
} = require(`${process.cwd()}/package.json`);

const { Routes } = require("../src/Routes");

const packages = require(`${process.cwd()}/package.json`);

console.log("패키지는...", packages);
console.log("ReactSnap Object is...", reactSnap);

const publicUrl = process.env.PUBLIC_URL || homepage;

console.log(devDependencies, dependencies);

const reactScriptsVersion = parseInt(
  (devDependencies && devDependencies["react-scripts"]) ||
    (dependencies && dependencies["react-scripts"])
);
let fixWebpackChunksIssue;
switch (reactScriptsVersion) {
  case 1:
    fixWebpackChunksIssue = "CRA1";
    break;
  case 2:
    fixWebpackChunksIssue = "CRA2";
    break;
}

run({
  publicPath: publicUrl ? url.parse(publicUrl).pathname : "/",
  fixWebpackChunksIssue,
  ...reactSnap,
  // ! inlcude를 Routes으로 덮어 씌우면 동적으로 출력할 수 있습니다.
  include: Routes,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
