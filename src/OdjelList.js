import React from "react";
import classes from "./App.module.css";
import ItemCard from "./ItemCard";
const DUMMY_DATA = [
  {
    id: "OA1",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel A",
    odjeldesc: "Uhljebništvo",
  },
  {
    id: "OA2",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel B",
    odjeldesc: "Tajništvo",
  },
  {
    id: "OA3",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel C",
    odjeldesc: "Tajništvo",
  },
  {
    id: "OA4",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel D",
    odjeldesc: "Tajništvo",
  },
  {
    id: "OA5",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel E",
    odjeldesc: "Tajništo",
  },
  {
    id: "OA5",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel E",
    odjeldesc: "Tajništo",
  },
  {
    id: "OA5",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel E",
    odjeldesc: "Tajništo",
  },
  {
    id: "OA5",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel E",
    odjeldesc: "Tajništo",
  },
  {
    id: "OA5",
    icon: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
    odjeltitle: "Odjel E",
    odjeldesc: "Tajništo",
  },
];

export default function OdjelList() {
  return (
    <div className={classes.pageContainer}>
      <span className={classes.appTitle}>RED U RED </span>
      <button className={classes.btnExit}>IZLAZ</button>

      <div className={classes.cardsContainer}>
        <span className={classes.odjelcontainertitle}>Popis odjela</span>

        <ul className={classes.listGridContainer}>
          {DUMMY_DATA.map((i) => (
            <li className={classes.listItemContainer}>
              <ItemCard
                key={i.id}
                icon={i.icon}
                odjeltitle={i.odjeltitle}
                odjeldesc={i.odjeldesc}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

