// BraceletsPage.tsx
import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";

 

const Bracelets = () => {
  const { data: BraceletsCollection, isLoading, isError } = useGetAllItemsByCollectionName("Bracelets");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching collection</p>}
      {BraceletsCollection && <CommonPage collection={BraceletsCollection}/>}
    </>
  );
};

export default Bracelets;
