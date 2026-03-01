import { useContext} from "react";
import { ShopContext } from "../contexts/ShopContext";
import Items from "./Items";
import Title from "./Title";

const ProductSections = () => {
  const { products } = useContext(ShopContext);

  // const latestProduct = useMemo(() => {
  //   return products?.slice(0, 10) ?? [];
  // }, [products]);

  if (!products || products.length === 0) {
    return (
      <section className="w-full mb-4">
        <h1 className="animate-pulse w-96 h-20 bg-gray-300 mb-6"></h1>
        <div className="animate-pulse grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-40 bg-gray-300 rounded"></div>
          ))}
        </div>
      </section>
    );
  }

  const latestProducts = products?.slice(0, 10);

  return (
    <section className="my-2 mx-3 p-2">
      <Title title={"PRODUCT"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map(({ _id, image, title, price }) => (
          <Items key={_id} id={_id} image={image} title={title} price={price} />
        ))}
      </div>
    </section>
  );
};

export default ProductSections;
