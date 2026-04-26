// src/api/mockApi.js

const products = [
    {
        id: 1,
        name: "Sarokkanapé",
        category: "nappali",
        price: 189000,
        material: "Textil",
        color: "Szürke",
        dimensions: "280 x 160 x 85 cm",
        description: "Nagy kapacitású, kényelmes L-alakú sarokkanapé.",
        image: "https://media.moemax.com/i/moemax/NCbXHJvmy4NFJFYEZEEGpTGw/sarokkanapek-u-alaku-moemax.jpg?fmt=auto&%24dq%24=&w=1920&h=1280"
    },
    {
        id: 2,
        name: "TV állvány",
        category: "nappali",
        price: 45000,
        material: "Fa + fém",
        color: "Tölgy",
        dimensions: "120 x 40 x 45 cm",
        description: "Modern TV állvány LED világítással.",
        image: "https://bestbutor.hu/wp-content/uploads/2022/10/snake-tv-allvany-sonoma-feher-best-butor2-e1688983420626.png"
    },
    {
        id: 3,
        name: "Kávézóasztal",
        category: "nappali",
        price: 32000,
        material: "Üveg + fa",
        color: "Fekete",
        dimensions: "90 x 60 x 40 cm",
        description: "Elegáns kávézóasztal tárolóval.",
        image: "https://mazzoni.hu/10711-large_default/lova-feherfekete-ovalis-dohanyzoasztal-110x60-cm-modern-kavezo-asztal.jpg"
    },
    {
        id: 4,
        name: "Fotel",
        category: "nappali",
        price: 75000,
        material: "Bársony",
        color: "Sötétkék",
        dimensions: "85 x 80 x 95 cm",
        description: "Kényelmes olvasófotel.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxBVaPgmMMN72rxVP4r1e9m-qJWwyjE640g&s"
    },
    {
        id: 5,
        name: "Dohányzóasztal",
        category: "nappali",
        price: 28000,
        material: "Fa",
        color: "Fehér",
        dimensions: "70 x 70 x 45 cm",
        description: "Minimalista dohányzóasztal.",
        image: "https://home-max.hu/butor/image/catalog/Dani/helvetia/aktiv-sorrento-800x640/sorrento-dohanyzoasztal.jpg"
    },
    {
        id: 6,
        name: "Polcrendszer",
        category: "nappali",
        price: 135000,
        material: "MDF",
        color: "Sonoma",
        dimensions: "180 x 30 x 200 cm",
        description: "Nagy falipolc rendszer.",
        image: "https://www.lakaskultura.hu/wp-content/uploads/2017/12/arch%C3%ADv-836x628.jpg"
    },
    {
        id: 7,
        name: "Konyhabútor szett",
        category: "konyha",
        price: 450000,
        material: "MDF + laminált",
        color: "Fehér + fa",
        dimensions: "300 cm hosszú",
        description: "Modern konyhabútor munkalappal.",
        image: "https://images.bogartcloud.com/kuchnia-aspen-szary-polysk---200-cm---zestaw-mebli-kuchennych2055_man_0.webp/public"
    },
    {
        id: 8,
        name: "Étkezőasztal 6 személyre",
        category: "konyha",
        price: 89000,
        material: "Tömör fa",
        color: "Természetes",
        dimensions: "160 x 90 x 75 cm",
        description: "Masszív étkezőasztal.",
        image: "https://www.butor-reaction.hu/fotky33358/fotos/_vyr_10040jedalensky-st%C3%B4l-batumi-2.webp"
    },
    {
        id: 9,
        name: "Bárszék",
        category: "konyha",
        price: 18500,
        material: "Műbőr + fém",
        color: "Fekete",
        dimensions: "45 x 45 x 95 cm",
        description: "Konyhapulthoz való bárszék.",
        image: "https://media.xxxlutz.com/i/xxxlutz/PIKyn7Czx-NHpQZWwSN5I0hg/?fmt=auto&%24hq%24=&w=1200"
    },
    {
        id: 12,
        name: "Dupla ágykeret",
        category: "haloszoba",
        price: 95000,
        material: "Fa",
        color: "Fehér",
        dimensions: "160 x 200 cm",
        description: "Minimalista dupla ágykeret.",
        image: "https://cdn3.jysk.com/getimage/wd3.large/262875"
    },
    {
        id: 13,
        name: "Gardrób szekrény",
        category: "haloszoba",
        price: 245000,
        material: "MDF",
        color: "Sonoma tölgy",
        dimensions: "200 x 60 x 220 cm",
        description: "4 ajtós tolóajtós gardrób.",
        image: "https://www.veneti.hu/491352-large_default_zoom/nica-haromajtos-gardrobszekreny-250-cm-szeles-fekete.jpg"
    },
    {
        id: 14,
        name: "Éjjeliszekrény",
        category: "haloszoba",
        price: 28000,
        material: "Fa",
        color: "Szürke",
        dimensions: "45 x 40 x 55 cm",
        description: "Modern éjjeliszekrény fiókkal.",
        image: "https://home-max.hu/butor/image/catalog/Dani/polpower/smile/smile-ejjeliszekreny-3-fiokos-feher.jpg"
    }
]

function simulateDelay(data, delay = 500) {
    return new Promise((resolve) => setTimeout(() => resolve(data), delay))
}

export function fetchProductsByCategory(category) {
    return simulateDelay(products.filter(p => p.category === category))
}

export function fetchProductById(id) {
    return simulateDelay(products.find(p => p.id == id))
}