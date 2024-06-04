const Section = (props) => {
  return (
    <section>
      <h2>{props.elem.category}</h2>
      <div className="images">
        {props.elem.images.map((image) => {
          return (
            <div>
              <img src={image} alt="" />;
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
