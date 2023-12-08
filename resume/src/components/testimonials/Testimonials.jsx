import "./Testimonials.scss";
export function Testimonials() {
  const data = [
    {
      id: "1",
      name: "Nina Kurika",
      title: "CEO Trimsdev",
      img: "https://t3.ftcdn.net/jpg/00/44/03/02/360_F_44030247_ilPslVoWAgpZp1Zhodmla9FjydbDkZBJ.jpg",
      icon: "assets/youtube-line.png",
      desc: " A professional and fantastic web developer. Very communicative throughout the whole process.",
    },
    {
      id: "2",
      name: "Stephen Ridger",
      title: " Senior Developer",
      img: "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      icon: "assets/twitter-line.png",
      desc: "  Provided great suggestions for design and functionality and delivered a beautiful website. ",
      featured: true,
    },
    {
      id: "3",
      name: "Taiwo Remilekun",
      title: " Developer",
      img: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnZXJpYW4lMjBtYW58ZW58MHx8MHx8&w=1000&q=80",
      icon: "assets/linkedin-box-line.png",
      desc: " Completely transformed our site, making it fast, responsive, and visually stunning. ",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((data) => (
          <div className={data.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/arrow_down.png" className="left" alt="" />
              <img src={data.img} className="user" alt="" />
              <img src={data.icon} className="right" alt="" />
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h5>{data.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
