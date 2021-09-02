import React from 'react';
import { Button } from '../components/Button';
function Skills({ pageName }) {
  return (
    <div className="text-center p-10">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-5xl md:text-8xl font-bold font-mono text-center my-14 tracking-wider">
          {pageName}
        </h1>
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto
          similique dicta, ratione vel atque totam illum vero ducimus cumque sed
          illo veritatis nam odio eligendi nihil? Aut, veniam suscipit. Soluta
          numquam fuga est, temporibus similique nesciunt, mollitia reiciendis
          laboriosam nam alias nihil atque dolore quae ipsam repellendus hic
          ratione quia voluptate nobis deserunt! A consectetur consequatur sunt
          quo amet. Quia, nobis. Impedit sint praesentium quia voluptate amet
          quam neque, cumque placeat perspiciatis quibusdam tempore repellat,
          sed culpa molestiae eius doloremque in totam nesciunt maiores quo
          facilis. Assumenda, vero facere. Beatae at voluptas tenetur ducimus
          est nihil repellendus impedit commodi earum maiores error labore
          dolore nostrum dolores debitis provident, eos tempora? Officia, nihil
          perspiciatis quas distinctio magnam omnis impedit earum! Est nostrum
          eum facere quod nulla aliquid nam iure ab at ducimus quasi commodi,
          vitae architecto itaque esse! Neque dolore ipsum ea ad vero nobis
          explicabo alias odio omnis voluptate? Eaque esse quis hic nesciunt
          qui! Sequi neque illo cum cupiditate mollitia nisi alias maxime vero
          iusto eaque dignissimos suscipit rem, molestiae illum enim minima qui
          eveniet temporibus blanditiis doloremque. Fugiat aperiam perspiciatis
          quod porro assumenda doloribus possimus culpa alias voluptates ad
          repellendus dignissimos odio, ipsa magnam sint minima qui tenetur
        </p>
         <div className="flex gap-6 md:gap-10 font-mono font-bold text-2xl flex-wrap justify-center my-4">
             <h5 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">CSS</h5>
             <h6 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">Vanilla Javascript</h6>
             <h6 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">Bootstrap</h6>
             <h6 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">TailwindCSS</h6>
             <h6 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">React JS</h6>
             <h6 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">Next JS</h6>
             <h6 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">GIT & GITHUB</h6>
             <h6 className="bg-white text-blue-800 rounded-2xl shadow-lg px-4 py-2 transform hover:scale-105 transition duration-100">know a little Node.js & Express.JS </h6>
         </div>
      </div>
      <Button text="Back to Homepage" />
    </div>
  );
}

export default Skills;
