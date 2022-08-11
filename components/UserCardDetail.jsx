import React from "react";
import { IconMailForward, IconMapPins } from "@tabler/icons";

export default function UserCard(props) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {props.email}
      </p>
      <p>
        <IconMapPins /> A{props.address}
      </p>
    </div>
  );
}
