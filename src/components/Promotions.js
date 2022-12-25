import React from 'react';
import {GiClothes} from "react-icons/gi";
import {FaTools} from "react-icons/fa";
import {MdDirectionsBike} from "react-icons/md";

function Promotions() {
  return (
    <div>

        <h1>Active Promotions</h1>

        <div className='grid grid-cols-3'>

            <div>
                <img src='https://img.freepik.com/free-photo/beautiful-teen-girl-hiding-her-neck-collar-woolen-sweater-with-broad-smile-female-model-posing-wearing-cool-warm-outfit-bending-head-side-joy-happiness-concept_176420-10960.jpg?w=2000'/>
                <div> 
                  <div><GiClothes /> </div>
                  <div>Up to 25% off on all casual sweaters</div>
                  <button>Browse Products</button>
                </div>
            </div>

            <div>
                <div><FaTools /></div>
                <div>Up to 20% off on beauty products</div>
                <button>Browse Products</button>
                <img src='https://ae01.alicdn.com/kf/Sd06011f8c57b427eba038273c2c6ae1b4/TERRE-D-HORSE-100-Ml-Men-Parfume-Fragrance-Deodorant-EDT-EDP.jpg_Q90.jpg_.webp' />
            </div>

            <div>
                <img src='https://cdn.myshoptet.com/usr/www.ecafebike.com/user/shop/big/163-6_e-cafe-bike-model-espresso-e-bike-for-almost-any-terrain-vykonne-mestske-elektrokolo--blue-.jpg?62cff1c1'/>
                <div><MdDirectionsBike /></div>
                <div>Exciting bike rides with amazing equipment</div>
                <button>Browse Products</button>
            </div>

        </div>

    </div>
  )
}

export default Promotions