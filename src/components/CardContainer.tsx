import { ScriptProps } from "next/script";
import Background from "./Background";
import { backgroundColors } from "@/utils/types";

interface Props extends ScriptProps {
  bg: backgroundColors
}

const CardContainer = (props: Props) => {
  const { bg, children, className } = props;
  console.log(children)
  return (
    <Background className={`${className?className:""} card-container`} id="about-me" bg={[bg]}>
      {
        children?
        Object.values(children).map((child) => {
          return child
        }):""
      }
    </Background>
  )
}

export default CardContainer;
