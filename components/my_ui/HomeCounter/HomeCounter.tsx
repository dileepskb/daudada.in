import { MdOutlineVerified } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

import Counter from "./Counter";
export default function HomeCounter(){
    return(
         <section className="py-3 border-b">
         <div className="container">
            <div className="stats-grid">
                <Counter icon={<MdOutlineVerified size={50} />} head={'500+'} text={'Properties Verified'}  />
                <Counter icon={<RiSecurePaymentLine size={50} />} head={'100%'} text={'Legal Safety Rate'}  />
                <Counter icon={<FaUserCheck size={50} />} head={'300+'} text={'Happy Families'}  />
                <Counter icon={<FaHistory size={50} />} head={'30 Years'} text={'Record Check Depth'}  />
            </div>
         </div>
      </section>
    )
}