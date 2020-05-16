// @flow

export type TCustomButtonProps = {
  children: string,
  isGoogleSignIn?: boolean,
  type?: string,
  inverted?: boolean,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
};
