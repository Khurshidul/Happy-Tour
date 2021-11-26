import React from 'react';
import news1 from '../../../images/news/24.jpg';
import news2 from '../../../images/news/34.jpg';
import news3 from '../../../images/news/43.jpg';
import './News.css';
const News = () => {
    return (

        <div className="news-portal">
            <h1 className="news-header text-primary">News Portal</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img style={{ width: "400px", height: "400px" }} src={news1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="mt-5 card-body">
                            <h5 className="card-title"> Lalbagh Fort</h5>
                            <p className="card-text">Due to Mughal Empire and British East India Company reign, Bangladesh is full of rich history and resources. The Partition of Bengal and later the Independence from Pakistan has left Bangladesh with diverse culture, awakening and rebellious nation. Today, we have found out the Top 10 Historical Places in Bangladesh.
                            </p>
                            <button className="btn btn-danger">Read More.</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="card-group news-card">
                    <div className="">
                        <img className="img img-fluid" src={news3} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ahsan Manzil:</h5>
                            <p className="card-text">Initially, it was a vacation house for a Zamindar of Jamalpur district, Sheikh Enayet Ullah. After his death, his son sold this property to the French traders in 1740. They dug a pond in front of the building where fresh water could be fetched. After having a great business in the subcontinent for almost a century, they surrendered under the full British power and sold all of their properties.</p>
                            <button className="btn btn-danger">Read More.</button>
                        </div>
                    </div>


                </div>
                <div className="card-group news-card">
                    <div className="">
                    <img className="img-fluid" src={news2} class="card-img-top" alt="..." />

                        <div className="card-body">
                            <h5 className="card-title">Panam City</h5>
                            <p className="card-text">The city is located in Sonargaon of Narayanganj, just beside the capital, Dhaka. The ancient architecture of Mughal period is found here. Baro-Bhuiyans used to rule here. It was within the capital in that time. As a capital, Sonargaon was enriched with architectural beauties. Numerous British Colonial monuments and forts are seen across this 20km area.</p>
                            <button className="btn btn-danger">Read More.</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default News;