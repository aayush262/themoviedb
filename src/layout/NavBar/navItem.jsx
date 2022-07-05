import FontAwesomeIcon from "react-fontawesome";

const NavItem = ({ items }) => {
  const getItem = (item) => {
    let itemJsx = null;
    switch (item.type) {
      case "image":
        itemJsx = (
          <img className="h-5 min-w-[154px]" src={item.src} alt={item.name} />
        );
        break;
      case "icon":
        itemJsx = <FontAwesomeIcon name={item.name} size="lg" />;
        break;
      case "language":
        itemJsx = (
          <p className="border-white border-solid rounded-[3px] py-[3px] px-[5px] border-[1px] hover:bg-white hover:text-tmdbDarkBlue">
            {item.name}
          </p>
        );
        break;
      default:
        itemJsx = <p>{item.name}</p>;
    }
    return itemJsx;
  };

  return (
    <ul className="flex items-center gap-7">
      {items.map((item) => {
        return <li key={item.name}>{getItem(item)}</li>;
      })}
    </ul>
  );
};

export default NavItem;
