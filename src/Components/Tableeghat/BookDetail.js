import React from 'react'
import Footer from "../Footer/footer";
import Header from "../Header/header";
import book1 from '../../Assets/images/book1.jpg';
import book2 from '../../Assets/images/book2.jpg';
import book3 from '../../Assets/images/book3.jpg';

const BookDetail = () => {
    return (
        <>
            <Header />
            <div dir="rtl" className="bg-white min-h-screen w-full px-5 sm:px-10 md:px-16 lg:px-20 text-black text-center font-nastaleeqRegular font-normal">
                <div className="pt-10 sm:pt-16 md:pt-20">
                    <div className="bg-primaryBG rounded-3xl py-8 sm:py-10 md:py-12 px-5 sm:px-10 md:px-[121px]">
                        <div className="flex flex-col sm:flex-col lg:flex-row gap-8 items-start lg:items-start">

                            <img src={book1} />
                            <img src={book1} />

                            <div className='flex flex-col gap-8 items-start'>
                                <p className='font-nastaleeqKasheeda text-[40px] mb-5'>عصر غیبت کی ذمہ داریاں</p>
                                <div className='flex  gap-8'>
                                    <div className='flex flex-col gap-1 items-start' >
                                        <p className='font-nastaleeqKasheeda text-[32px]'>مصنف کا نام</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'> اشاعت کا سال</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'> کاپیوں کی تعداد</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'> کتاب کا ورژن</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'> پبلشر کا نام</p>
                                    </div>
                                    <div className='flex flex-col gap-1 items-start'>
                                        <p className='font-nastaleeqKasheeda text-[32px]'>مصنف کا نام</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'> ۲۰۱۶</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'> ۱۲۰۰</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'> ۱</p>
                                        <p className='font-nastaleeqKasheeda text-[32px]'>ایسوسی ایشن آف مشتاقان نور(امن)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                     {/* Text Section */}
                <div className="mt-[48px] flex flex-col items-center justify-center gap-6">
                    <p className='font-nastaleeqKasheeda text-[48px]'>کتاب کا تعارف</p>
                    <p className='font-nastaleeqRegular text-[32px]  px-[242px]'> انجمن مشتاقان نور نے یہ کتاب "عصر غیبت میں ہماری زمہ داریاں" کے نام سے شائع کی ہے جس میں امام مہدی عج کے منتظرین کی تمام ذمہ داریاں اور خصوصیات موجود ہیں۔ یہ کتاب علم کی دولت سے مالا مال ہے اور ہر منتظر کے لیے لازمی ہے کہ اسے پڑھے۔</p>
                </div>

                <div className='flex flex-col items-center mt-12 '>
                        <p className='font-nastaleeqRegular text-5xl font-normal mb-6'>موضوعات</p>
                        <div className="flex flex-row-reverse justify-around align-middle rtl w-full max-w-screen-lg">
                            <ul className="font-nastaleeqRegular list-disc list-inside p-2 text-right text-4xl decoration-1 leading-10" dir="rtl">
                                <li>حصولِ علم</li>
                                <li>غوروفکر</li>
                                <li>تعارف امامؑ میں سعی</li>
                                <li>موضوع نمبر ۴</li>
                                <li>موضوع نمبر ۵</li>
                            </ul>
                            <ul className="font-nastaleeqRegular list-disc list-inside p-2 text-right text-4xl leading-10" dir="rtl">
                                <li>تعارف امامؑ میں سعی</li>
                                <li>محافظہ ٔ ولایت</li>
                                <li>دشمن و شیعہ امام ؑ کی معرفت</li>
                                <li>موضوع نمبر ۴</li>
                                <li>موضوع نمبر ۵</li>
                            </ul>
                            <ul className="font-nastaleeqRegular list-disc list-inside p-2 text-right text-4xl leading-10" dir="rtl">
                                <li>غیبت و تہمت سے دُوری</li>
                                <li>اگر امام زمانؑہ نہ ہوں</li>
                                <li>پیغام عاشور</li>
                                <li>موضوع نمبر ۴</li>
                                <li>موضوع نمبر ۵</li>
                            </ul>
                        </div>


                    </div>
                    
                    <div className="mt-[48px] mb-12 flex flex-col items-center justify-center gap-6">
                    <p className='font-nastaleeqKasheeda text-[48px]'>ہماری کتابیں</p>
                    <div className='flex justify-between gap-4'>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book1} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book2} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BookDetail