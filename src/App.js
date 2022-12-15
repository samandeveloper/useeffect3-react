import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)  //we start at 1 bevcause 0 is not really in the api
    
    /**
     * 1.Combine `count` with the request URL
     * so pressing the "Get Next Character" button will get a new character from the Star Wars API.
     */
    
    React.useEffect(function() {
        console.log("Effect ran")
        console.log(count)

        // fetch("https://swapi.dev/api/people/1")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
            
    },[count])  //if we use [] means it just run once--if we use nothing we still have the first person but we will be in infinite loop
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

