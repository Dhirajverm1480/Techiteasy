import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { backendUrl } from "../App";
import { SearchItems } from "../components/Items";

const Results = () => {
  const [searchPramas] = useSearchParams();
  const query = searchPramas.get("query");
  const [searchProduct, setSearchProduct] = useState([]);

  const fetchSearchData = async () => {
    try {
      const response = await axios.get(
        // `http://localhost:5000/api/products/search?query=${query}`,
        backendUrl + `/api/v1/products?search=${query}`,
      );
      setSearchProduct(response.data.products);
    } catch (error) {
      console.log("Something Wrong: ", error);
    }
  };

  console.log("SearchData : ", searchProduct);

  useEffect(() => {
    if (query) fetchSearchData();
  }, [query]);

  return (
    <div className="p-5 page-frame">
      <h1 className="text-2xl font-bold py-5">Results for : {query}</h1>
      <section className="flex gap-10 pt-10 border-t rounded-lg">
        <div className="w-72 h-96 border-r rounded-lg"></div>
        <section className="w-full">
          {searchProduct.length === 0 ? (
            <section className="w-full min-h-screen flex justify-center items-center">
              <p>{query} : Not Found</p>
            </section>
          ) : (
            <section>
              {searchProduct.map(({ _id, image, title, price }) => (
                <SearchItems
                  key={_id}
                  id={_id}
                  image={image}
                  title={title}
                  price={price}
                />
              ))}
            </section>
          )}
        </section>
      </section>
    </div>
  );
};

export default Results;
