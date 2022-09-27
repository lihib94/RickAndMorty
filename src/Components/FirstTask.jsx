import Table from './Table'
import classes from '../Style/FirstTask.module.css'
const FirstTask = ({fetchedData}) => {
 return (
    <div className={classes.evil_container}>
        <h1>The most popular “Evil” character from the “Citadel of Ricks”</h1> 
         {fetchedData && <Table fetchedData={fetchedData}/> }
    </div>
 )   
}
export default FirstTask