import React, { useState } from "react";
import {
  IconChallenge,
  IconClose,
  IconInfo,
  IconLogo,
  IconMemo,
  IconMenu,
} from "../Icons/headerIcon";
import { useNavigate } from "react-router-dom";
import { Popover } from "react-tiny-popover";

const Header = () => {
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const ItemMenu = [
    {
      icon: <IconMemo />,
      text: "自分の記録",
      onClick: () => navigate("/detail"),
    },
    {
      icon: <IconChallenge />,
      text: "チャレンジ",
      onClick: () => {},
    },
    {
      icon: <IconInfo />,
      text: "お知らせ",
      onClick: () => {},
      showNumber: 1,
    },
  ];
  return (
    <div
      className="flex-row main-header"
      style={{ justifyContent: "space-between" }}
    >
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <IconLogo />
      </div>
      <div className="flex-row">
        {ItemMenu?.map((item, index) => (
          <div
            key={index.toString()}
            onClick={item.onClick}
            className="item-header flex-row"
          >
            {item.showNumber && (
              <span className="item-header-number">{item.showNumber}</span>
            )}
            <span>{item.icon}</span>
            {item.text && (
              <span
                style={{ marginLeft: 8, color: index === 0 ? "#FF963C" : "" }}
              >
                {item.text}
              </span>
            )}
          </div>
        ))}
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom"]}
          content={
            <div
              style={{
                backgroundColor: "#777777",
                padding: "24px 24px 12px 24px",
                color: "#FFF",
              }}
            >
              {[
                {
                  text: "自分の記録",
                  onClick: () => {},
                },
                {
                  text: "体重グラフ",
                  onClick: () => {},
                },
                {
                  text: "目標",
                  onClick: () => {},
                },
                {
                  text: "選択中のコース",
                  onClick: () => {},
                },
                {
                  text: "コラム一覧",
                  onClick: () => {
                    navigate("/list");
                    setIsPopoverOpen(false);
                  },
                },
                {
                  text: "設定",
                  onClick: () => {},
                },
              ].map((item, index) => (
                <div
                  onClick={item.onClick}
                  key={index.toString()}
                  style={{
                    cursor: "pointer",
                    marginBottom: 24,
                  }}
                >
                  {item.text}
                </div>
              ))}
            </div>
          }
        >
          <div
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            style={{ cursor: "pointer", marginLeft: 20 }}
          >
            {isPopoverOpen ? <IconClose /> : <IconMenu />}
          </div>
        </Popover>
      </div>
    </div>
  );
};
export default Header;
