import { jewelryCollections } from "../../seed-data/seed-data";
import CommonPage from "../../common/component/commonpages/CommonPage";

const BraceletsPage = () => {
  const braceletsCollection = jewelryCollections.find(
    (collection) => collection.name === "Bracelets"
  );

  if (!braceletsCollection) return null;

  return <CommonPage collection={braceletsCollection} />;
};

export default BraceletsPage;
