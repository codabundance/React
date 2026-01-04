import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";
const Home = () => {
  const itemsToShow = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {itemsToShow.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
export default Home;
