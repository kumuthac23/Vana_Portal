// NecklacesPage.tsx
import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";



const NecklacesPage = () => {
  const { data: necklacesCollection, isLoading, isError } = useGetAllItemsByCollectionName("Necklaces");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching collection</p>}
      {necklacesCollection && <CommonPage collectionName="Necklaces" />}
    </>
  );
};

export default NecklacesPage;
