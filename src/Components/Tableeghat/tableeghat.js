import Footer from "../Footer/footer";
import Header from "../Header/header";
import diary from '../../Assets/images/diary 2024 2.svg'
import diary2025 from '../../Assets/images/dairy2025.svg'
import diary2024 from '../../Assets/images/dairy2024.svg'
import reading from '../../Assets/images/reading.svg'
import writing from '../../Assets/images/writing.svg'
import nimaz from '../../Assets/images/nimaz.svg'
import book from '../../Assets/images/book.svg'
import mahasba from '../../Assets/images/mahasba.svg'



export default function Tableeghat() {
    return (
        <>

            <Header />
            <div className="bg-white min-h-screen w-full mt-28 px-5 sm:px-10 md:px-16 lg:px-20 text-black text-center font-nastaleeqRegular font-normal">
                <div className="pt-10 sm:pt-16 md:pt-20">
                    <div className="bg-primaryBG rounded-3xl py-8 sm:py-10 md:py-12 px-5 sm:px-10 md:px-20">
                        <div className="flex flex-col sm:flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
                            <img
                                src={diary}
                                alt="Diary 2024"
                            />
                            <div className="pl-0 sm:pl-5 md:pl-10 lg:pl-[105px] py-5 sm:py-10 lg:py-10">
                                <p className="font-nastaleeqKasheeda text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-right mb-5 lg:mb-10">
                                    نور ڈائری ۲۰۲۴
                                </p>
                                <p className="text-xl sm:text-2xl md:text-[32px] text-right font-nastaleeqRegular max-w-[470px]">
                                    ایسوسی ایشن اف مشتاقان نور (ع) ہر سال تعارف امام زمانہ علیہ سلام کے عنوان سے نور ڈائری کا اجراء کرتا ہے۔ الحمد للّہ یہ کام گزاشتہ کئی سالوں سے برادران کی علمی مطالعہ اور کوششوں سے جاری ہے۔
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-12 '>
                        <p className='font-nastaleeqRegular text-5xl font-normal mb-6'>موضوعات</p>
                        <div className="flex flex-row-reverse justify-around align-middle rtl w-full max-w-screen-lg">
                            <ul className="font-nastaleeqRegular list-disc list-inside p-2 text-right text-2xl decoration-1 leading-10" dir="rtl">
                                <li>حصولِ علم</li>
                                <li>غوروفکر</li>
                                <li>تعارف امامؑ میں سعی</li>
                                <li>موضوع نمبر ۴</li>
                                <li>موضوع نمبر ۵</li>
                            </ul>
                            <ul className="font-nastaleeqRegular list-disc list-inside p-2 text-right text-2xl leading-10" dir="rtl">
                                <li>تعارف امامؑ میں سعی</li>
                                <li>محافظہ ٔ ولایت</li>
                                <li>دشمن و شیعہ امام ؑ کی معرفت</li>
                                <li>موضوع نمبر ۴</li>
                                <li>موضوع نمبر ۵</li>
                            </ul>
                            <ul className="font-nastaleeqRegular list-disc list-inside p-2 text-right text-2xl leading-10" dir="rtl">
                                <li>غیبت و تہمت سے دُوری</li>
                                <li>اگر امام زمانؑہ نہ ہوں</li>
                                <li>پیغام عاشور</li>
                                <li>موضوع نمبر ۴</li>
                                <li>موضوع نمبر ۵</li>
                            </ul>
                        </div>


                    </div>
                    <div className="bg-primaryBG flex flex-col items-center gap-y-8 py-10 px-[121px] rounded-3xl mt-12">
                        <h1 className="font-nastaleeqKasheeda text-5xl"> ڈائری کی مختلف خصوصیات</h1>
                        <div className="flex flex-row-reverse justify-between w-full">
                            <div className="flex flex-col gap-4 h-36 items-center">
                                <img src={reading} alt="IC Class" className="h-20" />
                                <h2 className="text-[32px]  font-nastaleeqKasheeda">مضامین</h2>
                            </div>
                            <div className="flex flex-col gap-4 h-36 items-center">
                                <img src={nimaz} alt="IC Class" className="h-20" />
                                <h2 className="text-[32px]  font-nastaleeqKasheeda">نماز کے اوقات</h2>
                            </div>
                            <div className="flex flex-col gap-4 h-36 items-center">
                                <img src={writing} alt="IC Class" className="h-20" />
                                <h2 className="text-[32px]  font-nastaleeqKasheeda">لکھنے کی جگہ</h2>
                            </div>
                            <div className="flex flex-col gap-4 h-36 items-center">
                                <img src={book} alt="IC Class" className="h-20" />
                                <h2 className="text-[32px]  font-nastaleeqKasheeda">روزانہ کی حدیث</h2>
                            </div>
                            <div className="flex flex-col gap-4 h-36 items-center">
                                <img src={mahasba} alt="IC Class" className="h-20" />
                                <h2 className="text-[32px]  font-nastaleeqKasheeda">محاسبہ نفس</h2>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-12 '>
                        <p className='font-nastaleeqRegular text-5xl font-normal mb-6'>مقدمہ</p>
                        <div className=" align-middle rtl w-full  px-[121px]">
                            <p className="font-nastaleeqRegular text-[32px]">ہمارے جگر گوشوں کے بگڑتے رویے، دین سے دوری اور والدین کی عزت میں کمی، سب امورِ تربیت سے غفلت کا نتیجہ ہیں۔ اگر ہم مولائے کائنات حضرت علی علیہ السلام کے قول پر غور کریں تو حقیقت واضح ہو جائے گی۔</p>
                            <p className="font-nastaleeqRegular text-[32px]">
                                انسانی فطرت میں اولاد کی محبت سب سے گہرا اور طاقتور جذبہ ہے۔ والدین اپنے بچوں کی تعلیم و تربیت پر بے پناہ وقت، محنت اور دولت خرچ کرتے ہیں، لیکن بعض اوقات غلط تربیت کی وجہ سے بچے بے راہ ہو جاتے ہیں۔ ابتدا میں بچوں کی غلطیوں کو نظرانداز کیا جاتا ہے، لیکن جب بری عادتیں پختہ ہو جاتی ہیں تو انہیں بدلنا مشکل ہو جاتا ہے۔
                            </p>
                            <p className="font-nastaleeqRegular text-[32px]">
                                اس لیے ضروری ہے کہ بچپن ہی سے ایسی تعلیم دی جائے جو ان کے ذہن کو مثبت سمت میں لے جائے اور غلط سوچ سے بچائے۔ تعلیم کا مقصد صرف دنیاوی کامیابی نہیں ہونا چاہیے، بلکہ دینی اور اخلاقی تربیت کو بھی اہمیت دی جانی چاہیے۔ بچوں کو ابتدا سے دین، خدا کی عظمت اور زندگی کے مقصد سے آگاہ کرنا ضروری ہے۔
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-primaryBG flex flex-col items-center gap-y-8 py-10 px-[121px] rounded-3xl mt-12 mb-12">
                        <h1 className="font-nastaleeqKasheeda text-5xl"> پچھلے سالوں کی موجودہ ڈائری</h1>
                        <div className="flex flex-row-reverse justify-between w-full">
                            <div className="flex flex-col gap-4  items-center">
                                <img src={diary2025} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۴ </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۵-۱۴۴۶ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={diary2024} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۳ </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۴-۱۴۴۵ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={diary2025} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۲  </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۳ -۱۴۴۴ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={diary2025} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۱  </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۲-۱۴۴۳ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={diary2025} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۰ </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۱-۱۴۴۲ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={diary2025} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۱۹ </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۰-۱۴۴۱ </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}