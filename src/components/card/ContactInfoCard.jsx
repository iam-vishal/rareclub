import Link from "next/link";

const ContactInfoCard = ({ list, type, icon, spacing }) => {
  return (
    <div className="info">
      <div className="circle d-flex justify-content-center align-items-center">
        {icon}
      </div>
      {list?.map((item, idx) => (
        <div className="info_content" key={idx + 1}>
          <div className="subbtitle">For general help</div>
          <div className="title">
            {type ? (
              <Link href={`${type}`} target="_blank" className="text-white">
                {item}
              </Link>
            ) : (
              item
            )}
          </div>
        </div>
      ))}
      {spacing && (
        <>
          <br />
          <br />
        </>
      )}
    </div>
  );
};
export default ContactInfoCard;
