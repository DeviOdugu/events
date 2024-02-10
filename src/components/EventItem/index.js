// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, eventClicked, isActive} = props
  const {imageUrl, name, location} = eventItemDetails

  const activeEvent = isActive ? 'event-button-outline' : 'event-button'
  const onClickEvent = () => {
    eventClicked(eventItemDetails)
  }

  return (
    <li className="list">
      <button type="button" onClick={onClickEvent} className={activeEvent}>
        <img src={imageUrl} alt="event" height="100px" width="200px" />
      </button>
      <p className="name"> {name} </p>
      <p className="location"> {location} </p>
    </li>
  )
}

export default EventItem
