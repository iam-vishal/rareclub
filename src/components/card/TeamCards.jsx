const TeamCard = ({ item, index }) => {
  return (
    <div className={`team_box`}>
      <img src={item?.img?.src} className="img-fluid" alt={"team"} />
    </div>
  );
};
export default TeamCard;
