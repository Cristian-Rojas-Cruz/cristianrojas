import { ScriptProps } from "next/script";

type backgroundColors = "purple" | "gray" | "transparent" ;

interface Props extends ScriptProps {
  bg: [backgroundColors, ...backgroundColors[]];

}

const Section = (props: Props) => {
  const { bg, children } = props;
  return(
  <>
    <div className={`section ${bg.length > 1?"section--columns-"+bg.length:""} ${bg.length===1?"bg-"+bg[0]:""}`}>
      {
        children?
        Object.values(children).map((children, index) => {
          return (
            <div key={index} className={`bg-${bg[index]}`}>{children}</div>
          )
        }):""
      }
    </div>
  </>

  )
  
}

export default Section;