import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants";
const CustomerReview = () => {
  return (
    <section className="max-container">
    <h3 className="text-center text-4xl font-bold font-palanquin">What our
    <span className="text-coral-red ">Customers</span> Say
    </h3>
    <p className="max-w-lg text-center info-text m-auto mt-4">Here Genuine Story from our satisified customers about their exceptional experiences</p>

    <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col" >
        {reviews.map((review) =>
        <CustomerReviewCard key={review.customerName} customerName ={review.customerName} imgURL={review.imgURL} feedback={review.feedback} rating = {review.rating}  />
        )}
    </div>
    </section>
  )
}

export default CustomerReview;