import { useEffect, useState } from "react";

interface Props {
  name: string;
  url: string;
}

export default function PokemonCard(props: Props) {
  const [pokemon, setPokemon] = useState<any>({});

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((response) => {
        setPokemon(response);
      });
  }, [props.url]);

  return (
    <article className="bg-white/10 p-4 flex flex-col justify-center items-center">
      <img src={pokemon?.sprites?.front_default} alt={props.name} />
      <h2 className="text-white font-semibold text-lg">{props.name}</h2>
    </article>
  );
}
