import React from "react";
const Effects = () => {
  const [top, setTop] = React.useState(window.scrollY);
  const [toggle, setToggle] = React.useState(false);
  const [width, setWidth] = React.useState(document.body.clientWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.body.clientWidth);
    });
    window.addEventListener("scroll", () => {
      setTop(window.scrollY);
    });
  }, []);

  return { top, width, toggle, setToggle };
};

export default Effects;
