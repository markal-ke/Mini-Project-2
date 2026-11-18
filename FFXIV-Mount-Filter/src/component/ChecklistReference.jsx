import { useState } from 'react';
import BigCatsEx5 from './AddFromSearchReference';

function BigCatsEx5_Base() {

    const cats = [];
const [currentCats, setCurrentCats] = useState(cats);

const SingleCat = currentCats.map(cat => (
<Cat
key={cat.id} 
id={cat.id}
name={cat.name}
latinName={cat.latinName}
image={cat.image}
/>

)
)


function Cat({id, image, name, latinName, onDelete}) {
return (
         < li >
        <h3>{name}</h3> <span>({latinName})</span>
         <div> 
        <img src= {image} alt={name} width="200" />
        </div>
          <button onClick={() => onDelete(id)}>
                Delete
            </button>
        </li >
    );
}

const handleAddCat = (newCat) => {newCat.id = currentCats.length + 1; 
setCurrentCats([...currentCats, newCat])
}


return (
<div className="cats">
<ul>{ SingleCat }</ul>

<BigCatsEx5 onAddCat={handleAddCat} />
</div>
);
}

export default BigCatsEx5_Base