import "./PlaceList.css";
import React from "react";
import Card from "../../shared/components/UiElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className={"place-list center"}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={"place-list"}>
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;