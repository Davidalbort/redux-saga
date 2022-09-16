import React from "react";
import styles from '../styles/components/character.module.scss';

const Character = ({character}) => {
            return(
                <main className={styles.container}>
                    {character.map(character =>(

                    <div key={character.id}>

                        <img alt="Imagen of characters af the Rick and Morty" src={character.image}/>
        
                        <div>
        
                            <header>
                                <h2>{character.name}</h2>
                                <span>{`ID: ${character.id}`}</span>
                            </header>
                            <section>
        
                                <div>
                                    <span>Status:</span>
                                    {character.status}
                                </div>
                                <div>
                                    <span>Species:</span>
                                    {character.species}
                                </div>
                                <div>
                                    <span>Type:</span>
                                    {character.type}
                                </div>
                                <div>
                                    <span>Gender:</span>
                                    {character.gender}
                                </div>
                                {/* <div>
                                    <span>Origin:</span>
                                    {character.origin.dimension}
                                </div> */}
                                <div>
                                    <span>Location:</span>
                                    {character.location.name}
                                </div>
                                <div>
                                    <span>Created at:</span>
                                    {character.created}
                                </div>
                            </section>
                        </div>
                    </div>
                    ))

                    }
                </main>
                ) 
            
        
    
}

export { Character}