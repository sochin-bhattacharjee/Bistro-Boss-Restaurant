import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const menuImg =
    "https://media.istockphoto.com/id/466771930/photo/table-setting.jpg?s=612x612&w=0&k=20&c=0jAnmMHcNJR7eNw5wSvnmXJdLwINcWE6icsC8t4KgBM=";
  return (
    <div className="mb-10">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} tittle="Our Menu"></Cover>
      {/* menu category */}
      <div className="mt-10 flex flex-col gap-5">
        <SectionTittle
          subHeading="Don't miss"
          heading="Today's Offer"
        ></SectionTittle>
        {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* dessert menu */}
      <div className="mt-10 flex flex-col gap-5">
        <Cover img={dessertImg} tittle="Today's Dessert"></Cover>
        <SectionTittle
          subHeading="Don't miss"
          heading="Today's Dessert"
        ></SectionTittle>
        <MenuCategory items={dessert} tittle={"dessert"}>
        </MenuCategory>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <Cover img={pizzaImg} tittle="Today's Pizza"></Cover>
        <SectionTittle
          subHeading="Don't miss"
          heading="Today's Pizza"
        ></SectionTittle>
        <MenuCategory items={pizza} tittle={"pizza"}>
        </MenuCategory>
      </div>
      
      <div className="mt-10 flex flex-col gap-5">
        <Cover img={soupImg} tittle="Today's Soup"></Cover>
        <SectionTittle
          subHeading="Don't miss"
          heading="Today's Soup"
        ></SectionTittle>
        <MenuCategory items={soup} tittle={"soup"}>
        </MenuCategory>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <Cover img={saladImg} tittle="Today's Salad"></Cover>
        <SectionTittle
          subHeading="Don't miss"
          heading="Today's Salad"
        ></SectionTittle>
        <MenuCategory items={salad} tittle={"salad"}>
        </MenuCategory>
      </div>
    </div>
  );
};
export default Menu;
