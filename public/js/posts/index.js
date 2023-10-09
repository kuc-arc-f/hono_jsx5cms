let items = [];
let message = "";
console.log("/posts/index");
//
const PageIndex = {
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list : async function()
    {
        try{
            let ret = [];
            const item = {
                api_key: "",
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/posts/get_list", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
            //console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                throw new Error("Error, json.ret <> OK");
            }
            ret = json.data;
            return ret;
        } catch (e) {
            console.error("Error, get_list");
            console.error(e);
            throw new Error('Error , get_list');
        }
    },  
}
//
function App() {
    const [updatetime, setUpdatetime] = React.useState("");
    React.useEffect(() => {
        (async () => {
            console.log("#start");
            items = await PageIndex.get_list();
console.log(items);
            updateTimestap();
        })()
    }, []);
    //
    const updateTimestap = function() {
        const dt = new Date().toString();
        setUpdatetime(dt);
    }
    //
    return (
    <div className="App">
        <h1 className="text-4xl font-bold">PostsIndex</h1>
        <hr className="my-2" />
        <div className="py-1">
            <a href="/admin/posts/create" className="btn-purple ms-2">Create</a>
        </div>
        <hr className="my-2" />
        <p className="d-none">{updatetime}</p>
        <ul>
          {items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/admin/posts/${item.id}`}><h3 className="text-3xl font-bold">{item.title}</h3></a>
              <p>id={item.id}</p>
              <hr />
            </li>
            );
          })}
        </ul>   
        <hr />        
        {/* CSS */}
        <style>
        {`
        .d-none{ display: none; }
        `}
        </style>        
    </div>
    );
};
//
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
