import Marquee from "react-fast-marquee";

const Highlight = () => {
    const marqueeOffers = [
        {
            id: 1,
            text: "🐄 Eid-ul-Adha Special! Pre-book your Qurbani animal today & get up to 15% OFF + Free Home Delivery! 🚚 Limited slots available!",
            type: "discount",
            highlight: true
        },
        {
            id: 2,
            text: "🎉 Pre-Booking Offer Live Now! Book your Qurbani animal early & enjoy exclusive discounts, verified sellers & hassle-free delivery!",
            type: "offer",
            highlight: false
        },
        {
            id: 3,
            text: "⚡ Hurry! Early Bird Qurbani Deals Ending Soon! Secure your animal before prices go up!",
            type: "urgent",
            highlight: true
        },
        {
            id: 4,
            text: "✅ Trusted Sellers | Healthy Animals | Easy Booking — Pre-book now for a stress-free Qurbani experience!",
            type: "trust",
            highlight: false
        },
        {
            id: 5,
            text: "🎁 Pre-book today & get FREE veterinary check + priority delivery before Eid! Don’t miss out!",
            type: "bonus",
            highlight: true
        }
    ];

    return (
        <div className="flex gap-2 bg-purple-50 p-2 rounded-md">
            <button className="btn btn-sm bg-purple-400 text-white font-semibold animate__animated animate__pulse">Offers:</button>
            <Marquee>
                {
                    marqueeOffers.map((offer, index) => 
                    <div key={index} className="ml-10 flex gap-10">
                            <span><span className="capitalize">{offer.type}</span>: {offer.text}</span>
                            <span>|</span>
                        </div>)
                }
            </Marquee>
        </div>
    );
};

export default Highlight;