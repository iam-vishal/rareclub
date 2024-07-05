import zomato from "@/assets/img/svg/zomato.svg";
const Collaborator = ({ item }) => {
  return (
    <div className="collab_box">
      <div className="content">
        <img src={item.image?.src} className="img-fluid" alt={"team"} />
      </div>
    </div>
  );
};
export default Collaborator;
