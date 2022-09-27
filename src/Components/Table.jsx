import classes from '../Style/Table.module.css'

/** Table.jsx responsible for the table UI & content which transfered by props from "FirstTask.jsx" **/

const Table = ({fetchedData}) => {
const cellsNames = ["Character name","Location name","Status","Species","Gender","Popularity"]
const cellsAnsNames = [
    fetchedData[1],
    fetchedData[2].location.name,
    fetchedData[2].status,
    fetchedData[2].species,
    fetchedData[2].gender,
    fetchedData[0]]
const tableCategories = cellsNames.map((cell,indx)=>{
    return <div className={classes.table_row} key={indx}>{cell}</div>  
})
const tableAns = cellsAnsNames.map((cell,indx)=>{
    return <div className={classes.table_row} key={indx}>{cell}</div>  
})

return(
        <div className={classes.container}>
          <img src={fetchedData[2].image} alt="" className={classes.cells}></img>
            <div className={classes.cells}>
                {tableCategories}
            </div>
            <div className={classes.cells}>
                {tableAns}
            </div>
        </div>
)
}
export default Table