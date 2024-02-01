import { jewelryCollections } from "../../seed-data/seed-data"; 
import ReusablePages from "../../common/component/commonpages/CommonPage";


const EarRingsPage = () => {
  const earRingsCollection = jewelryCollections.find(
    (collection) => collection.name === "Earrings"
  );

  if (!earRingsCollection) return null;

  return <ReusablePages collection={earRingsCollection} />;
};

export default EarRingsPage;