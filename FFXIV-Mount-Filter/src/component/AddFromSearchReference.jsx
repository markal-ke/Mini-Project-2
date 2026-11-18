import { useState } from "react";

function BigCatsEx5({onAddCat}) {
const [name, setName] = useState('')
const [latinName, setlatinName] = useState('')
const [image, setImage] = useState('')
const handleSubmit = (e) => { e.preventDefault(); onAddCat({name, latinName, image,})
};
return (
<div className="BigCatsEx5 componentBox">
<form onSubmit={handleSubmit}>
<label>Cat Name:
<input name="name" value={name}
onChange={(e) => setName (e.target.value)} />
</label>
<label> Latin Name:
<input name="latinName" value={latinName}
onChange={(e) => setlatinName (e.target.value)} />
</label>
<label> Image URL:
<input name="image" value={image}
onChange={(e) => setImage (e.target.value)} />
</label>
 <button>Add Cat</button>
 </form>
</div>
)
}

export default BigCatsEx5

function MountAdder({mounts, onAddMount}) {
    const [name, setName] = useState('')
    const [Source, setSource] = useState('')
const handleSubmit = (e) => { e.preventDefault(); onAddMount({result, id, name, Source})
};
return (
<div className="BigCatsEx5 componentBox">
<form onSubmit={handleSubmit}>
<label>Cat Name:
<input name="name" value={name}
onChange={(e) => setName (e.target.value)} />
</label>
<label> Source:
<input name="Source" value={Source}
onChange={(e) => setSource (e.target.value)} />
</label>
 <button>Add Mount</button>
 </form>
</div>
)
}

