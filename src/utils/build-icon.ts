import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Icon } from "../components/common/icon";

export const BuildIcon = (
  body: IconProp,
  handleClick: (() => void) | undefined
): Icon => ({
  body,
  handleClick: handleClick || ((): void => {})
});

export const BuildIcons = (
  iconDatas: {
    body: IconProp;
    handleClick: (() => void) | undefined;
  }[]
): Icon[] => iconDatas.map(data => BuildIcon(data.body, data.handleClick));

export const BuildNoActionIcons = (iconProps: IconProp[]): Icon[] => {
  return BuildIcons(
    iconProps.map(icon => ({ body: icon, handleClick: undefined }))
  );
};
