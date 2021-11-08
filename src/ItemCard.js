import classes from "./itemcard.module.css";
function ItemCard(props) {
  return (
      <div className={classes.cardItem}>
        <img src={props.icon} className={classes.odjelIcon}></img>
        <span className={classes.odjelTitle}>{props.odjeltitle}</span>
        <span className={classes.odjelDesc}>{props.odjeldesc}</span>
        <button className={classes.btnUred}>STANI U RED</button>
      </div>
  );
}

export default ItemCard;
