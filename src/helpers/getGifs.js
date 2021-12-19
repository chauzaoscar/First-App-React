export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=b9gFdIE56MPpVK7PUpgfx1X4xODDlu1d&q=${(encodeURI(category))}&limit=10`
    const answer = await fetch(url);
    const {data} = await answer.json();
    
    //console.log(data);
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;

}