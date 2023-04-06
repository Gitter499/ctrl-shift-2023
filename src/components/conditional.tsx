import { FC } from "react";

type Props = {
  condition: any;
  children: React.ReactNode;
};

export const Conditional: FC<Props> = ({ children, condition }) =>
  condition ? <>{children}</> : <></>;
