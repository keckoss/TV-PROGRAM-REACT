function Main(props) {
  return (
    <div className="composant">
      {props.data.map((element, index) => {
        return (
          <div className="unique" key={index}>
            <p className="heure">{element.time}</p>
            <img src={element.image} alt="programme" />
            <div className="partiedroite">
              <h2>{element.title}</h2>
              <p className="type">{element.type}</p>
              <div className="prelive">
                <p className="duration">
                  {element.duration}
                  <div className="live">
                    {element.direct ? <p>·En direct</p> : <p></p>}
                  </div>
                  <div className="live">
                    {element.isUnseen ? <p>·Inedit</p> : <p></p>}
                  </div>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
