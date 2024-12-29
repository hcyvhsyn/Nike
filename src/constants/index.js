import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Ana Sayfa" },
    { href: "#about-us", label: "Hakkımızda" },
    { href: "#products", label: "Ürünler" },
    { href: "#contact-us", label: "İletişim" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Model' },
    { value: '500+', label: 'Mağaza' },
    { value: '250k+', label: 'Müşteri' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "4599.99₺",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "3899.99₺",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "2999.99₺",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "3599.99₺",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Ücretsiz Teslimat",
        subtext: "Kesintisiz alışveriş deneyimi için ücretsiz teslimat hizmetimizden yararlanın."
    },
    {
        imgURL: shieldTick,
        label: "Güvenli Ödeme",
        subtext: "Güvenli ödeme seçeneklerimizle endişesiz alışveriş yapın."
    },
    {
        imgURL: support,
        label: "Yardımcı Olmak İçin Buradayız",
        subtext: "Her adımda size yardımcı olmak için burada olan özverili ekibimizle tanışın."
    }
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Murat Soner',
        rating: 4.5,
        feedback: "Ürünün kalitesi ve detaylara verilen özen beklentilerimi aştı. Kesinlikle tavsiye ediyorum!"
    },
    {
        imgURL: customer2,
        customerName: 'Hazal Karahan',
        rating: 4.5,
        feedback: "Ürün sadece beklentilerimi karşılamakla kalmadı, aynı zamanda onları aştı. Kesinlikle geri dönecek bir müşteri olacağım!"
    }
];


export const footerLinks = [
    {
        title: "Ürünler",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Yardım",
        links: [
            { name: "Hakkımızda", link: "/" },
            { name: "SSS", link: "/" },
            { name: "Nasıl Çalışır", link: "/" },
            { name: "Gizlilik Politikası", link: "/" },
            { name: "Ödeme Politikası", link: "/" },
        ],
    },
    {
        title: "Bize Ulaş",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+90 552 364 29 49", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];