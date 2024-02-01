import CommonPage from "../../common/component/commonpages/CommonPage";
import { jewelryCollections } from "../../seed-data/seed-data"; 

const NecklacesPage= () => {
  const necklaceCollection = jewelryCollections.find(
    (collection) => collection.name === "Necklaces"
  );

  if (!necklaceCollection) return null;

  return <CommonPage collection={necklaceCollection} />;
};

export default NecklacesPage;
