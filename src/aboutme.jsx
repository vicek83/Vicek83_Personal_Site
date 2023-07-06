import React from 'react';
const AboutMe = () => {

    return (
        <>
            <div className="container mx-auto">
                    <h1 className="font-['courgette'] text-7xl">O mnie</h1>
                    <div className="flex justify-around items-top mt-14 gap-14 text-center">
                        <div className="w-1/3">
                            <h2 className="overflow-hidden text-2xl font-['courgette'] text-center">Pasjonat przygodówek</h2>
                            <p className="pt-3">W gry przygodowe gram od prawie trzydziestu lat. Uwielbiam zarówno klasyczne point & clicki z lat 90., jak i nowsze produkcje, które odchodzą od gatunkowych kanonów.  Moje ulubione tytuły to m.in. Sanitarium, Jack Orlando, Najdłuższa Podróż, Black Mirror, Beneath a Steel Sky czy SOMA.</p>

                        </div>
                        <div className="w-1/3">
                            <h2 className="overflow-hidden text-2xl font-['courgette'] text-center">Fachowy i merytoryczny</h2>
                            <p className="pt-3">Podchodzę do widza na poważnie, dlatego każdą grę dokładnie analizuję, prezentuję własne interpretacje wątków fabularnych oraz dzielę się wrażeniami z rozgrywki. Chwalę mocne strony poszczególnych produkcji, ale nie przymykam oka nawet na najdrobniejsze wady. U mnie nie ma taryfy ulgowej. </p>

                        </div>
                        <div className="w-1/3">
                            <h2 className="overflow-hidden text-2xl font-['courgette'] text-center">Ceniony w środowisku</h2>
                            <p className="pt-3">Zgromadziłem wokół siebie fantastyczną społeczność - ludzi, którzy tak jak ja kochają przygodówki. Za swoją działalność na YouTube zostałem nagrodzony statuetką Twórcy wideo roku 2015 w kategorii Gaming (podczas Gali twórców 2016), co tylko utwierdziło mnie w przekonaniu, że to, co robię, ma sens.</p>

                        </div>


                </div>

            </div>


        </>
    )
}

export default AboutMe