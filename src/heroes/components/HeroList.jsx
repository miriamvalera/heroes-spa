import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

    const heroes =  getHeroesByPublisher( publisher );    

    return (
        <ul>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    /> 
                ))
            }
        </ul>
    )
}
