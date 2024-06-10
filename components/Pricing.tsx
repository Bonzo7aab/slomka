import SectionTitle from './SectionTitle'

const basictItemsData = [
    {
        text: '30 minutowy film ślubny'
    },
    {
        text: 'Teledysk ślubny (czas pracy operatora do 22.00)'
    },
    {
        positive: false,
        text: 'Ujęcia filmowe z drona'
    },
    {
        positive: false,
        text: 'Ogranie miejsca ślubnego/weselnego przed przygotowaniami'
    },
    {
        positive: false,
        text: 'Czas pracy operatora od przygotowań do oczepin'
    }
]

const standartItemsData = [
    {
        text: '45 minutowy film ślubny'
    },
    {
        text: 'Teledysk ślubny'
    },
    {
        text: 'Ujęcia filmowe z drona'
    },
    {
        text: 'Ogranie miejsca ślubnego/weselnego przed przygotowaniami'
    },
    {
        text: 'Czas pracy operatora od przygotowań do oczepin'
    }
]

const premiumItemsData = [
    {
        text: '70 minutowy film ślubny'
    },
    {
        text: 'Teledysk ślubny'
    },
    {
        text: 'Ujęcia filmowe z drona'
    },
    {
        text: 'Ogranie miejsca ślubnego/weselnego przed przygotowaniami'
    },
    {
        text: 'Czas pracy operatora od przygotowań do oczepin'
    }
]

const PricingItem = ({ positive = true, text }: { positive?: boolean, text: string }) =>
    <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className={`${positive ? 'text-blue-500': 'text-red-400'} w-5 h-5`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>

        <span className="mx-4 text-gray-300 w-fit">{text}</span>
    </div>

const Pricing = () => {
    return (
        <section id="pricing" className="container flex flex-col mx-auto -mt-32 md:mt-0">
            <SectionTitle title="CENNIK" />
            <div className="text-gray-300 xl:items-center xl:-mx-8 xl:flex">

                <div className="flex-1 xl:mx-8">
                    <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                        <div className="max-w-sm mx-auto border border-gray-700 rounded-lg md:mx-4">
                            <div className="p-6">
                                <h1 className="text-2xl font-medium text-center text-white lg:text-3xl">Podstawowy</h1>

                                <p className="mt-4">
                                    Film wraz z teledyskiem ślubnym, idealny dla mniejszej imprezy
                                </p>

                            </div>

                            <hr className="border-gray-700" />

                            <div className="p-6">
                                <h1 className="text-lg font-medium text-white lg:text-xl">Pakiet zawiera:</h1>

                                <div className="mt-8 space-y-4 font-light">
                                    {basictItemsData.map((item, i) => <PricingItem key={i} positive={item.positive} text={item.text} />)}
                                </div>
                            </div>

                            <div className='p-6 text-center'>
                                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">6.000 <span className="text-base font-medium">PLN</span></h2>
                            </div>
                        </div>



                        <div className="max-w-sm mx-auto border-2 rounded-lg md:mx-4 border-cp0-600">
                            <div className='w-full p-1 font-semibold tracking-wide text-center text-white bg-cp0-600'>
                                Polecane!
                            </div>

                            <div className="p-6">
                                <h1 className="text-2xl font-medium text-center text-white lg:text-3xl">Standard</h1>

                                <p className="mt-4">
                                    Dłuższy film z ujęciami z drona oraz dodatkowe ujęcia z całego miejsca
                                </p>

                            </div>

                            <hr className="border-cp0-600" />

                            <div className="p-6">
                                <h1 className="text-lg font-medium text-white lg:text-xl">Pakiet zawiera:</h1>

                                <div className="mt-8 space-y-4">
                                    {standartItemsData.map((item, i) => <PricingItem key={i} text={item.text} />)}
                                </div>
                            </div>

                            <div className='p-6 text-center'>
                                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">7.900 <span className="text-base font-medium">PLN</span></h2>
                            </div>
                        </div>


                        

                        <div className="max-w-sm mx-auto border border-gray-700 rounded-lg md:mx-4">
                            <div className="p-6">
                                <h1 className="text-2xl font-medium text-center text-white lg:text-3xl">Premium</h1>

                                <p className="mt-4">
                                    Usługa kompletna zawierający 70 minutowy film plus wszystko co w wersji Standard
                                </p>

                            </div>

                            <hr className="border-gray-700" />

                            <div className="p-6">
                                <h1 className="text-lg font-medium text-white lg:text-xl">Pakiet zawiera:</h1>

                                <div className="mt-8 space-y-4">
                                    {premiumItemsData.map((item, i) => <PricingItem key={i} text={item.text} />)}      
                                </div>
                            </div>

                            <div className='p-6 text-center'>
                                <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">9.800 <span className="text-base font-medium">PLN</span></h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center mx-8 mt-8 text-white'>
                        <div className='flex gap-16'>
                            <div className='flex flex-col leading-relaxed font-extralight'>
                                <span className='font-semibold'>Opcje dodatkowe:</span>
                                <span>Wywiad z gośćmi, życzenia na koniec filmu</span>
                                <span>Zatrudnienie drugiego operatora</span>
                                <span>Wywiad z gośćmi, życzenia na koniec filmu</span>
                            </div>
                            <div className='flex flex-col justify-end leading-relaxed'>
                                <span>300 PLN</span>
                                <span>1.500 PLN</span>
                                <span>300 PLN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing