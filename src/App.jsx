import "./App.css";
import movies from "./assets/movies_rnexgr.json";
import Section from "./components/Section";

function App() {
  console.log(movies);
  return (
    // -------------------Sans Composants---------------------------
    // <div className="container">
    //   {movies.map((elem) => {
    //     return (
    //       <section>
    //         <h2>{elem.category}</h2>
    //         <div className="images">
    //           {elem.images.map((image) => {
    //             return (
    //               <div>
    //                 <img src={image} alt="" />;
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </section>
    //     );
    //   })}
    // </div>
    // -----------------------------------------------------------------

    <div className="container">
      <Section elem={movies[0]} />
      <Section elem={movies[1]} />
      <Section elem={movies[2]} />
      <Section elem={movies[3]} />
      <Section elem={movies[4]} />
      <Section elem={movies[5]} />
    </div>
  );
}

export default App;
