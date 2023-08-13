import { useData } from "../useContext/useContext";
import Nav from "./Nav";
import Notresult from "./Notresult";

export default function Notfound() {
  const { tab } = useData();
  return (
    <div className="w flex flex-col">
      <Nav />
      <div className="w80">
        <Notresult data={3} eye={false} />
      </div>
    </div>
    // <div className="m-h100 w two">
    //   <Nav />
    //   <div className="flex w">
    //     <div className="w80 flex bg-w h90">
    //       <div className="flex flex-col box-contactmain bg-two bor-bottom bor-top">
    //         <div className="flex bg txt-color h w flex1 p20px bor-top">
    //           <h1 className="font-xl mb10px">Welcome to QuantumUnity.</h1>
    //           {tab()}
    //           <MdSearchOff className="icon-nav txt-colorred" />
    //         </div>
    //         <div className="flex flex3 w h txt-color">
    //           <h2 className="font-m font-wl">
    //             This page cannot be found. Error 404.
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
