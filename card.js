


  
 
//const todoTitle = "Beautyful Bangladesh";
//const desciption = "amar sonar bangla ami toma bhaobasi";
const date = new Date();
const dateName = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();


function Card(props){
    const {texTitle,textdiscrip} = props;
    return <div className= "cardStyle">
        <h2 className= "cardTitle">{texTitle}</h2>
        <p className= "cardDesc">{textdiscrip}</p>
        <p className = "careFooter">{dateName + "/" + month +"/"+ year}</p>
    </div>
}
export default Card;