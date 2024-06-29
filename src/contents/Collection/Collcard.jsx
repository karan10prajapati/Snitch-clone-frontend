import React from 'react'
import Card from '../../components/Card';
import ListSkeleton from '../../components/ListSkeleton';
import Loader from '../../components/Loader';



function Collcard({list}) {

 

  return (
    <>     

                  <div className="grid md:grid-cols-4 grid-cols-2  	gap-4 ml-4 mr-4 md:mr-0 md:ml-0">
                  { list.length === 0 && <ListSkeleton listsToRender={9} />}

                  { list.length > 0 && 
                   
                   list.map((card,i) => {
                    return (
  
                      < >    
                          <Card className=""
                             price={card.price.mrp}
                             imgurl={card.image}
                             name={card.name}
                             id={card.id}
                             key={i}
                           />
                         
                      </>
                    );
                  })}
              </div>
    </>
  )
}

export default Collcard