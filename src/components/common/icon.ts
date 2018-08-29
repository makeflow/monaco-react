import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Icon {
  body: IconProp;
  handleClick(): void;
}
