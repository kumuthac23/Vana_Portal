import { jewelryCollections } from "../../seed-data/seed-data"; 
import CommonPages from "../../common/component/commonpages/CommonPage";

const BraceletsPage = () => {
  const braceletsCollection = jewelryCollections.find(
    (collection) => collection.name === "Bracelets"
  );

  if (!braceletsCollection) return null;

  return <CommonPages collection={braceletsCollection} />;
};

export default BraceletsPage;