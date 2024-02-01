// NecklacesPage.tsx

import React from "react";
import { jewelryCollections } from "../../seed-data/seed-data"; 
import CollectionPage from "../../common/component/reusablepages/ReusablePage";

const NecklacesPage: React.FC = () => {
  const necklaceCollection = jewelryCollections.find(
    (collection) => collection._id === "jc1"
  );

  if (!necklaceCollection) return null;

  return <CollectionPage collection={necklaceCollection} />;
};

export default NecklacesPage;
