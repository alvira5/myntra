// import './App.css'
import Homeitem from "../Homeitem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  // console.log("items in Home:", items);

  // ✅ Handle loading or missing items
  if (!Array.isArray(items)) {
    return <p>Loading items or no items found.</p>;
  }

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <Homeitem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
