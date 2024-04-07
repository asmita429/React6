import { useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  let url = "https://official-joke-api.appspot.com/random_joke";

  let getNewJoke = async () => {
    let response = await fetch(url);
    let jsonRes = await response.json();
    // console.log(jsonRes);
    setJoke({
      setup: jsonRes.setup,
      punchline: jsonRes.punchline,
    });
  };
  return (
    <div>
      <h2>New Joke!</h2>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>Get Joke</button>
    </div>
  );
}
