const getInfo = async (props) => {
    try {
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${props}&units=metric&appid=8515c539c407dca9858087bb1dc4167b&lang=ES`
        let respuesta = await fetch(url);
        let data = await respuesta.json();
        return data ;
        
    } catch (error) {
        console.log(error);
    }
};

export default getInfo;
