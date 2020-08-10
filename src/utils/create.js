const create = async (url, body, onSuccess, onFailure) => {
    try {
      const promise = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      
        onSuccess({
        name: promise.name,
        imageUrl: promise.imageUrl,
        description: promise.description,
        ategory: promise.category,
        price: promise.price
        })
        
     
    } catch(e) {
      onFailure(e)
    }
  }
  
  
  export default create