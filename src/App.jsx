import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
    useQuery,
    gql, useSubscription
} from "@apollo/client";

function App() {
    const [count, setCount] = useState(0)

    const { loading, error, data } = useQuery(gql`
          {      
            homes {
                id
                name
            }
          }
    `)

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }

    return (
        <div className="App">
            {data.homes &&
                data.homes.map((home) => (
                    <div key={home.id}>
                        <h3>{home.name}</h3>
                    </div>
                ))}
        </div>
    )
}

export default App
