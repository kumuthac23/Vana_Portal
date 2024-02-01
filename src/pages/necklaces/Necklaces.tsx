import { jewelryCollections } from "../../seed-data/seed-data"; 
import ReusablePages from "../../common/component/commonpages/CommonPage";

const NecklacesPage= () => {
  const necklaceCollection = jewelryCollections.find(
    (collection) => collection.name === "Necklaces"
  );

  if (!necklaceCollection) return null;

  return <ReusablePages collection={necklaceCollection} />;
};

export default NecklacesPage;
