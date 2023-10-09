import { useEffect, useState } from "react";

const App = () => {
    const [dogImage, setDogImage] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw (response.statusText);
            }
        })
        .then(data => {
            setDogImage(data.message);
        })
        .catch(err => alert(err))
    }, [])

    if (!dogImage) {
        return <p>Loading...</p>
    }

    return (
        <img src={dogImage} alt={"A Random Dog"} />
    )

}

export default App;