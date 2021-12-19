import React,{useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    //const categries = ['One Puch', 'Samura X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Puch']);

    // const handAdd = () => {
    //     setCategories([...categories,'Hola']);
    // }
    return  <>
                <h2> GifExpertApp</h2>
                <AddCategory setCategory = {setCategories}/>
                <hr/>
                {/* <button onClick={handAdd}>Agregar</button> */}
                <ol>
                    {
                        categories.map(category => (
                            <GifGrid key={category} category={category} />
                        )
                        )
                    }
                </ol>
                
            </>
};

export default GifExpertApp;


