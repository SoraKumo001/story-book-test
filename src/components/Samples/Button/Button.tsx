import React, { FC } from "react";
import styled from "./Button.module.scss";

interface Props {
  onClick: () => void;
}

/**
 * Button
 *
 * @param {Props} { }
 */
export const Button: FC<Props> = ({ onClick }) => {
  return (
    <button className={styled.root} onClick={onClick}>
      Button
    </button>
  );
};
