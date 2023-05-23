import { ScriptProps } from "next/script";

type backgroundColors = "purple" | "gray" | "lightgray";

interface Props extends ScriptProps {
  bg: backgroundColors[];
}

const Section = (props: Props) => {
  const { bg } = props;
  // console.log(props.children)
  return(
<>

    <div className={`section ${props.bg.length > 1?"section--grid":""} ${props.bg.length===1?"bg-"+props.bg[0]:""}`}>
      { props.children }
    </div>
</>

  )
  
}

export default Section;