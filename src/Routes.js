// * NodeJS에서 사용되는 모듈 문법을 사용해야 합니다. (Import + Export는 ES6 문법입니다.)

// ** Export: module.exports 또는 exports 를 사용해야 합니다.
// ** Import: require("...")
import * as routes from "./es6Module";

// export const Routes = ["/a", "/b", "/c", "/d"];
export const Routes = [
  routes.route1,
  routes.route2,
  routes.route3,
  routes.route4,
];
