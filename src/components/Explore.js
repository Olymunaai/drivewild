import React, {useState} from 'react'

const Explore = () => {

    const tours = [
        {
            img: "/img/off-road.jpg",
            title: "Traverse Mountains",
            perks: ["4 hours of driving", "stunning views", "passengers welcome", "scheduled stops for photography"],
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis volutpat purus, et scelerisque purus tempus et. Fusce in tempus nisl. Curabitur in gravida lectus, dictum viverra tellus. Duis pellentesque sapien orci, sit amet pretium massa egestas ut. Fusce et tempor libero, ac fringilla felis. Sed sapien orci, imperdiet a ex consequat, bibendum tempor erat. Curabitur rhoncus hendrerit metus, sed aliquet purus gravida ullamcorper. Vestibulum non pharetra lectus, in ultricies ante. Morbi facilisis id nibh at hendrerit.",
            color1: "#a6683c",
            color2: "#b49896",
            price: 359.99,
            id:1
        },
        {
            img: "/img/muddy.jpg",
            title: "Venture through Forests",
            perks: ["2.5 hours of driving", "lots of mud!", "passengers welcome", "winch demonstration"],
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis volutpat purus, et scelerisque purus tempus et. Fusce in tempus nisl. Curabitur in gravida lectus, dictum viverra tellus. Duis pellentesque sapien orci, sit amet pretium massa egestas ut. Fusce et tempor libero, ac fringilla felis. Sed sapien orci, imperdiet a ex consequat, bibendum tempor erat. Curabitur rhoncus hendrerit metus, sed aliquet purus gravida ullamcorper. Vestibulum non pharetra lectus, in ultricies ante. Morbi facilisis id nibh at hendrerit.",
            color1: "#424842",
            color2: "#5B563B",
            price: 269.99,
            id:2
        },
        {
            img: "/img/interior.jpg",
            title: "off-road crash course",
            perks: ["3 hours of driving", "professional instructor", "become an expert", "complete the wild trail"],
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis volutpat purus, et scelerisque purus tempus et. Fusce in tempus nisl. Curabitur in gravida lectus, dictum viverra tellus. Duis pellentesque sapien orci, sit amet pretium massa egestas ut. Fusce et tempor libero, ac fringilla felis. Sed sapien orci, imperdiet a ex consequat, bibendum tempor erat. Curabitur rhoncus hendrerit metus, sed aliquet purus gravida ullamcorper. Vestibulum non pharetra lectus, in ultricies ante. Morbi facilisis id nibh at hendrerit.",
            color1: "#646464",
            color2: "#6A6869",
            price: 279.99,
            id:3
        },
    ]

    const [popupInfo, setPopupInfo] = useState()

    const openPopup = tour => {
        setPopupInfo(tour)
    }

    return (
        <section className="explore" id="explore">
            <div className="explore__clip-path"></div>
                <h2 className="explore__title section__title">Select from a range of packages</h2>
                <div className="explore__container">

                {tours.map(tour => (
                <div className="explore__container--card" key={tour.id} style={{backgroundImage: `linear-gradient(to bottom right, ${tour.color1} 25%, ${tour.color2})`}}>
                    <img src={tour.img} className="explore__container--card-image" alt="tour"/>
                    <h3 className="explore__container--card-title">{tour.title}</h3>
                    <div className="explore__container--card-content">
                    <ul className="explore__container--card-list">
                        {tour.perks.map(perk => (
                        <li className="explore__container--card-item" key={perk}>{perk}</li>
                        ))}
                    </ul>
                    <a href="#popup" className="explore__container--card-button" onClick={e => openPopup(tour)}>Learn more</a>
                    </div>
                </div>
                ))}
            </div>
            {/* POPUP */}
            {popupInfo && <div className="explore__popup" id="popup" key={popupInfo.id}>
                <div className="explore__popup--container" style={{backgroundImage: `linear-gradient(to bottom right, ${popupInfo.color1} 25%, ${popupInfo.color2})`}}>
                    <a href="#explore" className="explore__popup--close">&times;</a>
                <div className="explore__popup--left">
                    <img src={popupInfo.img} className="explore__popup--image" alt="tour"/>
                    <h4 className="explore__popup--title">{popupInfo.title}</h4>
                </div>
                    <div className="explore__popup--right">
                    <p className="explore__popup--text">{popupInfo.info}</p>
                    <h5 className="explore__popup--price">experience cost: £{popupInfo.price}</h5>
                    <a href="#home" className="explore__container--card-button">Click here to book</a></div>
                </div>
            </div>}

        </section>
    )
}

export default Explore
