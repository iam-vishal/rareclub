const BrandCard = ({ item }) => {
  return (
    <div className="team_box">
      <img src={item?.image?.src} className="img-fluid my-auto" alt={"team"} />
    </div>
  );
};
export default BrandCard;
