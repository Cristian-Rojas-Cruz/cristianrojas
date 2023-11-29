import CardContainer from "@/components/CardContainer";
import TimelineComponent from "@/components/Timeline";

const Timeline = () => {
  return (
    <div className="section">
      <h2>Timeline</h2>
      <div className="timeline">
        <CardContainer className="df" bg="purple">
          <h3>dfda</h3>
          <div>pinga</div>
        </CardContainer>
        <TimelineComponent className="buenass"/>
        <CardContainer bg="blue"/>
      </div>
    </div>
  )
}

export default Timeline;