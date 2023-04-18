import React from "react";

const Footer = () => {
  const ItemMenu = [
    {
      text: "会員登録",
      onClick: () => {},
    },
    {
      text: "運営会社",
      onClick: () => {},
    },
    {
      text: "利用規約",
      onClick: () => {},
    },
    {
      text: "個人情報の取扱について",
      onClick: () => {},
    },
    {
      text: "特定商取引法に基づく表記",
      onClick: () => {},
    },
    {
      text: "お問い合わせ",
      onClick: () => {},
    },
  ];
  return (
    <div
      className="flex-row"
      style={{
        padding: "0 160px 0 160px",
        height: 128,
        overflow: "hidden",
      }}
    >
      {ItemMenu?.map((item, index) => (
        <div
          key={index.toString()}
          onClick={item.onClick}
          className="flex-row"
          style={{ marginRight: 45 }}
        >
          <span style={{ marginLeft: 8 }}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};
export default Footer;
