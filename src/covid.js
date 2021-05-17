import React,{useEffect , useState} from 'react'
import "./covid.css";
const Covid = () => {
    const [data,setData] = useState([]);

    const getCovidData =async () =>{
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
           const actualdata= await res.json();
           console.log(actualdata.statewise[0]);
           setData(actualdata.statewise[0]);
        }catch(err){
 
            console.log(err);
        }
       

    }

    useEffect(() =>{
       getCovidData();
    }, []);
    return (
        <>
        <section>
            <h2>🔴Live </h2>
            <h1>COVID-19 TRACKER </h1>
          <ul className="upper">
              <li className="card">
             <div className="card_main">
                 <div className="card_inner">
                     <p className="card_name"><span>OUR</span> COUNTRY</p>
                     <p classNAme="card_total card small">INDIA</p>
                 </div>
             </div>

              </li>
              <li className="card">
             <div className="card_main">
                 <div className="card_inner">
                     <p className="card_name"><span>OUR</span> COUNTRY</p>
                     <p classNAme="card_total card small">{data.confirmed}</p>
                 </div>
             </div>

              </li>
              <li className="card">
             <div className="card_main">
                 <div className="card_inner">
                     <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                     <p classNAme="card_total card small">{data.recovered}</p>
                 </div>
             </div>


              </li>
              </ul>
              <ul className="lower">
              <li className="card">
             <div className="card_main">
                 <div className="card_inner">
                     <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                     <p classNAme="card_total card small">{data.confirmed}</p>
                 </div>
             </div>

              </li>
              <li className="card">
             <div className="card_main">
                 <div className="card_inner">
                     <p className="card_name"><span>TOTAL</span>ACTIVE</p>
                     <p classNAme="card_total card small">{data.active}</p>
                 </div>
             </div>

              </li>
              <li className="card">
             <div className="card_main">
                 <div className="card_inner">
                     <p className="card_name"><span> LAST</span> UPDATED</p>
                     <p classNAme="card_total card small">{data.lastupdatedtime}</p>
                 </div>
             </div>

              </li>

                </ul>
                </section>     
        </>
    )
}

export default Covid
