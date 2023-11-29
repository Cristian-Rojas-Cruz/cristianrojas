import { ScriptProps } from "next/script";
import { backgroundColors } from "@/utils/types";

interface Props extends ScriptProps {
  bg: [backgroundColors, ...backgroundColors[]];
}

const Background = (props: Props) => {
  const { bg, children, className } = props;
  return(
  <>
    <div className={`${className? className:""} bg ${bg.length > 1?"bg--columns-"+bg.length:""} ${bg.length===1?"bg-"+bg[0]:""}`}>
      {
        children?
        Object.values(children).map((child, index) => {
          return (
            <div key={index} className={`bg-${bg[index]}`}>
                {child}
            </div>
          )
        }):""
      }
    </div>
  </>

  )
  
}

export default Background;