import React from "react";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isShow, setShow] = useState(false);
  const toggleDetail = () => {
    if (isShow === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="border-bottom">
      {/* main section */}
      <div
        className="d-flex align-items-center p-3"
        onClick={() => {
          toggleDetail();
        }}
      >
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {!isShow && <IconChevronDown />}
        {isShow && <IconChevronUp />}
      </div>
      {/* UserCardDetail is hidden */}
      {isShow && (
        <div>
          <UserCardDetail
            key={props.name}
            email={props.email}
            address={props.address}
          />
        </div>
      )}
    </div>
  );
}
