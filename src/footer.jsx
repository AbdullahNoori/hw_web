import facebook from './assets/icons/facebook.svg'
import twitter from './assets/icons/twitter.svg'
import pintrest from './assets/icons/pintrest.svg'


function Footer(){
    return(
        <>
        <div className="bg-gradient-to-t from-stone-500 to-stone-400 " >
            <footer >
                <div className="flex justify-between pt-3 pb-3 pl-3 pr-3 ">
                    <div>
                        <h5>About US</h5>
                        <ul>
                            <li className="text-xs text-gray-800 pl-2 m-1 max-w-60">Welcome to Ariana, your trusted online supermarket. We're here to make your shopping experience easier, faster, and more convenient than ever. Whether you're stocking up on daily essentials or looking for specialty items, we offer a wide variety of products at great prices—all delivered straight to your door.</li>

                        </ul>
                    </div>
                    <div>

                        <h5>Our Services</h5>
                        <ul>
                            <li className="text-sm text-gray-800 pl-2 m-1">24/7 Online Shopping</li>
                            <li className="text-sm text-gray-800 pl-2 m-1">Safe Transactions</li>
                            <li className="text-sm text-gray-800 pl-2 m-1">1-Day Delivery</li>
                            <li className="text-sm text-gray-800 pl-2 m-1">Wide Range of Products</li>
                            <li className="text-sm text-gray-800 pl-2 m-1">Customer Support</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Contact Us</h5>
                        <ul >
                            <li className="text-sm text-gray-800  m-1 flex items-center"><img src={facebook} alt="404" className='w-4 m-1' />Facebook</li>
                            <li className="text-sm text-gray-800  m-1 flex items-center"><img src={twitter} alt="404" className='w-4 m-1' />Twitter</li>
                            <li className="text-sm text-gray-800  m-1 flex items-center"><img src={pintrest} alt="404" className='w-4 m-1' />Pintrest</li>

                        </ul>
                    </div>
                    <div>
                        <h5 className='pl-2'>Our Physical Address</h5>
                        <h6 className='text-xs text-gray-800 pl-2'>Shahre-Naw, Kabul Afghanistan</h6>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}
export default Footer