class ItemSummary extends Component {
    state={
        items: []
    }
   
  componentDidMount () {
   axios.get('/items.json')
    .then(res => {
        const fetchedItems=[];
        for (let key in res.data) {
            fetchedItems.push({
                ...res.data[key]
                
            });
        }
        const rentedItems = []
        for (let i = 0; i< fetchedItems.length; i++){
            if(i[rented]){
                rentedItems.push(i)
            }
        }
        this.setState({items: rentedItems})
        
       }).catch(err=> {
           console.log(err)
       })
    }
    

    render() {
    return(
            <div>
                {this.state.items.map(item => (
                    <CardItem
                    key = {item.id}
                    imageUrl = {item.imageUrl}
                    name = {item.name}
                    description = {item.description}
                    price = {+item.price}
                    id = {item.id}
                    rented = {item.rented}
                    />
                ))}
            </div>
        )
    }
}

export default ItemSummary