import {useState} from "react"
import data from "./data"

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const {image, name, job, text} = data[index]; 

    const showPreviews = () => index == 0 ? setIndex(data.length - 1) : setIndex(index - 1)
    const showNext = () => index == data.length - 1 ? setIndex(0) : setIndex(index + 1)
    const randomReview = () => {
        let randNum = Math.floor(Math.random() * data.length);
        index !== randNum ? setIndex(randNum) : randomReview();
    }

    return (
        <section className="reviews-container">
            <img src={image} alt={name}></img>

            <footer className="reviews-info">
                <h4 className="name">{name}</h4>
                <p className="job">{job}</p>
                <p className="text">{text}</p>
                <div>
                    <button className="prev-btn" onClick={showPreviews}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button className="next-btn" onClick={showNext}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <button className="random-btn" onClick={randomReview}>random review</button>
            </footer>
        </section>
    )
}

export default Reviews;