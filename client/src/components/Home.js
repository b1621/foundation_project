import React from 'react';
import Footer from './Footer';

function Home() {
  return (
    <div class="flex flex-col w-full ">
      <div class="w-full bg-hero bg-center bg-no-repeat bg-cover bg-black">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 "></div>
        <div className=" w-full ">
          <div className="h-[632px] flex flex-col items-center justify-center relative mx-auto">
            <h1 className="text-5xl mt-2 text-white tracking-wider">
              Together we will go beyond belief{' '}
            </h1>
            <p className="text-white my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              unde officia maiores error ab sed,
            </p>
            <button className="bg-green-500 duration-500  font-[poppins] text-white  py-3 px-10 hover:bg-green-600 rounded mt-3">
              Donate Now!
            </button>
          </div>
        </div>
      </div>
      <div id="about" className="bg-white h-80 px-2 py-8">
        about Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        dolore incidunt libero eligendi ducimus illo. Cum minima atque
        repellendus esse eos veritatis molestiae consequatur inventore sed, at
        modi nesciunt quasi delectus beatae. Voluptatibus architecto adipisci
        modi asperiores aspernatur exercitationem. Magnam dolores quia facere.
        Nesciunt, minus magni consequuntur a ducimus sit nemo natus reiciendis
        quod delectus reprehenderit eligendi inventore quis magnam possimus
        consectetur aperiam voluptate totam tenetur? Maxime, reprehenderit quod?
        Cum culpa corrupti laudantium provident optio ut assumenda. Quis
        accusantium ut id asperiores accusamus. Consequuntur impedit culpa quos
        dignissimos, atque aperiam libero provident at esse odit mollitia
        maiores necessitatibus quo ex voluptatibus deserunt minima? Maxime
        molestias labore porro quas assumenda sequi similique dolorem doloribus!
        Atque, temporibus ratione dolore excepturi nesciunt laboriosam nam
        assumenda, pariatur odio repudiandae voluptatibus at ab. Aliquid
        perferendis excepturi quod est repudiandae! Quas culpa dolore ipsa natus
        cumque ut maiores maxime incidunt neque doloremque repudiandae aliquam
        error quisquam, alias optio minus nihil rerum tempora recusandae omnis
        est? Dignissimos, nemo. Eveniet, laborum. Asperiores esse natus pariatur
        dolorum fugiat exercitationem quidem quaerat quo quis, temporibus minima
        quia delectus tenetur modi culpa sunt recusandae ullam sapiente adipisci
        tempore molestiae neque repellendus quae magni? Debitis placeat quo
        doloribus reprehenderit asperiores officiis harum.
      </div>
      <div class="p-10 w-full h-[500px] bg-blue-700">Some content</div>
      <div class="p-10 w-full h-[500px] bg-green-500">Some content</div>
      <div class="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
