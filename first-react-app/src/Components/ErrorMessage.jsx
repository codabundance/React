let ErrorMessage = ({foodItem}) => 
{
    return <>{foodItem.length === 0 && <h3>No Healthy Food Items Available</h3>}</>;
}

export default ErrorMessage;