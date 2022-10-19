import React from "react";

export default function Saludar(props) {
  const { name, surname, children } = props;
  return (
    <div>
      Saludando a {name} {surname}
      <div>{children}</div>
    </div>
  );
}
