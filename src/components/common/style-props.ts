export interface Style {
  height?: string;
  width?: string;
}

export interface StyleProps {
  style?: Style;
}

export type ParsedStyleProps<T> = { [P in keyof T]-?: T[P] };
