import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Icon {
  body: IconProp;
  handleClick(): void;
}

export interface BothSideSymbol {
  leftSymbol: string;
  rightSymbol: string;
}

export type Clicker = (e?: Event) => void;

export interface IconData {
  icon: IconProp;
  attach: BothSideSymbol | Clicker;
  isCode?: boolean;
}

export interface IconDatas {
  textGroup: IconData[];
  funcGroup: IconData[];
  orderGroup: IconData[];
}
