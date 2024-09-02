import React from 'react';
import product1 from '../../assets/product/single_1.jpg'
import product2 from '../../assets/product/single_1_thumb.jpg'
const SingleProduct = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="breadcrumbs flex flex-row items-center mb-6">
        <ul className="flex items-center space-x-2">
          <li><a href="/" className="text-gray-600">Home</a></li>
          <li className="flex items-center">
            <i className="fa fa-angle-right mx-2 text-gray-400" aria-hidden="true"></i>
            <a href="/categories" className="text-gray-600">Men's</a>
          </li>
          <li className="flex items-center">
            <i className="fa fa-angle-right mx-2 text-gray-400" aria-hidden="true"></i>
            <a href="#" className="text-gray-600">Single Product</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row mb-8">
        <div className="lg:w-7/12 flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/4 flex flex-col items-center lg:order-1 mb-4 lg:mb-0">
            <ul className="space-y-2">
              <li><img src={product1} alt="" className="cursor-pointer" /></li>
              <li><img src={product2} alt="" className="cursor-pointer active" /></li>
              <li><img src={product2} alt="" className="cursor-pointer" /></li>
            </ul>
          </div>
          <div className="lg:w-3/4">
            <div className="single_product_image bg-cover bg-center"      style={{ backgroundImage: `url(${product1})` }}></div>
          </div>
        </div>
        <div className="lg:w-5/12 pl-4">
          <div className="product_details space-y-4">
            <div className="product_details_title">
              <h2 className="text-2xl font-bold">Pocket cotton sweatshirt</h2>
              <p className="text-gray-600">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="ti-truck"></span>
              <span className="text-green-600 font-medium">Free delivery</span>
            </div>
            <div className="text-gray-400 line-through">$629.99</div>
            <div className="text-red-600 text-2xl font-bold">$495.00</div>
            <ul className="flex space-x-1">
              <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
              <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
              <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
              <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
              <li><i className="fa fa-star-o text-yellow-400" aria-hidden="true"></i></li>
            </ul>
            <div className="product_color space-y-2">
              <span className="text-gray-600">Select Color:</span>
              <ul className="flex space-x-2">
                <li className="w-6 h-6 bg-red-500 cursor-pointer"></li>
                <li className="w-6 h-6 bg-gray-800 cursor-pointer"></li>
                <li className="w-6 h-6 bg-blue-400 cursor-pointer"></li>
              </ul>
            </div>
            <div className="quantity flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-600">Quantity:</span>
              <div className="quantity_selector flex items-center space-x-2">
                <span className="minus cursor-pointer">
                  <i className="fa fa-minus text-gray-600" aria-hidden="true"></i>
                </span>
                <span id="quantity_value" className="px-4 py-2 border rounded">1</span>
                <span className="plus cursor-pointer">
                  <i className="fa fa-plus text-gray-600" aria-hidden="true"></i>
                </span>
              </div>
              <div className="add_to_cart_button bg-red-600 text-white px-4 py-2 rounded cursor-pointer">
                <a href="#">BUY</a>
              </div>
              <div className="product_favorite flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs_section_container w-full pb-20 border-b border-gray-200">
        <div className="container">
          <div className="tabs_container my-16">
            <ul className="tabs flex flex-col sm:flex-row items-center justify-center">
              <li className="tab active mr-12 cursor-pointer">
                <span className="text-lg font-medium text-gray-700">Description</span>
              </li>
              <li className="tab mr-12 cursor-pointer">
                <span className="text-lg font-medium text-gray-700">Additional Information</span>
              </li>
              <li className="tab cursor-pointer">
                <span className="text-lg font-medium text-gray-700">Reviews (2)</span>
              </li>
            </ul>
          </div>
          <div className="tab_container active">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-5/12">
                <div className="tab_title mb-24">
                  <h4 className="text-red-600 border-b border-red-600 inline-block">Description</h4>
                </div>
                <div className="tab_text_block mb-32">
                  <h2 className="text-2xl font-bold">Pocket cotton sweatshirt</h2>
                  <p className="mt-4 text-gray-600">
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
                    elementum etos lobortis des mollis ut...
                  </p>
                </div>
                <div className="tab_image mb-32">
                  <img src="images/desc_1.jpg" alt="" className="w-full" />
                </div>
                <div className="tab_text_block mb-32">
                  <h2 className="text-2xl font-bold">Pocket cotton sweatshirt</h2>
                  <p className="mt-4 text-gray-600">
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
                    elementum etos lobortis des mollis ut...
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-5/12 lg:ml-auto">
                <div className="tab_image mb-32">
                  <img src={product1} alt="" className="w-full" />
                </div>
                <div className="tab_text_block mb-32">
                  <h2 className="text-2xl font-bold">Pocket cotton sweatshirt</h2>
                  <p className="mt-4 text-gray-600">
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
                    elementum etos lobortis des mollis ut...
                  </p>
                </div>
                <div className="tab_image mb-0">
                  <img src={product1} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="tab_container">
            <div className="w-full lg:w-1/2">
              <div className="additional_info_title mb-12">
                <h4 className="text-2xl font-bold">Additional Information</h4>
              </div>
              <p className="text-gray-600">COLOR:<span className="ml-6">Gold, Red</span></p>
              <p className="text-gray-600">SIZE:<span className="ml-6">L, M, XL</span></p>
            </div>
          </div>

          <div className="tab_container">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 reviews_col pr-4">
                <div className="reviews_title mb-14">
                  <h4 className="text-2xl font-bold">Reviews (2)</h4>
                </div>

                <div className="user_review_container flex flex-col sm:flex-row mb-10">
                  <div className="user">
                    <div className="user_pic mr-4">
                      <img src={product2} alt="" className="rounded-full w-20 h-20" />
                    </div>
                  </div>
                  <div className="review_content">
                    <div className="review_rating mb-2">
                      <ul className="flex space-x-1">
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star-o text-yellow-400" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                    <div className="review_text">
                      <p className="text-gray-600">
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut...
                      </p>
                    </div>
                    <div className="review_time text-gray-400 text-sm mt-2">March 30, 2024</div>
                  </div>
                </div>

                <div className="user_review_container flex flex-col sm:flex-row mb-10">
                  <div className="user">
                    <div className="user_pic mr-4">
                      <img src={product1} alt="" className="rounded-full w-20 h-20" />
                    </div>
                  </div>
                  <div className="review_content">
                    <div className="review_rating mb-2">
                      <ul className="flex space-x-1">
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                        <li><i className="fa fa-star-o text-yellow-400" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                    <div className="review_text">
                      <p className="text-gray-600">
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor,
                        elementum etos lobortis des mollis ut...
                      </p>
                    </div>
                    <div className="review_time text-gray-400 text-sm mt-2">March 30, 2024</div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 add_review_col mt-10 lg:mt-0">
                <div className="add_review_title mb-12">
                  <h4 className="text-2xl font-bold">Add a review</h4>
                </div>
                <div className="rating">
                  <ul className="flex space-x-1">
                    <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star text-yellow-400" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star-o text-yellow-400" aria-hidden="true"></i></li>
                  </ul>
                </div>
                <div className="form_review mt-6">
                  <form action="#" id="review_form">
                    <div className="form-group mb-4">
                      <label htmlFor="review_name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-600">*</span></label>
                      <input type="text" id="review_name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="review_email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-600">*</span></label>
                      <input type="text" id="review_email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="review_message" className="block text-sm font-medium text-gray-700">Your review:</label>
                      <textarea id="review_message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits w-full flex flex-col lg:flex-row justify-between items-start mt-12">
        <div className="benefit_item mb-6 lg:mb-0 lg:w-1/3 text-center">
          <div className="benefit_icon text-red-600 mb-2">
            <i className="ti-truck text-3xl"></i>
          </div>
          <div className="benefit_content">
            <h4 className="text-lg font-bold">Free Shipping</h4>
            <p className="text-gray-600">Suffered alteration in some form</p>
          </div>
        </div>
        <div className="benefit_item mb-6 lg:mb-0 lg:w-1/3 text-center">
          <div className="benefit_icon text-red-600 mb-2">
            <i className="ti-money text-3xl"></i>
          </div>
          <div className="benefit_content">
            <h4 className="text-lg font-bold">Cash On Delivery</h4>
            <p className="text-gray-600">The internet tend to repeat</p>
          </div>
        </div>
        <div className="benefit_item lg:w-1/3 text-center">
          <div className="benefit_icon text-red-600 mb-2">
            <i className="ti-medall text-3xl"></i>
          </div>
          <div className="benefit_content">
            <h4 className="text-lg font-bold">Special Guarantee</h4>
            <p className="text-gray-600">Rjected its injected humour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
