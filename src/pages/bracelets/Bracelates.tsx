
import React from "react";
import { jewelryCollections } from "../../seed-data/seed-data"; 
import CollectionPage from "../../common/component/reusablecard/ReusableCard";

const BraceletsPage: React.FC = () => {
  const braceletsCollection = jewelryCollections.find(
    (collection) => collection._id === "jc3"
  );

  if (!braceletsCollection) return null;

  return <CollectionPage collection={braceletsCollection} />;
};

export default BraceletsPage;