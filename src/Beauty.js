function Beauty({anyBeauty}) {
    return(
        <div className="products">
            {anyBeauty.map((element => {
                const{ id, name, searchTerm, image } = element;
                return(
                <div className="product-card" key={id}>
                    <img className="beauty" src={image} width="420px" height="500px" alt="beautyicon"/>
                    
                <div className="product-info">
                    <h3 className="name">{name}</h3>
                    <h3 className="name">{searchTerm}</h3>
                </div>
                </div>
                )
            }))}

        </div>
    )

}

export default Beauty;