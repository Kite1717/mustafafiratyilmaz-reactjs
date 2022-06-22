import React from "react";
import { screen, waitFor } from "@testing-library/react";
import SingleProductCard from "../components/SingleProductCard";
import { ProductModel } from "../models/ProductModel";
import { renderWithContext } from "../test-utils";
import * as api from "../redux/product/productAPI";

const mockProducts = [
  {
    createdAt: 1655320893,
    name: "MacBook Pro M1 128 GB",
    avatar:
      "https://platincdn.com/3195/pictures/ADTQCWEQBT122202011596_mbp-spacegray-select-202011.jpeg",
    developerEmail: "bayindir.411@gmail.com",
    price: 560,
    id: "1",
    description: "Lorem lorem",
    category: "Electronic",
  },
  {
    createdAt: 1655321667,
    name: "iPhone 13 ",
    avatar:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
    developerEmail: "bayindir.411@gmail.com",
    price: "1000",
    id: "2",
    description: "iPhone 13",
    category: "Electronic",
  },
  {
    createdAt: 1655323283,
    name: "iPhone SE",
    avatar:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=jpeg&qlt=90&.v=1646415838921",
    developerEmail: "",
    price: "249",
    id: "14",
    category: "Electronic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus velit at facilisis consectetur. Suspendisse tristique accumsan rutrum. Curabitur facilisis iaculis quam at egestas. Cras viverra molestie accumsan. Ut quis urna dolor. Curabitur congue elit eget enim auctor ornare. Quisque vel tristique mauris, ut condimentum dolor. Cras at orci eget quam condimentum aliquam. Nulla vestibulum iaculis tellus, at laoreet nisi auctor nec. Integer scelerisque fringilla neque, at rhoncus tortor elementum sollicitudin. Proin pulvinar, quam vel luctus gravida, nunc mauris dapibus diam, sit amet mollis erat nisl tempor tortor. Sed turpis dolor, venenatis eget porta in, fermentum non urna. Praesent leo dolor, dictum tincidunt congue non, tempus quis nulla. Aenean dui lorem, ullamcorper vitae ante eu, cursus tincidunt arcu. Cras sit amet diam non lectus viverra varius.",
  },
  {
    createdAt: 1655323779,
    name: "Adidas Superstar",
    avatar:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a4b857b6d834a538609aafc0157bdab_9366/Superstar_Shoes_White_FU7712_01_standard.jpg",
    developerEmail: "bayindir.411@gmail.com",
    price: "100",
    id: "15",
    description:
      "Back in the day they were the go-to basketball low top. Today they're a streetwear icon. These juniors' shoes celebrate 50 years of the adidas Superstar. From the classic shell toe to the serrated 3-Stripes, this anniversary edition honours an unmistakable adidas design. Built on a comfortable rubber cupsole, they look fresh and fun no matter the colour.",
    category: "Clothing",
  },
  {
    createdAt: 1655388398,
    name: "Rolex Cellini Moonphase",
    avatar:
      "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m50535-0002.png",
    developerEmail: "bilgehan.atas@gmail.com",
    price: 1425,
    id: "18",
    description:
      "Nulla sit amet lacus et nunc consectetur finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis sagittis nibh et pellentesque. Cras hendrerit tortor ac odio porta, in rhoncus magna laoreet. Vivamus id erat mollis, bibendum velit in, dapibus nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam nulla urna, ultrices laoreet dignissim eu, fermentum non est. Morbi tincidunt augue sit amet nulla elementum, eu scelerisque risus laoreet. Sed sed cursus dolor. Duis convallis orci eget ultricies venenatis.",
    category: "Accessories",
  },
  {
    createdAt: 1655390054,
    name: "IDANAS",
    avatar: "https://cdn.ikea.com.tr/urunler/500_500/PE782658.jpg",
    developerEmail: "bilgehan.atas@gmail.com",
    price: 99,
    id: "19",
    description:
      "Cras placerat efficitur est, eget interdum tellus. Nulla sodales eget massa et hendrerit. Aliquam ut orci mattis, porta purus ac, scelerisque arcu. Aenean lobortis convallis elementum. Curabitur ac ligula eget diam faucibus venenatis eu et ipsum. In commodo lorem eu felis suscipit blandit. Nunc sit amet lorem quis risus suscipit suscipit. Nam laoreet mi nisi, in feugiat ante commodo non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus elit quam.",
    category: "Furnitures",
  },
  {
    createdAt: 1655390068,
    name: "HEMNES",
    avatar: "https://cdn.ikea.com.tr/urunler/500_500/PE311001.jpg",
    developerEmail: "bilgehan.atas@gmail.com",
    price: 90,
    id: "20",
    description:
      "Nam et libero augue. Cras urna eros, posuere ut cursus eget, aliquam id tellus. Quisque mollis, nibh in pellentesque tincidunt, lectus sapien convallis sem, a vehicula ex metus quis eros. Morbi a luctus urna, pellentesque tempus diam. Proin eget malesuada neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel ex sit amet metus pellentesque aliquam eu id nibh. Morbi pellentesque augue mauris, fermentum fermentum dui tempus eget. Sed bibendum leo eu pulvinar suscipit.",
    category: "Furnitures",
  },
  {
    createdAt: 1655390062,
    name: "Balenciaga Karate Jacket",
    avatar:
      "https://balenciaga.dam.kering.com/m/4e360dcfa756f2ed/Large-704656TMS081000_G.jpg",
    developerEmail: "bilgehan.atas@gmail.com",
    price: 5050,
    id: "21",
    description:
      "Donec congue ante a dictum rhoncus. Integer vel mi sagittis, feugiat purus vel, luctus augue. Nulla elementum augue non lorem scelerisque posuere. Duis ultricies leo vitae luctus viverra. Fusce non enim at nunc tempor aliquam. Cras eget ex nulla. Donec placerat magna sed venenatis dapibus. Vivamus porta pulvinar mi vel sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur convallis orci vel nunc scelerisque consequat. In iaculis dapibus erat, vitae aliquet dui.",
    category: "Clothing",
  },
  {
    createdAt: 1655390951,
    name: "Apple Watch Series 7",
    avatar:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s7-202205?wid=340&hei=264&fmt=p-jpg",
    developerEmail: "bilgehan.atas@gmail.com",
    price: 399,
    id: "22",
    description:
      "Sed at risus metus. Proin quis consequat sapien. Morbi quis eleifend sem, sed ullamcorper magna. Quisque vitae nisl vel massa consequat accumsan. Vestibulum gravida, nisl dignissim convallis congue, orci mauris volutpat dolor, at consectetur massa mauris ac velit. Nulla facilisi. Nullam urna arcu, placerat luctus ullamcorper eget, feugiat quis justo. In consequat placerat ligula, sed efficitur velit luctus lobortis. In in elit quam. Nam fermentum volutpat est id dapibus. Sed sem risus, imperdiet eu lacus ut, egestas hendrerit ante. Nulla mattis suscipit sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque nec nisl ultrices, lacinia quam vitae, mollis nisl. Aenean volutpat ut lacus vel bibendum.",
    category: "Electronic",
  },
  {
    createdAt: 1655392662,
    name: "Echo Dot (4th generation)",
    avatar: "https://m.media-amazon.com/images/I/611dOtd2HZL._AC_SL1000_.jpg",
    developerEmail: "monirsaffor@gmail.com",
    price: "299",
    id: "23",
    category: "Electronic",
    description:
      "Echo Dot is our most popular smart speaker with Alexa: The sleek, compact design delivers crisp vocals and balanced bass for full sound.\nPerfect for your bedside table: See the time, alarms and timers on the LED display. Tap the top to snooze an alarm.\nEcho Dot is a hands-free, voice-controlled device that uses the Alexa Voice Service to play music, read the news, answer questions, recite the Quran, control compatible smart home devices, set timers and more.\nVoice control your entertainment: Stream millions of songs from Anghami and Spotify. Play music throughout your home with multi-room music. \nReady to help with your daily rituals - Ask Alexa to recite the Quran, set prayer alarms (coming soon) and hear dates in Hijri (coming soon).\nControl your smart home: use your voice to turn on lights and plugs, adjust air conditioning and more, with compatible connected devices (sold separately).\nKeep your household connected: use your Echo devices like an intercom and talk to any room in the house. Ask Alexa to connect with another room or to announce to the entire household that breakfast is ready or remind the kids that it's bedtime.",
  },
  {
    createdAt: 1655392684,
    name: "Echo Show 10",
    avatar: "https://m.media-amazon.com/images/I/518g+tWPHwL._AC_SL1000_.jpg",
    developerEmail: "monirsaffor@gmail.com",
    price: "199",
    id: "24",
    category: "Accessories",
    description:
      "Designed to move with you: with a 10.1\" HD screen that moves automatically, films, recipes and information are always in view. The speakers deliver premium, directional sound. \nEcho Show 10 is a hands-free, voice-controlled device that uses Alexa to play music, stream videos, control compatible smart home devices, answer questions, recite the Quran, read the news, set timers, alarms and more.\nBe entertained: ask Alexa to play TV programmes and films via Prime Video, Netflix and more. Stream music from Anghami and Spotify. \nReady to help with your daily rituals: Ask Alexa to recite the Quran, set prayer alarms (coming soon) and display dates in Hijri (coming soon).\nThe ultimate kitchen companion: cook step-by-step recipes, get unit conversions or substitutions, set timers, add to your shopping list and multitask with ease.\nSmart home made simple: With the smart home built-in hub, easily set up compatible Zigbee devices. Control compatible cameras, lights, air conditioning and more using the interactive display or your voice.\nKeep your household connected: use your Echo devices like an intercom and talk to any room in the house. Ask Alexa to connect with another room or to announce to the entire household that breakfast is ready or remind the kids that it's bedtime.",
  },
  {
    createdAt: 1655392702,
    name: "Panasonic 12 Kg Wash & 8 Kg",
    avatar: "https://m.media-amazon.com/images/I/713eGKDh9KL._AC_SL1500_.jpg",
    developerEmail: "monirsaffor@gmail.com",
    price: "8999",
    id: "25",
    category: "Furnitures",
    description:
      "Installation from official brand partner is only available on orders from the seller Amazon. ae\nUnhooking of existing unit (if required).\nInstallation & demo of one customer supplied Panasonic washing machine / Refrigerator.\nFor washing machine: Provider will supply a reducer, bush socket & 13 Amp Plug (if required)\nFor refrigerator: Provider will connect it to the electrical power socket.\nFor installation of more than 1 unit please click on the details options above.",
  },
  {
    createdAt: 1655400164,
    name: " Power Delivery Power",
    avatar: "https://m.media-amazon.com/images/I/51nlGlyzuXL._AC_SL1500_.jpg",
    developerEmail: "monirsaffor@gmail.com",
    price: "190",
    id: "26",
    category: "Electronic",
    description:
      "18W Power Delivery USB-C Port】: Type-C port with PD protocol provides 9-12V high voltage output, well work for your your MacBook/ new Type-C IPad Pro/ new 13\" MacBook Air with Retina display. The USB-C port is versatile, also with QC 3.0 protocol that means it will charge your compatible devices with the optimal charging speed For example, Boost up 50% battery to your iPhone X/ 8/ 8 Plus in 30 minutes. (USB-C to Lightning cable is not included)\n⚡【High-speed Charging】: Full recharging battery 7 hours by QC/PD 3.0 charger; It has two standard USB ports, a Quick Charge port and a USB-C port that allows you to charge multiple devices simultaneously, these iSmart ports will detect devices and set them for optimal charging settings. Quick Charge 3.0 port charges compatible devices up to 80% in 35 minutes, providing 5V 9V 12V voltage intelligently adjustable charging for different QC 3.0 devices, 4 times faster than conventional charging\n⚡【26800mAh High Capacity, Powerful Compatibility】: Universal fit for Nintendo Switch, iPhone Xs/XR/X/8, Google Pixel, Galaxy, HTC series and etc. USB-C cell phones. With its 26800mAh capacity, it charges IPhone 8 7 times, Galaxy S8 5 times, Switch 3.5 times, Ipad mini 3 times, 2017/ 2016 Macbook and tablets at least 2 times, notebook at least once, that's enough power to last an entire trip\n⚡【Easy to Carry】 Ultra slim and compact body with only 14mm thickness, fully rubber oil surface cover, smooth design let you enjoy a good touch feeling and protect your devices from scratched or dropped, great for traveling\n⚡【Safe and Reliable】 UL 2056, CE, RoHS, FCC certified manufacturing quality. Built-in intelligent safeguards protect your devices against excessive current flow, overheating and overcharging, more safe to use; 12 month Support Service",
  },
  {
    createdAt: 1655400169,
    name: "United Colors of Benetton Men's",
    avatar: "https://m.media-amazon.com/images/I/81rV8xujgCL._AC_SY879_.jpg",
    developerEmail: "monirsaffor@gmail.com",
    price: "19",
    id: "27",
    category: "Clothing",
    description:
      "Material: 100% Cotton\nMaterial Composition: 100% Cotton\nCare Instructions: Machine Wash\nCollar Type: Button Down Collar\nSleeve Type: Short Sleeve\nClosure: Pull On\nStyle: Regular\nFit Type: Regular",
  },
  {
    createdAt: 1655494403,
    name: "Iphone 13 Pro 256 GB Graphite",
    avatar:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346288",
    developerEmail: "bihanhasan33@gmail.com",
    price: 999,
    id: "112",
    description:
      "The iPhone 13 has a 6.1-inch screen, and the iPhone 13 mini has a 5.4-inch screen. They both use Apple's Ceramic Shield cover glass, which adds improved drop protection.The Super Retina XDR display is 28% brighter up to 800 nits for regular content 1200 nits for HDR. In addition, the P3 color gamut and high pixel density mean text will pop, and photos and videos will appear sharper.Apple reserved the new ProMotion variable refresh displays for its pro models. The standard iPhones retain the 60Hz refresh rate of previous generations.",
    category: "Electronic",
  },
  {
    createdAt: 1655494914,
    name: "IPad Air",
    avatar:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-wifi-pink-202109_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1629840647000",
    developerEmail: "bihanhasan33@gmail.com",
    price: 499,
    id: "113",
    description: "An incredible IPad Air",
    category: "Electronic",
  },
  {
    createdAt: 1655831468,
    name: "name 114",
    avatar: "avatar 114",
    developerEmail: "developerEmail 114",
    price: 26,
    id: "114",
  },
  {
    createdAt: 1655831943,
    name: "name 115",
    avatar: "avatar 115",
    developerEmail: "developerEmail 115",
    price: 59,
    id: "115",
  },
  {
    createdAt: 1655839897,
    name: "name 116",
    avatar: "avatar 116",
    developerEmail: "developerEmail 116",
    price: 83,
    id: "116",
  },
  {
    createdAt: 1655840147,
    name: "name 117",
    avatar: "avatar 117",
    developerEmail: "developerEmail 117",
    price: 91,
    id: "117",
  },
  {
    createdAt: 1655843974,
    name: "test clothes",
    avatar:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    developerEmail: "mustafa.firat.yilmaz@protonmail.com",
    price: "1200",
    id: "118",
    description: "test mustafa firat yilmaz",
    category: "Clothing",
  },
  {
    createdAt: 1655844996,
    name: "test mustafa 2 ",
    avatar:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    developerEmail: "mustafa.firat.yilmaz@protonmail.com",
    price: "333",
    id: "119",
    description: "test mustafa firat yilmaz",
    category: "Clothing",
  },
  {
    createdAt: 1655845099,
    name: "test 3",
    avatar:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    developerEmail: "mustafa.firat.yilmaz@protonmail.com",
    price: "23",
    id: "120",
    description: "asdasdsad",
    category: "Electronic",
  },
  {
    createdAt: 1655845080,
    name: "test4",
    avatar:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    developerEmail: "mustafa.firat.yilmaz@protonmail.com",
    price: "444",
    id: "121",
    description: "asdsadsad",
    category: "Furnitures",
  },
  {
    createdAt: 1655845388,
    name: "test5",
    avatar:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    developerEmail: "mustafa.firat.yilmaz@protonmail.com",
    price: "123213",
    id: "122",
    description: "asdasdasd",
    category: "Electronic",
  },
  {
    createdAt: 1655845372,
    name: "test7",
    avatar:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    developerEmail: "mustafa.firat.yilmaz@protonmail.com",
    price: "1233",
    id: "123",
    description: "asdasd",
    category: "Electronic",
  },
  {
    createdAt: 1655845559,
    name: "test9",
    avatar:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
    developerEmail: "mustafa.firat.yilmaz@protonmail.com",
    price: "333",
    id: "124",
    description: "asdasdasd",
    category: "Furnitures",
  },
];
const getProductsSpy = jest.spyOn(api, "fetchProducts");
getProductsSpy.mockResolvedValue(mockProducts as any);

test("several products should be listed", async () => {
  renderWithContext(
    <SingleProductCard product={mockProducts[0] as ProductModel} />
  );
  await waitFor(() => expect(getProductsSpy).toHaveBeenCalledTimes(1));
  const articles = screen.getAllByRole("article");
  expect(articles.length).toEqual(mockProducts.length);
});

test("Each individual product should contain a heading", async () => {
  renderWithContext(
    <SingleProductCard product={mockProducts[0] as ProductModel} />
  );
  for (const product of mockProducts) {
    await screen.findByRole("heading", { name: product.name });
  }
});
