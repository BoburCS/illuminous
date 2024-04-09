
export default function Scenes({ scenes }) {
    const { Scene1, Scene2, Scene3, Scene4, Scene5 } = scenes;
    return (
        <div className="px-[180px]">
            <h1 className="font-semibold text-2xl text-center mb-12">Кадры из фильма</h1>

            <div className="w-full grid grid-cols-3 gap-x-5">
                <div>
                    <img className="w-full" src={Scene1} alt="Scene 1" />
                </div>  
                <div className="flex flex-col gap-5">
                    <img src={Scene2} alt="Scene 2" />
                    <img src={Scene3} alt="Scene 3" />
                </div>
                <div className="flex flex-col gap-5">
                    <img src={Scene4} alt="Scene 4" />
                    <img src={Scene5} alt="Scene 5" />
                </div>
            </div>
        </div>
    );
}
