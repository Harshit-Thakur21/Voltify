export const products = {
    categories: [
      {
        id: "laptops",
        name: "Laptops",
        products: [
          {
            id: "macbook-pro-16",
            name: "MacBook Pro 16-inch",
            brand: "Apple",
            price: 1999.99,
            description: "16-inch Retina Display, M2 Pro chip, 16GB RAM, 512GB SSD",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=MacBook+Pro",
            specs: {
              processor: "Apple M2 Pro",
              ram: "16GB",
              storage: "512GB SSD",
              display: "16-inch Retina",
              os: "macOS"
            },
            inStock: true,
            discount: 0
          },
          {
            id: "dell-xps-15",
            name: "Dell XPS 15",
            brand: "Dell",
            price: 1799.99,
            description: "15.6-inch 4K OLED, Intel i9, 32GB RAM, 1TB SSD",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Dell+XPS",
            specs: {
              processor: "Intel Core i9 12th Gen",
              ram: "32GB",
              storage: "1TB SSD",
              display: "15.6-inch 4K OLED",
              os: "Windows 11"
            },
            inStock: true,
            discount: 10
          },
          {
            id: "lenovo-thinkpad-x1",
            name: "Lenovo ThinkPad X1 Carbon",
            brand: "Lenovo",
            price: 1599.99,
            description: "14-inch 2.8K OLED, Intel i7, 16GB RAM, 1TB SSD",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=ThinkPad+X1",
            specs: {
              processor: "Intel Core i7 12th Gen",
              ram: "16GB",
              storage: "1TB SSD",
              display: "14-inch 2.8K OLED",
              os: "Windows 11 Pro"
            },
            inStock: true,
            discount: 15
          },
          {
            id: "hp-spectre-x360",
            name: "HP Spectre x360",
            brand: "HP",
            price: 1499.99,
            description: "13.5-inch 3K2K OLED, Intel i7, 16GB RAM, 512GB SSD",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Spectre+x360",
            specs: {
              processor: "Intel Core i7 12th Gen",
              ram: "16GB",
              storage: "512GB SSD",
              display: "13.5-inch 3K2K OLED",
              os: "Windows 11"
            },
            inStock: true,
            discount: 5
          },
          {
            id: "asus-rog-zephyrus",
            name: "ASUS ROG Zephyrus G14",
            brand: "ASUS",
            price: 1699.99,
            description: "14-inch QHD, AMD Ryzen 9, 32GB RAM, 1TB SSD",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=ROG+Zephyrus",
            specs: {
              processor: "AMD Ryzen 9 6900HS",
              ram: "32GB",
              storage: "1TB SSD",
              display: "14-inch QHD 120Hz",
              os: "Windows 11"
            },
            inStock: true,
            discount: 0
          },
          {
            id: "razer-blade-15",
            name: "Razer Blade 15",
            brand: "Razer",
            price: 2299.99,
            description: "15.6-inch QHD, Intel i9, 32GB RAM, 1TB SSD",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Razer+Blade",
            specs: {
              processor: "Intel Core i9 12th Gen",
              ram: "32GB",
              storage: "1TB SSD",
              display: "15.6-inch QHD 240Hz",
              os: "Windows 11"
            },
            inStock: true,
            discount: 12
          }
        ]
      },
      {
        id: "phones",
        name: "Mobile & Phones",
        products: [
          {
            id: "iphone-14-pro",
            name: "iPhone 14 Pro Max",
            brand: "Apple",
            price: 1099.99,
            description: "6.7-inch Super Retina XDR, A16 Bionic, 256GB",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=iPhone+14",
            specs: {
              screen: "6.7-inch OLED",
              processor: "A16 Bionic",
              storage: "256GB",
              camera: "48MP + 12MP + 12MP",
              battery: "4323mAh"
            },
            inStock: true,
            discount: 0
          },
          {
            id: "samsung-s23-ultra",
            name: "Samsung Galaxy S23 Ultra",
            brand: "Samsung",
            price: 1199.99,
            description: "6.8-inch Dynamic AMOLED, Snapdragon 8 Gen 2, 512GB",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Samsung+S23",
            specs: {
              screen: "6.8-inch Dynamic AMOLED",
              processor: "Snapdragon 8 Gen 2",
              storage: "512GB",
              camera: "200MP + 12MP + 10MP + 10MP",
              battery: "5000mAh"
            },
            inStock: true,
            discount: 15
          },
          {
              id: "pixel-7-pro",
            name: "Google Pixel 7 Pro",
            brand: "Google",
            price: 899.99,
            description: "6.7-inch LTPO OLED, Google Tensor G2, 256GB",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Pixel+7+Pro",
            specs: {
              screen: "6.7-inch LTPO OLED",
              processor: "Google Tensor G2",
              storage: "256GB",
              camera: "50MP + 12MP + 48MP",
              battery: "5000mAh"
            },
            inStock: true,
            discount: 10
          },
          {
            id: "oneplus-11",
            name: "OnePlus 11",
            brand: "OnePlus",
            price: 699.99,
            description: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 128GB",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=OnePlus+11",
            specs: {
              screen: "6.7-inch AMOLED",
              processor: "Snapdragon 8 Gen 2",
              storage: "128GB",
              camera: "50MP + 48MP + 32MP",
              battery: "5000mAh"
            },
            inStock: true,
            discount: 5
          },
          {
            id: "xiaomi-13-pro",
            name: "Xiaomi 13 Pro",
            brand: "Xiaomi",
            price: 999.99,
            description: "6.73-inch AMOLED, Snapdragon 8 Gen 2, 256GB",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Xiaomi+13+Pro",
            specs: {
              screen: "6.73-inch AMOLED",
              processor: "Snapdragon 8 Gen 2",
              storage: "256GB",
              camera: "50MP + 50MP + 50MP",
              battery: "4820mAh"
            },
            inStock: true,
            discount: 8
          },
          {
            id: "nothing-phone-1",
            name: "Nothing Phone (1)",
            brand: "Nothing",
            price: 499.99,
            description: "6.55-inch OLED, Snapdragon 778G+, 128GB",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Nothing+Phone",
            specs: {
              screen: "6.55-inch OLED",
              processor: "Snapdragon 778G+",
              storage: "128GB",
              camera: "50MP + 50MP",
              battery: "4500mAh"
            },
            inStock: true,
            discount: 15
          }
        ]
      },
      {
        id: "tv",
        name: "TV",
        products: [
          {
            id: "samsung-neo-qled",
            name: "Samsung Neo QLED 4K",
            brand: "Samsung",
            price: 2499.99,
            description: "65-inch Neo QLED 4K, Quantum HDR, Smart TV",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Samsung+TV",
            specs: {
              display: "65-inch Neo QLED",
              resolution: "4K",
              hdr: "Quantum HDR",
              refresh: "120Hz",
              smart: "Tizen OS"
            },
            inStock: true,
            discount: 20
          },
          {
            id: "lg-oled-c2",
            name: "LG OLED C2",
            brand: "LG",
            price: 1999.99,
            description: "55-inch OLED evo, 4K, Smart TV",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=LG+OLED",
            specs: {
              display: "55-inch OLED evo",
              resolution: "4K",
              hdr: "Dolby Vision IQ",
              refresh: "120Hz",
              smart: "webOS"
            },
            inStock: true,
            discount: 10
          },
          {
            id: "sony-a80k",
            name: "Sony A80K OLED",
            brand: "Sony",
            price: 1799.99,
            description: "65-inch OLED, 4K, Google TV",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Sony+OLED",
            specs: {
              display: "65-inch OLED",
              resolution: "4K",
              hdr: "Dolby Vision",
              refresh: "120Hz",
              smart: "Google TV"
            },
            inStock: true,
            discount: 15
          },
          {
            id: "tcl-6-series",
            name: "TCL 6-Series Mini-LED",
            brand: "TCL",
            price: 999.99,
            description: "65-inch QLED, 4K, Roku TV",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=TCL+TV",
            specs: {
              display: "65-inch QLED",
              resolution: "4K",
              hdr: "HDR10+",
              refresh: "120Hz",
              smart: "Roku TV"
            },
            inStock: true,
            discount: 25
          },
          {
            id: "hisense-u8h",
            name: "Hisense U8H Mini-LED",
            brand: "Hisense",
            price: 1299.99,
            description: "65-inch ULED, 4K, Google TV",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Hisense+TV",
            specs: {
              display: "65-inch ULED",
              resolution: "4K",
              hdr: "HDR10+",
              refresh: "120Hz",
              smart: "Google TV"
            },
            inStock: true,
            discount: 20
          },
          {
            id: "vizio-p-series",
            name: "Vizio P-Series Quantum",
            brand: "Vizio",
            price: 1199.99,
            description: "65-inch Quantum, 4K, SmartCast",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Vizio+TV",
            specs: {
              display: "65-inch Quantum",
              resolution: "4K",
              hdr: "Dolby Vision",
              refresh: "120Hz",
              smart: "SmartCast"
            },
            inStock: true,
            discount: 18
          }
        ]
      },
      {
        id: "accessories",
        name: "Accessories",
        products: [
          {
            id: "airpods-pro",
            name: "AirPods Pro (2nd Gen)",
            brand: "Apple",
            price: 249.99,
            description: "Active Noise Cancellation, Spatial Audio",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=AirPods+Pro",
            specs: {
              type: "True Wireless Earbuds",
              battery: "6 hours",
              features: ["ANC", "Spatial Audio", "Water Resistant"],
              connectivity: "Bluetooth 5.3"
            },
            inStock: true,
            discount: 0
          },
          {
            id: "samsung-watch5",
            name: "Samsung Galaxy Watch 5",
            brand: "Samsung",
            price: 279.99,
            description: "44mm, Advanced Sleep Coaching, Body Composition",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Galaxy+Watch",
            specs: {
              display: "1.4-inch Super AMOLED",
              battery: "410mAh",
              sensors: ["Heart Rate", "ECG", "Body Composition"],
              os: "Wear OS"
            },
            inStock: true,
            discount: 15
          },
          {
            id: "logitech-mx-master",
            name: "Logitech MX Master 3S",
            brand: "Logitech",
            price: 99.99,
            description: "Advanced Wireless Mouse, 8K DPI",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=MX+Master",
            specs: {
              dpi: "8000",
              buttons: "7",
              battery: "70 days",
              connectivity: ["Bluetooth", "USB Wireless"]
            },
            inStock: true,
            discount: 0
          },
          {
            id: "sony-wh1000xm5",
            name: "Sony WH-1000XM5",
            brand: "Sony",
            price: 399.99,
            description: "Wireless Noise Cancelling Headphones",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Sony+WH1000XM5",
            specs: {
              type: "Over-ear Headphones",
              battery: "30 hours",
              features: ["ANC", "LDAC", "Touch Controls"],
              connectivity: "Bluetooth 5.2"
            },
            inStock: true,
            discount: 10
          },
          {
            id: "keychron-k8-pro",
            name: "Keychron K8 Pro",
            brand: "Keychron",
            price: 199.99,
            description: "Wireless Mechanical Keyboard, Hot-swappable",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=Keychron+K8",
            specs: {
              type: "Mechanical Keyboard",
              switches: "Gateron G Pro",
              features: ["Hot-swappable", "RGB", "QMK/VIA"],
              connectivity: ["Bluetooth", "USB-C"]
            },
            inStock: true,
            discount: 5
          },
          {
            id: "samsung-t7-shield",
            name: "Samsung T7 Shield 2TB",
            brand: "Samsung",
            price: 199.99,
            description: "Portable SSD, Rugged Design, USB 3.2",
            image: "https://fakeimg.pl/600x400/f1f5f9/808080?text=T7+Shield",
            specs: {
              type: "External SSD",
              capacity: "2TB",
              speed: "1050MB/s",
              features: ["Shock Resistant", "IP65 Rating"],
              connectivity: "USB-C"
            },
            inStock: true,
            discount: 20
          }
        ]
      }
    ]
  };
  
  // Helper functions to work with the data
  export const getAllProducts = () => {
    return products.categories.flatMap(category => category.products);
  };
  
  export const getProductsByCategory = (categoryId) => {
    const category = products.categories.find(cat => cat.id === categoryId);
    return category ? category.products : [];
  };
  
  export const getProductById = (productId) => {
    return getAllProducts().find(product => product.id === productId);
  };
  
  export const getDiscountedProducts = () => {
    return getAllProducts().filter(product => product.discount > 0);
  };
  
  export const getInStockProducts = () => {
    return getAllProducts().filter(product => product.inStock);
  };