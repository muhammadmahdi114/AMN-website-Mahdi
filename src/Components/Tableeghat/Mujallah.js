import React from 'react'
import Footer from "../Footer/footer";
import Header from "../Header/header";
import reading from '../../Assets/images/reading.svg'
import shairy from '../../Assets/images/shairy.svg'
import mujallah1 from '../../Assets/images/mujallahimage1.svg'


const Mujallah = () => {
  return (
    <>

            <Header />
            <div className="bg-white min-h-screen w-full mt-28 px-5 sm:px-10 md:px-16 lg:px-20 text-black text-center font-nastaleeqRegular font-normal">
                <div className="pt-10 sm:pt-16 md:pt-20">
                    <div className="bg-primaryBG rounded-3xl py-8 sm:py-10 md:py-12 px-5 sm:px-10 md:px-20">
                        <div className="flex flex-col sm:flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start">
                            <img
                                src={mujallah1}
                                alt="Diary 2024"
                            />
                            <div className="pl-0 sm:pl-5 md:pl-10 lg:pl-[105px] py-5 sm:py-10 lg:py-10">
                                <p className="font-nastaleeqKasheeda text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-right mb-5 lg:mb-10">
                                نور عصر مجلہ ۲۰۲۴
                                </p>
                                <p className=" text-xl sm:text-2xl md:text-[32px] text-right font-nastaleeqRegular max-w-[470px]">
                                ایسوسی ایشن اف مشتاقان نور (ع) ہر سال ایام فاطمیہ  (ع) اور محرم کے عنوان سے۲ نور عصر مجلہ کا اجراء کرتا ہے۔ الحمد للہ کام گزاشتہ کئی سالوں سے برادران کی علمی مطالعہ اور کوششوں سے جاری ہے۔                                </p>
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
                        <h1 className="font-nastaleeqKasheeda text-5xl"> مجلہ کی مختلف خصوصیات</h1>
                        <div className="flex flex-row-reverse justify-center gap-20 w-full">
                            <div className="flex flex-col gap-4 h-36 items-center">
                                <img src={reading} alt="IC Class" className="h-20" />
                                <h2 className="text-[32px]  font-nastaleeqKasheeda">تازہ ترین  مضامین</h2>
                            </div>
                            <div className="flex flex-col gap-4 h-36 items-center">
                                <img src={shairy} alt="IC Class" className="h-20" />
                                <h2 className="text-[32px]  font-nastaleeqKasheeda"> موضوعات پر شاعری</h2>
                            </div>
                            

                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-12 '>
                        <p className='font-nastaleeqRegular text-5xl font-normal mb-6'>اداریہ</p>
                        <div className=" align-middle rtl w-full flex flex-col gap-6  px-[121px]">
                            <p className="font-nastaleeqRegular text-[36px]">کر بلا سچائی پر جم جانے اور صداقت سے سر و قدم نہ بنانے کی بہترین مثال ہے، ایثار و قربانی کے نمونے کر بلا سے بہتر کہیں نہیں ملتے۔ بڑی سے بڑی مصیبت کو برداشت کرنے اور صبر و استقلال میں ذرا بھر فرق نہ آنے کے واقعات اور امام کی اطاعت وفرمانبرداری کو
ہر شے پر مقدم کر دینے کی نظیر یہاں سے بڑھ کر کہیں نہیں مل سکتی۔ واقعا عجیب نہیں ہے کہ چودہ صدیاں گذرنے کے باوجود ابھی تک کر بلا زندہ ہے نا صرف زندہ ہے بلکہ بالکل تازہ ہے۔ اس کی وجہ معرکہ کربلا کے شہید ہیں۔ جہاں ہر کوئی اپنی جان ہتھیلی پر رکھے امام حسین علیہ السلام کے گرد پروانہ وار طواف میں مصروف ہے ۔ ان شہداء گرامی کی دل سوز شہادت کے باوجود اس محبت امام میں ذرہ برابر کی دیکھنے کو نہیں ملتی حالانکہ اب جوانوں کی بجائے مستورات ہیں، چھوٹے چھوٹے بچے ہیں مگر محبت و معرفت امام کی بنا پر پورے لشکر یزید پر حاوی نظر آتے ہیں۔ ان اسیروں کے قافلہ سالار مولا امام سجاد
علیہ السلام ہیں اور خود قافلہ سالار کی محافظ و نگہبان مخدرۂ عصمت بی بی زینب سلام اللہ علیہا ہیں۔</p>
                            <div className='text-center text-[36px] mt'>
                                <p>زندہ وفا کا نام ہے زینب کے نام سے</p>
                                <p>
                            آگاہ اب بھی شام ہے زینب کے نام سے
                            </p>
                            <p>مجلس کا اہتمام ہے زینب کے نام سے</p>
                            <p>یہ کر بلا دوام ہے زینب کے نام سے</p>
                            <p>زينب کا ہر بیان ہے تفسیر کربلا</p>
                            <p>زینب کا امیتاز ہے تشہیر کربلا</p>
                            </div>
                            <p className="font-nastaleeqRegular text-[36px]">
                            جناب زینب سلام اللہ علیہا نے اپنے خطبہ دربار شام میں اعتماد کے ساتھ فرمایا تھا: اے یزید تو اپنے تمام مکر و حیلوں کو استعمال کر لے اور اپنی پوری طاقت سے کوشش کر لے لیکن قسم خدا کی تو ہماری یاد کو نہیں مٹا سکتا ہے اور وحی الہی کو نابود نہیں کر سکتا ہے۔
                            </p>
                            <p className="font-nastaleeqRegular text-[36px]">
                            یہ مجالس عزا در اصل جناب زینب سلام اللہ علیہا کی وہی گونج ہیں جو انہوں نے کوفہ و شام میں بلند کی تھی۔ چنانچہ ہمیں یہ مجالس رسما اور باپ دادا کی سنت سمجھ کر نہیں بلکہ حسین زمان ( عج ) کی مدد ونصرت اور ان انقلاب کے لیے راہ ہموار کرنے کے لئے بر پا کرنی چاہیں۔ ہمیں ایسی مجالس عزاداری بپا کرتا ہوں گی جو ہمیں امام عصر ارواحتالہ اللہ کی مدد و نصرت کے لیے تیار کریں۔ ہماری اکثر مجالس ذکر امام زمان عجل الله تعالی فرجہ الشریف سے خالی ہوتی ہیں جبکہ ہمارا عقیدہ ہے کہ ہم ان مجالس کے ذریعہ امام وقت ( عج ) ہی کو ان کے جد کا پرسہ دیتے ہیں اور جن کو پرسہ دیا جاتا ہے ان کا نام تک نہیں لیتے ۔ حالانکہ ساری مجالس مولا و آقا امام زمان (عج ) کے لیے ہونی چاہیے۔
                            </p>
                           <p className="font-nastaleeqRegular text-[36px]">آئے سوچیں اور اپنی ان مجالس محافل کے ذریعہ اپنے وقت کے امام کی طرف قدم بڑھائیں۔</p>
                        </div>
                    </div>
                    
                    <div className="bg-primaryBG flex flex-col items-center gap-y-8 py-10 px-[121px] rounded-3xl mt-12 mb-12">
                        <h1 className="font-nastaleeqKasheeda text-5xl">  پچھلے سالوں کے موجودہ مجلہ</h1>
                        <div className="flex flex-row-reverse justify-between w-full">
                            <div className="flex flex-col gap-4  items-center">
                                <img src={mujallah1} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۴ </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۵-۱۴۴۶ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={mujallah1} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۳ </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۴-۱۴۴۵ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={mujallah1} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۲  </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۳ -۱۴۴۴ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={mujallah1} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۱  </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۲-۱۴۴۳ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={mujallah1} alt="IC Class" className="h-[200px] w-[129px]" />
                                <h2 className="text-3xl  font-nastaleeqKasheeda"> ۲۰۲۰ </h2>
                            <p className="text-2xl  text-[#4C4C4C]"> ۱۴۴۱-۱۴۴۲ </p>
                            </div>
                            <div className="flex flex-col gap-4  items-center">
                                <img src={mujallah1} alt="IC Class" className="h-[200px] w-[129px]" />
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

export default Mujallah