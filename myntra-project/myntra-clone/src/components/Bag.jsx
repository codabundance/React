import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItemsIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const itemsInBag = items.filter((item) => bagItemsIds.indexOf(item.id) >= 0);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {itemsInBag.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
