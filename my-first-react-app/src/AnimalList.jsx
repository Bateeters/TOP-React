function AnimalList(){
    const animals = ["Lion", "Cow", "Snake", "Lizard", "Penguin", "Cat", "Dog"];
    const animalsList = animals.map((animal)=><li key={animal}>{animal}</li>)
    return(
        <div>
            <h1>Animals:</h1>
            <ul>
                {animalsList}
            </ul>
        </div>
    );
}

export default AnimalList;