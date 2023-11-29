import { ScriptProps } from "next/script";

interface Props extends ScriptProps {}

const Timeline = (props: Props) => {
  const { className } = props;
  return (
    <div className={className?className:""}>
      pinga
    </div>
  )
}

export default Timeline;
