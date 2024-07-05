export const MemberCard = ({ item }) => {
  return (
    <div className="member-item">
      <div className="member-img">
        <img src={item.img.src} className="img-fluid" />
      </div>
      <div className="member_content">
        <div className="title">{item.title}</div>
        <div className="designation">{item.designation}</div>
      </div>
    </div>
  );
};
