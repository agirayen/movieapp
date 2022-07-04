import { useEffect } from 'react';
// b6101c90
const API_URL = 'http://www.omdbapi.com?apikey=b6101c90';

const App = () => {

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

    }
    useEffect(() => {

    }, []);
    return (
        <h1>App</h1>
    );
}
export default App;