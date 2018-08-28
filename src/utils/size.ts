import { Style } from "../components/common/style-props";

export function Size(style: Style | undefined): Style {
  const _style = style || { height: "100%", width: "100%" };
  const defaultStyle = (size: string | undefined): string => {
    let _size = size || "100%";
    return !/^\d+$/.test(_size) ? _size : `${_size}px`;
  };

  return {
    width: defaultStyle(_style.width),
    height: defaultStyle(_style.height)
  };
}
