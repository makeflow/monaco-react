import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBold,
  faCode,
  faHeading,
  faImage,
  faItalic,
  faLink,
  faListOl,
  faListUl,
  faQuoteRight,
  faStrikethrough,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

import { editorStore } from "../../build-stores";
import { XTypeof, attachSymbol } from "../../utils";

import { BothSideSymbol, Clicker, Icon, IconDatas } from "./icon-type";

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

export const iconConfigs: IconDatas = {
  textGroup: [
    {
      icon: faHeading,
      attach: () => (editorStore.isView = !editorStore.isView)
    },
    {
      icon: faBold,
      attach: {
        leftSymbol: "**",
        rightSymbol: "**"
      }
    },
    {
      icon: faItalic,
      attach: {
        leftSymbol: "_",
        rightSymbol: "_"
      }
    },
    {
      icon: faStrikethrough,
      attach: {
        leftSymbol: "~~",
        rightSymbol: "~~"
      }
    }
  ],
  funcGroup: [
    {
      icon: faLink,
      attach: {
        leftSymbol: "[",
        rightSymbol: "](url)"
      }
    },
    {
      icon: faQuoteRight,
      attach: {
        leftSymbol: "> ",
        rightSymbol: ""
      }
    },
    {
      icon: faCode,
      attach: {
        leftSymbol: "",
        rightSymbol: ""
      },
      isCode: true
    },
    {
      icon: faImage,
      attach: {
        leftSymbol: "![",
        rightSymbol: "](image-url)"
      }
    }
  ],
  orderGroup: [
    {
      icon: faListUl,
      attach: {
        leftSymbol: "- ",
        rightSymbol: ""
      }
    },
    {
      icon: faListOl,
      attach: {
        leftSymbol: "1.",
        rightSymbol: ""
      }
    },
    {
      icon: faTasks,
      attach: {
        leftSymbol: "-[] ",
        rightSymbol: ""
      }
    }
  ]
};
