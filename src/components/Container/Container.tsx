import React from "react";
import styles from "./Container.module.scss";
const Container: React.FC<{
  className?: string;
}> = (props) => {
  return (
    <div className={`${styles.container} ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

export default Container;
