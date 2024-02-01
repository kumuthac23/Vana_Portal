import CommonPage from "../../common/component/commonpages/CommonPage";
import { jewelryCollections } from "../../seed-data/seed-data"; 


const EarRingsPage = () => {
  const earRingsCollection = jewelryCollections.find(
    (collection) => collection.name === "Earrings"
  );

  if (!earRingsCollection) return null;

  return <CommonPage collection={earRingsCollection} />;
};

export default EarRingsPage;