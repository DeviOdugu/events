// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {imageSrc, alt, heading, content} = props
  return (
    <div className="container">
      <img src={imageSrc} alt={alt} height="200px" width="200px" />
      <h1 className="heading"> {heading} </h1>
      <p className="content"> {content} </p>
    </div>
  )
}
export default ActiveEventRegistrationDetails
