function Carditem({title, description}){


    return( 
        <div className="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
         </div>
      </div> 


    );


}

export default Carditem