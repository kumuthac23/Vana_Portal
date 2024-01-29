
import React from "react";
import { jewelryCollections } from "../../seed-data/seed-data"; 
import CollectionPage from "../../common/component/reusablecard/ReusableCard";

const EarRingsPage: React.FC = () => {
  const earRingsCollection = jewelryCollections.find(
    (collection) => collection._id === "jc2"
  );

  if (!earRingsCollection) return null;

  return <CollectionPage collection={earRingsCollection} />;
};

export default EarRingsPage;