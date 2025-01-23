import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Nike Air Force 1",
    description: "Sepatu klasik dari Nike dengan desain timeless.",
    price: 1799000,
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    description: "Sepatu lari dengan bantalan Boost yang nyaman.",
    price: 2999000,
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    description: "Smartphone flagship dengan kamera canggih.",
    price: 12999000,
  },
  {
    id: 4,
    name: "Apple MacBook Air M2",
    description: "Laptop tipis dengan performa tinggi dari Apple.",
    price: 16999000,
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    description: "Headphone noise-canceling terbaik di kelasnya.",
    price: 4599000,
  },
  {
    id: 6,
    name: "Xiaomi Redmi Note 12 Pro",
    description: "Smartphone mid-range dengan kamera 108 MP.",
    price: 4199000,
  },
  {
    id: 7,
    name: "Asus ROG Zephyrus G14",
    description: "Laptop gaming ultra-portable dengan spesifikasi tinggi.",
    price: 24999000,
  },
  {
    id: 8,
    name: "Logitech MX Master 3",
    description: "Mouse ergonomis dengan performa presisi.",
    price: 1399000,
  },
  {
    id: 9,
    name: "IKEA Billy Bookcase",
    description: "Rak buku minimalis dan fungsional dari IKEA.",
    price: 899000,
  },
  {
    id: 10,
    name: "Uniqlo Ultra Light Down Jacket",
    description: "Jaket ringan dan hangat untuk segala cuaca.",
    price: 799000,
  },
  {
    id: 11,
    name: "Canon EOS R6",
    description: "Kamera mirrorless dengan kemampuan video 4K.",
    price: 35999000,
  },
  {
    id: 12,
    name: "PlayStation 5",
    description: "Konsol game generasi terbaru dari Sony.",
    price: 8499000,
  },
  {
    id: 13,
    name: "Nintendo Switch OLED",
    description: "Konsol hybrid dengan layar OLED yang lebih cerah.",
    price: 5799000,
  },
  {
    id: 14,
    name: "Apple AirPods Pro 2",
    description: "Earbuds dengan fitur noise-canceling aktif.",
    price: 3299000,
  },
  {
    id: 15,
    name: "GoPro Hero 11 Black",
    description: "Kamera aksi dengan perekaman video 5.3K.",
    price: 7499000,
  },
  {
    id: 16,
    name: "Dyson V12 Detect Slim",
    description: "Vacuum cleaner dengan teknologi deteksi debu laser.",
    price: 10999000,
  },
  {
    id: 17,
    name: "Casio G-Shock GA2100",
    description: "Jam tangan tahan banting dengan desain minimalis.",
    price: 1799000,
  },
  {
    id: 18,
    name: "Samsung The Frame TV",
    description: "Smart TV yang berfungsi juga sebagai dekorasi dinding.",
    price: 15999000,
  },
  {
    id: 19,
    name: "Lego Star Wars Millennium Falcon",
    description: "Set LEGO dengan detail tinggi untuk kolektor Star Wars.",
    price: 21999000,
  },
  {
    id: 20,
    name: "Acer Nitro 5",
    description: "Laptop gaming budget-friendly dengan performa solid.",
    price: 13999000,
  },
  {
    id: 21,
    name: "Huawei Watch GT 3 Pro",
    description: "Smartwatch premium dengan fitur kesehatan lengkap.",
    price: 4999000,
  },
  {
    id: 22,
    name: "Philips Airfryer XXL",
    description: "Air fryer dengan kapasitas besar untuk memasak sehat.",
    price: 3999000,
  },
  {
    id: 23,
    name: "Bose SoundLink Revolve II",
    description: "Speaker portabel dengan suara 360 derajat.",
    price: 3999000,
  },
  {
    id: 24,
    name: "Dell XPS 13 Plus",
    description: "Laptop premium dengan desain edge-to-edge keyboard.",
    price: 24999000,
  },
  {
    id: 25,
    name: "Fitbit Charge 5",
    description: "Fitness tracker dengan fitur kesehatan canggih.",
    price: 2299000,
  },
  {
    id: 26,
    name: "TCL 55C725 QLED TV",
    description: "Smart TV 4K dengan teknologi Quantum Dot.",
    price: 6499000,
  },
  {
    id: 27,
    name: "Samsung Galaxy Watch 6",
    description: "Smartwatch dengan fitur kesehatan dan kebugaran.",
    price: 4399000,
  },
  {
    id: 28,
    name: "Yamaha PSR-E473",
    description: "Keyboard portabel untuk pemula dan pemain tingkat lanjut.",
    price: 4199000,
  },
  {
    id: 29,
    name: "Herman Miller Aeron Chair",
    description: "Kursi kerja ergonomis dengan kualitas premium.",
    price: 29999000,
  },
  {
    id: 30,
    name: "Anker PowerCore III",
    description: "Power bank dengan kapasitas besar dan pengisian cepat.",
    price: 699000,
  },
  {
    id: 31,
    name: "Nike Dunk Low Panda",
    description: "Sepatu sneaker klasik dengan warna hitam putih.",
    price: 2199000,
  },
  {
    id: 32,
    name: "Dyson Supersonic Hair Dryer",
    description: "Hair dryer dengan teknologi cepat dan aman.",
    price: 6799000,
  },
  {
    id: 33,
    name: "Beats Studio Buds",
    description: "Earbuds nirkabel dengan kualitas audio premium.",
    price: 1999000,
  },
  {
    id: 34,
    name: "Microsoft Surface Pro 9",
    description: "Tablet dan laptop 2-in-1 dengan performa tinggi.",
    price: 17999000,
  },
  {
    id: 35,
    name: "Razer BlackWidow V3",
    description: "Keyboard mekanis untuk gaming dengan RGB lighting.",
    price: 2299000,
  },
  {
    id: 36,
    name: "Sony Alpha 7 IV",
    description: "Kamera mirrorless dengan performa profesional.",
    price: 35999000,
  },
  {
    id: 37,
    name: "Theragun Pro",
    description: "Perangkat pijat otot dengan kekuatan tinggi.",
    price: 10499000,
  },
  {
    id: 38,
    name: "Xiaomi Mi Smart Band 7",
    description: "Smart band murah dengan fitur fitness lengkap.",
    price: 499000,
  },
  {
    id: 39,
    name: "LG Gram 16",
    description: "Laptop ultrabook ringan dengan layar besar.",
    price: 24999000,
  },
  {
    id: 40,
    name: "New Balance 550",
    description: "Sneakers retro yang sedang tren.",
    price: 1799000,
  },
  {
    id: 41,
    name: "Kindle Paperwhite",
    description: "E-reader dengan layar anti-silau untuk membaca nyaman.",
    price: 1799000,
  },
  {
    id: 42,
    name: "Dyson Pure Cool Air Purifier",
    description: "Pemurni udara dengan kipas canggih.",
    price: 9999000,
  },
  {
    id: 43,
    name: "Sennheiser HD 660S",
    description: "Headphone audiophile dengan suara berkualitas tinggi.",
    price: 7499000,
  },
  {
    id: 44,
    name: "Apple iPad Pro M2",
    description: "Tablet dengan performa layaknya laptop.",
    price: 19999000,
  },
  {
    id: 45,
    name: "Garmin Forerunner 955",
    description: "Jam tangan GPS untuk pelari profesional.",
    price: 8999000,
  },
  {
    id: 46,
    name: "Sony PlayStation DualSense",
    description: "Controller PS5 dengan fitur haptic feedback.",
    price: 999000,
  },
  {
    id: 47,
    name: "Puma Future Z 1.4",
    description: "Sepatu bola dengan teknologi adaptif.",
    price: 2799000,
  },
  {
    id: 48,
    name: "Zojirushi Rice Cooker",
    description: "Rice cooker premium dengan fitur memasak pintar.",
    price: 3499000,
  },
  {
    id: 49,
    name: "Samsung Galaxy Z Flip 5",
    description: "Smartphone lipat dengan desain compact.",
    price: 17999000,
  },
  {
    id: 50,
    name: "HyperX Cloud II",
    description: "Headset gaming dengan kualitas audio superior.",
    price: 1399000,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((product) => product.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Hello World",
        data: detailProduct,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Product not found",
        data: null,
      });
    }
  }
  return NextResponse.json({ status: 200, message: "Hello World", data });
}
