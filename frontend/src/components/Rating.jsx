import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text }) => {

    // Rating function for each Product
    const renderStars = () => {
        const stars = [];
    
        for (let i = 5; i >= 1; i--) {
          if (value >= i) {
            stars.unshift(<FaStar key={i} />);
          } else if (value < i && value >= i - 0.5) {
            stars.unshift(<FaStarHalfAlt key={i} />);
          } else {
            stars.unshift(<FaRegStar key={i} />);
          }
        }
    
        return stars;
      };

  return (
    <div className='rating'>  {/* Ratings for each Product */}
        <span>
             {renderStars()}  
        </span>
        <span className='rating-text'>{text && text}</span>
    </div>
  )
}

export default Rating