import React from "react";

const Category = ({ products }) => {
  const product = (item) => (
    <div
      className={`h-56 w-44 border-[0.2px] border-gray-400 rounded-xl flex flex-col items-center justify-center gap-6`}
      //   style={{ backgroundColor: `${color}` }}
    >
      <div className="h-2/3 w-full flex justify-center items-center overflow-hidden">
        <img src={item.img} alt="" className="h-full object-contain"/>
      </div>
      <h3 className="text-center">{item.name}</h3>
    </div>
  );

  return (
    <div className="my-4 bg-white flex flex-col px-4 py-6 gap-6">
      <h1 className="font-normal text-3xl">{products.title}</h1>
      <div className="flex gap-4">
        {products.items.map((eachProduct, index) => (
          <div id={index}>{product(eachProduct)}</div>
        ))}
      </div>
    </div>
  );
};

export default Category;
