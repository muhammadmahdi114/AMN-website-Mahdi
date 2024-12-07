import Footer from "../Footer/footer";
import Header from "../Header/header";

export default function Home() {
    return (
        <>
            <Header />
            <div className="bg-white min-h-screen mt-28 px-20 text-black text-center font-nastaleeqRegular">
                <div className="flex flex-col justify-center items-center gap-y-8 py-20">
                    <h1 className="font-nastaleeqKasheeda text-4xl">امیرالمومنین حضرت علی (ع) کا ارشاد گرامی ہے</h1>
                    <h2 className="font-alMajeed text-3xl mt-2">مَنْ کَلَّفَ بِالاَدَبِ قَلَّتْ مَسَاوِیہِ وَ مَنْ قَلَّ اَدَبُہُ کَثُرَتْ مَسَاوِیہِ</h2>
                    <p className="text-x2l">(غرر الحکم جلد ۱ صفحہ ۴۰۴)</p>
                    <p className="text-2xl ">جسے ٹھیک ٹھیک تربیت دی جائے گی وہ کم لڑکھڑائے گااور جس کی تربیت میں کسر رہ جائے گی وہ زیادہ ٹھوکریں کھائے گا۔</p>
                </div>
                <div className="bg-primaryBG flex flex-col justify-center items-center gap-y-8 py-10 rounded-lg">
                    <h1 className="font-nastaleeqKasheeda text-4xl">ایسوسی ایشن آف مشتاقان نور</h1>
                    <p className="text-2xl px-28">ایسوسی ایشن آف مشتاقانِ نور (امن)نے تعلیمات محمد و آل محمد علیہم السلام کی روشنی میں بچوں کی تربیت کے لئے کلاسز کا ایسا نظام روشناس کروایا ہے جو امام محمد باقر (ع) کی سیرت سے متاثر ہو کر قائم کی گئی ہیں۔ امام محمد باقر (ع) نے اسی طرح کی کلاسز کے ذریعے لوگوں میں اسلامی معارف عام کئے اور شاگردوں کی تربیت کے بعد انہیں دور دراز علاقوں میں بھیجاتاکہ وہ بھی درست عقائد لوگوں تک پہنچائیں ۔</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-8 py-20">
                    <h1 className="font-nastaleeqKasheeda text-5xl">تربیت اولاد کیوں ضروری ہے؟ </h1>
                    <p className="text-2xl px-28">ہمارے  جگر گوشوں کے بگڑتے رویے، دین سے دوری اور والدین کی عزت میں کمی، سب  امورِ تربیت سے غفلت کا نتیجہ ہیں۔ اگر ہم مولائے کائنات حضرت علی علیہ السلام کے قول پر غور کریں تو حقیقت واضح ہو جائے گی۔<br />
                        انسانی فطرت میں اولاد کی محبت سب سے گہرا اور طاقتور جذبہ ہے۔ والدین اپنے بچوں کی تعلیم و تربیت پر بے پناہ وقت، محنت اور دولت خرچ کرتے ہیں، لیکن بعض اوقات غلط تربیت کی وجہ سے بچے بے راہ ہو جاتے ہیں۔ ابتدا میں بچوں کی غلطیوں کو نظرانداز کیا جاتا ہے، لیکن جب بری عادتیں پختہ ہو جاتی ہیں تو انہیں بدلنا مشکل ہو جاتا ہے۔<br />
                        اس لیے ضروری ہے کہ بچپن ہی سے ایسی تعلیم دی جائے جو ان کے ذہن کو مثبت سمت میں لے جائے اور غلط سوچ سے بچائے۔ تعلیم کا مقصد صرف دنیاوی کامیابی نہیں ہونا چاہیے، بلکہ دینی اور اخلاقی تربیت کو بھی اہمیت دی جانی چاہیے۔ بچوں کو ابتدا سے دین، خدا کی عظمت اور زندگی کے مقصد سے آگاہ کرنا ضروری ہے۔</p>
                </div>
                <div className="bg-primaryBG flex flex-col items-center gap-y-8 py-10 rounded-lg">
                    <h1 className="font-nastaleeqKasheeda text-4xl"><span>:</span>کلاس کے مختلف درجات</h1>
                    <div className="flex lg:gap-x-48">
                        <div>
                            <img src="IC.png" alt="IC Class" className="h-40" />
                            <h2 className="text-3xl mt-10 font-nastaleeqKasheeda">آی سی کلاسز</h2>
                            <p className="text-xl mt-3 text-[#4C4C4C]">عمر ۱۲ سے۱۵ سال</p>
                        </div>
                        <div>
                            <img src="Pre-IC.png" alt="IC Class" className="h-40" />
                            <h2 className="text-3xl mt-10 font-nastaleeqKasheeda">پری آی سی کلاسز</h2>
                            <p className="text-xl mt-3 text-[#4C4C4C]">عمر  ۹ سے ۱۱ سال</p>
                        </div>
                        <div>
                            <img src="Quran-class.png" alt="IC Class" className="h-40" />
                            <h2 className="text-3xl mt-10 font-nastaleeqKasheeda">قرآن کلاسز</h2>
                            <p className="text-xl mt-3 text-[#4C4C4C]">عمر ۶ سے۸ سال</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-8 py-20">
                    <h1 className="font-nastaleeqKasheeda text-4xl">کلاس میں شمولیت کا فارم</h1>
                    <h2 className="text-xl mt-2">براہ کرم داخلہ کی درخواست کے لیے اپنے بچے کی معلومات درج کریں۔</h2>
                    <form className="font-nastaleeqKasheeda w-1/2 space-y-5">
                        <div className="flex w-full justify-between">
                            <div>
                                <input
                                    type="text"
                                    id="GuardianName"
                                    className="w-80 border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                    placeholder="سرپرست کا نام"
                                    dir="rtl"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="w-80 border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                    placeholder="پورا نام"
                                    dir="rtl"
                                />
                            </div>
                        </div>
                        <div className="flex w-full justify-between">
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-52 border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                    placeholder="ای میل"
                                    dir="rtl"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-52 border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                    placeholder="رابطہ نمبر"
                                    dir="rtl"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="age"
                                    className="w-52 border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                    placeholder="عمر"
                                    dir="rtl"
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="address"
                                className="w-full border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                placeholder="پتہ"
                                dir="rtl"
                            />
                        </div>
                        <div className="flex w-full justify-between">
                            <div>
                                <input
                                    type="text"
                                    id="city"
                                    className="w-80 border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                    placeholder="شہر"
                                    dir="rtl"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="country"
                                    className="w-80 border rounded-md py-2 px-3 placeholder:text-lg focus:outline-none focus:ring focus:ring-primary"
                                    placeholder="ملک"
                                    dir="rtl"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-1/3 bg-primary text-xl text-white py-2 px-4 rounded-full hover:bg-secondary focus:outline-none focus:ring focus:ring-primary"
                            >
                                درخواست بھیجیں۔
                            </button>
                        </div>
                    </form>

                </div>
            </div >
            <Footer />
        </>
    )
}