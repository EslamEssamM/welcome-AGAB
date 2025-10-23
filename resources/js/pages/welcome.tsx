import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Welcome() {
    const { flash } = usePage().props as any;

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
    });    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/newsletter/subscribe', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const products = [
        'Bee Boxes & Woodenware (Deep, Medium, Shallow)',
        'Frames (Assembled & Unassembled)',
        'Lids (Migrator & Telescopic)',
        'Bottom Boards (Screened, Plain, 4-way Pallet)',
        'Feeders (Top, Frame, Entrance)',
        'Protective Gear (PPE Suits, Gloves, Veils, Jackets)',
        'Bee Nutrition (Bee Fondant & Supplements)',
        'Smokers',
    ];

    return (
        <>
            <Head title="Welcome to Our Hive - American Golden Age Beekeeping">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=playfair-display:700|inter:400,500,600" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
                <div className="fixed inset-0 opacity-5" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E\")",
                    backgroundSize: '60px 60px'
                }} />

                <div className="relative z-10">
                    <header className="container mx-auto px-4 py-8 text-center">
                        <div className="flex justify-center mb-6">
                            <img
                                src="/logo.png"
                                alt="AGAB Logo"
                                className="h-32 w-auto drop-shadow-lg"
                            />
                        </div>
                    </header>

                    <main className="container mx-auto px-4 py-8 max-w-6xl">
                        <div className="text-center mb-16 animate-fade-in">
                            <div className="inline-block mb-6">
                                <div className="text-6xl mb-4">🐝</div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-serif">
                                Welcome to Our Hive!
                            </h1>
                            <div className="max-w-2xl mx-auto space-y-4 text-lg text-gray-700">
                                <p className="text-2xl font-semibold text-amber-800">
                                    Our website is buzzing with updates!
                                </p>
                                <p>
                                    While we build something sweet, you can message us on WhatsApp,
                                    watch our products on YouTube, or sign up with your email to get{' '}
                                    <span className="font-bold text-amber-600">10% off your first order</span>{' '}
                                    when we launch.
                                </p>
                                <p className="text-xl font-medium text-amber-700 italic">
                                    Stay tuned — something sweet is coming soon!
                                </p>
                            </div>
                        </div>

                        <div className="max-w-md mx-auto mb-16">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-amber-300">
                                <h2 className="text-2xl font-bold text-amber-900 mb-4 text-center">
                                    🍯 Get Your Sweet Discount!
                                </h2>

                                {flash?.success && (
                                    <div className="mb-4 p-4 bg-green-100 border-2 border-green-400 text-green-800 rounded-lg text-center">
                                        {flash.success}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="mt-2 text-red-600 text-sm">{errors.email}</p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                    >
                                        {processing ? 'Subscribing...' : 'Subscribe & Save 10%'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="mb-16">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-amber-300">
                                <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center font-serif">
                                    Beekeeping Equipment & Supplies
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {products.map((product, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 p-4 bg-amber-50 rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all"
                                        >
                                            <span className="text-2xl">🐝</span>
                                            <span className="font-semibold text-gray-800">{product}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <a
                                        href="/AGAB-Flyer.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span>Download Our Flyer</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <a
                                href="https://wa.me/15103777885"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl p-12 transition-all duration-300 hover:shadow-green-500/50 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                                <div className="relative z-10 text-center text-white">
                                    <div className="mb-6 flex justify-center">
                                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">WhatsApp</h3>
                                    <p className="text-lg opacity-90 mb-6">Chat with us directly</p>
                                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                                        <span className="text-sm font-semibold">Message Now</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://youtube.com/@agabusa?si=3i7_LFHoOB5Lk0av"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden bg-gradient-to-br from-red-500 to-red-700 rounded-3xl shadow-2xl p-12 transition-all duration-300 hover:shadow-red-500/50 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                                <div className="relative z-10 text-center text-white">
                                    <div className="mb-6 flex justify-center">
                                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">YouTube</h3>
                                    <p className="text-lg opacity-90 mb-6">Watch our videos</p>
                                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                                        <span className="text-sm font-semibold">Watch Now</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-amber-300 mb-16">
                            <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center font-serif">
                                About American Golden Age Beekeeping
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="text-center mb-6">
                                    American Golden Age Beekeeping (AGAB) is your trusted supplier for professional
                                    beekeeping equipment and supplies. We offer everything from bee boxes and frames to
                                    protective gear and nutrition products. Whether you're a commercial beekeeper or just
                                    starting your first hive, we have the quality equipment you need.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center p-6 bg-amber-50 rounded-lg">
                                        <div className="mb-3 flex justify-center">
                                            <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">Complete Equipment</h4>
                                        <p className="text-sm">From bee boxes to protective gear, we've got you covered</p>
                                    </div>
                                    <div className="text-center p-6 bg-amber-50 rounded-lg">
                                        <div className="mb-3 flex justify-center">
                                            <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">Quality Products</h4>
                                        <p className="text-sm">Professional-grade beekeeping supplies and equipment</p>
                                    </div>
                                    <div className="text-center p-6 bg-amber-50 rounded-lg">
                                        <div className="mb-3 flex justify-center">
                                            <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">Easy Ordering</h4>
                                        <p className="text-sm">Visit www.agab.co to place your order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className="bg-amber-900 text-amber-50 py-8 mt-16">
                        <div className="container mx-auto px-4 text-center">
                            <div className="mb-4">
                                <p className="text-xl font-bold mb-2">🐝 American Golden Age Beekeeping 🍯</p>
                                <p className="text-sm opacity-90">Creating sweet memories, one hive at a time</p>
                            </div>
                            <p className="text-sm opacity-75">
                                © {new Date().getFullYear()} AGAB. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
            `}</style>
        </>
    );
}
