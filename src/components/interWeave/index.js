import react, { useEffect, useState } from "react";
import { Interweave } from "interweave";

const RenderContent = ({ desc, tagname }) => {
  const [content, setContent] = useState({
    desc: undefined,
    tagname: undefined,
  });

  useEffect(() => {
    setContent({
      desc,
      tagname,
    });
  }, [desc, tagname]);
  return <Interweave content={content.desc} tagName={content.tagname} />;
};
export default RenderContent;
