import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { editorStore } from "../build-stores";
import { BothSideSymbol, Clicker, Icon } from "../components/common";

import { attachSymbol } from "./spliter";
import { XTypeof } from "./typeof";

export function buildIcon(
  icon: IconProp,
  target: BothSideSymbol | Clicker,
  isCode?: boolean
): Icon {
  let clicker: ((e?: Event) => void) | undefined;

  if (XTypeof<Clicker>(target, "Function")) {
    clicker = target;
  } else {
    clicker = () =>
      (editorStore.content = attachSymbol(
        target.leftSymbol,
        target.rightSymbol,
        isCode
      ));
  }

  return {
    body: icon,
    handleClick: clicker
  };
}
