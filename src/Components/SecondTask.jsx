
import Chart from './Chart'
import classes from '../Style/SecondTask.module.css'
const SecondTask = ({fetchedData}) => {
return (
    <div className={classes.popularityContainer}>
        <h1>Popularity graph</h1>
        <div className={classes.chartContainer}>
            {fetchedData && <Chart fetchedData={fetchedData}/>}
        </div>
    </div>
 
)
}
export default SecondTask;