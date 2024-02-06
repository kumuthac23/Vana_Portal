// EarringsPage.tsx
import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";



const Earrings = () => {
  const { data: EarringsCollection, isLoading, isError } = useGetAllItemsByCollectionName("Earrings");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching collection</p>}
      {EarringsCollection && <CommonPage collectionName="Earrings" />}
    </>
  );
};

export default Earrings;
