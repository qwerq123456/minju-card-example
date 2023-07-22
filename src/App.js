
import { Card } from './Card';

const Datas = [
    { name: "aa", picture: "pic1", insta: "in1" },
    { name: "bb", picture: "pci2", insta: "in2" },
    { name: "cc", picture: "pic3", insta: "in3" },
    { name: "dd", picture: "pic4", insta: "in4" }
]
function App() {
    return (
        <div style={{ display: "flex", flexDrection: "row" }}>
            {Datas.map((data) => {
                return (
                    <Card name={data.name} picture={data.picture} insta={data.insta} />
                )
            })}
        </div>
    );
}

export default App;



// // 
// return (
//     <div>
//         <div style={{ width: 100, height: 100, border: "1px solid black", margin: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
//             <div>
//                 {name}
//             </div>
//             <div>
//                 {picture}
//             </div>
//             <div>
//                 {insta}
//             </div>
//         </div>
//         <div style={{ width: 100, height: 100, border: "1px solid black", margin: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
//             <div>
//                 {name}
//             </div>
//             <div>
//                 {picture}
//             </div>
//             <div>
//                 {insta}
//             </div>
//         </div>        <div style={{ width: 100, height: 100, border: "1px solid black", margin: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
//             <div>
//                 {name}
//             </div>
//             <div>
//                 {picture}
//             </div>
//             <div>
//                 {insta}
//             </div>
//         </div>        <div style={{ width: 100, height: 100, border: "1px solid black", margin: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
//             <div>
//                 {name}
//             </div>
//             <div>
//                 {picture}
//             </div>
//             <div>
//                 {insta}
//             </div>
//         </div>
//     </div>
// )