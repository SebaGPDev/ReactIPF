import React from "react";

export default function Button(props) {
  const { color, texto } = props;
  return (
    <input type="button" value={texto} style={{"background-color":`${color}`}}/>
  );
}
