function List(){
    const fruits = [{id:1, name:"apple", calories:50},
                    {id:2 ,name:"orange", calories:100},
                    {id:3, name:"banana", calories:80},
                    {id:4, name:"coconut", calories:40}];



    const listItem = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}:&nbsp;
                                                <b>{fruit.calories}</b></li>)
                                                
    return(<ol>{listItem}</ol>)
}
export default List;