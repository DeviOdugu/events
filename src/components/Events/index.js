import {Component} from 'react'
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import './index.css'

const registrationStatusForEvent = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here

class Events extends Component {
  state = {
    currentRegistrationStatus: registrationStatusForEvent.initial,
    registrationId: null,
  }

  initialState = () => (
    <p className="initial">
      Click on an event, to view its registration details
    </p>
  )

  yetToRegister = () => (
    <div className="r">
      <ActiveEventRegistrationDetails
        imageSrc="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        heading="Yet to Register"
        content="A live performance brings so much to your relationship with dance. Seeing dance live can often make you fall totally in love with this beautiful art form."
      />
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  registered = () => (
    <div className="r">
      <ActiveEventRegistrationDetails
        imageSrc="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        heading="You have already registered for the event"
      />
    </div>
  )

  registrationsClosed = () => (
    <div className="r">
      <ActiveEventRegistrationDetails
        imageSrc="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        heading="Registrations Are Closed Now!"
        content="Stay tuned. We will reopen the registrations soon!"
      />
    </div>
  )

  registrationStatusResult = () => {
    const {currentRegistrationStatus} = this.state

    switch (currentRegistrationStatus) {
      case registrationStatusForEvent.initial:
        return this.initialState()
      case registrationStatusForEvent.yetToRegister:
        return this.yetToRegister()
      case registrationStatusForEvent.registered:
        return this.registered()
      case registrationStatusForEvent.registrationsClosed:
        return this.registrationsClosed()
      default:
        return null
    }
  }

  eventClicked = eventDetails => {
    const {id, registrationStatus} = eventDetails
    this.setState({
      currentRegistrationStatus: registrationStatus,
      registrationId: id,
    })
  }

  render() {
    const {registrationId} = this.state
    return (
      <div className="card-container">
        <div className="event-card">
          <h1 className="main-heading"> Events </h1>
          <ul className="event-lists">
            {eventsList.map(eachEvent => (
              <EventItem
                key={eachEvent.id}
                eventItemDetails={eachEvent}
                eventClicked={this.eventClicked}
                isActive={eachEvent.id === registrationId}
              />
            ))}
          </ul>
        </div>
        {this.registrationStatusResult()}
      </div>
    )
  }
}

export default Events
