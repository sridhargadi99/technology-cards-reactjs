// Write your code here.
import './index.css'

const CardItem = props => {
  const {listDetails} = props
  const {title, description, imgUrl, className} = listDetails

  return (
    <li className={`box ${className}`}>
      <div className="">
        <h1 className="head-style">{title}</h1>
        <p className="paragraph-style">{description}</p>
        <div className="img-box">
          <img src={imgUrl} className="img-style" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
