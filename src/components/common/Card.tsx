import { ReactNode } from "react";

type Props = {
  styles?: string;
  bordered?: boolean;
  children: ReactNode;
};
const Card = ({ styles, bordered, children }: Props) => {
  return (
    <div
      className={`rounded-lg flex flex-col justify-start items-start ${
        bordered && "border border-purple-800 "
      } ${styles}`}
    >
      {children}
    </div>
  );
};

export default Card;
