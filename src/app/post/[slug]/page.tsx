import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  const html = `
  Lorem ipsum dolor sit amet consectetur. Faucibus lectus ullamcorper pharetra posuere nunc sed eleifend nunc. Accumsan egestas ut massa tellus felis feugiat. Nulla est consectetur quis integer curabitur habitant lectus viverra. Consectetur neque bibendum risus phasellus augue sapien in neque feugiat. Risus egestas odio lacus egestas viverra. Lobortis lorem lacus dolor ullamcorper lobortis. Habitasse hendrerit semper mauris ullamcorper lorem. Amet tortor purus mi aliquet faucibus suspendisse eu faucibus justo. Pharetra elit ac interdum purus.
  `;

  return (
    <>
      <div className="mt-8 mb-7">
        <h1 className="text-2xl tracking-[-2.5%] mb-3 line-clamp-2">
          개발자도구로 레퍼런스 페이지 스크립트 추출하기
        </h1>
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-gray100"></div>
          <div className="flex flex-col">
            <span className="text-xs">Verna Medhurst</span>
            <span className="text-xs text-gray100">2021-03-07</span>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </>
  );
};

export default page;
