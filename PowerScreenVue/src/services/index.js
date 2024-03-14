import HYRequest from "./request/index";

export function getPowerScreenData() {
  return HYRequest.get({
    url: "/powerscreen",
  });
}
