import React, { useState } from 'react';
import CarItem from './CarItem';
import CarFilter from './CarFilter';

const cars = [
  {
    id: 1,
    name: 'Delorean',
    price: 'CA$25,000',
    mileage: '5,000mi',
    description: 'A time-traveling sports car from the 1980s, known for its distinctive gull-wing doors and stainless steel body.',
    images: [
      'https://bilweb-auctions-images.s3-eu-west-1.amazonaws.com/1800x1200/object/delorean-dmc-12-13831-16240191321.jpeg',
      'https://www.autotrainingcentre.com/wp-content/uploads/2015/09/image1-3.jpeg',
    ],
  },
  {
    id: 2,
    name: 'Honda Civic Si',
    price: 'CA$3,500',
    mileage: '130,000mi',
    description: 'A compact car that offers a sporty driving experience with a reliable engine and great fuel efficiency.',
    images: [
      'https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/rbp54GJJ-kzHTNQHeAQ-(edit).jpg?t=169003208371',
      'https://www.motortrend.com/uploads/sites/5/2020/06/2000_Honda_Civic_Si-4.jpg?interpolation=lanczos-none&fit=around|660:371?w=768&width=768&q=75&format=webp',
      'https://www.sportscarmarket.com/2000-honda-civic-si-side',
    ],
  },
  {
    id: 3,
    name: 'Ford Mustang - Fastback',
    price: 'CA$17,000',
    mileage: '12,300mi',
    description: 'An iconic American muscle car known for its powerful performance and classic design.',
    images: [
      'https://bringatrailer.com/wp-content/uploads/2022/05/1967_ford_mustang-fastback_1967_ford_mustang-fastback_002_9-1-03634.jpeg?fit=940%2C627',
      'https://preview.redd.it/6kkar6cr39x71.jpg?width=640&crop=smart&auto=webp&s=224ce7edd65de84d2d48b8f0b6c6c73c9bccfc10',
      'https://www.rajveteranu.cz/auta/65398/hlavni_v.jpg',
    ],
  },
  {
    id: 4,
    name: 'Subaru WRX STI',
    price: 'CA$20,000',
    mileage: '380mi',
    description: '"The Subaru WRX STI is a high-performance sports car with rally-inspired engineering, delivering thrilling speed and exceptional handling."',
    images: [
      'https://fun2drive-japan.com/assets/img/fleet/contents_main_gc8_01.jpg',
      'https://fun2drive-japan.com/assets/img/fleet/contents_main_gc8_02.jpg',
      'https://fun2drive-japan.com/assets/img/fleet/contents_main_gc8_03.jpg',
    ],
  },
  {
    id: 5,
    name: 'Porsche Boxster 986',
    price: 'CA$8,350',
    mileage: '87,900mi',
    description: 'The Porsche Boxster 986 is a sleek, mid-engine convertible that combines luxury and exhilarating performance for an unforgettable driving experience.',
    images: [
      'https://www.millenniumheroes.com/wp-content/uploads/IMG_2047-1-1024x617.jpg',
      'https://www.millenniumheroes.com/wp-content/uploads/IMG_2043-1-1024x617.jpg',
      'https://www.millenniumheroes.com/wp-content/uploads/IMG_2027-Edit-1024x617.jpg',
    ],
  },
  {
    id: 6,
    name: 'Lamborgini Huracan',
    price: 'CA$70,350',
    mileage: '666mi',
    description: 'After the initial announcement in December last year, it is now official. The mau5 is now in possession of an equally beautiful Lamborghini Huracan that he purchased with the money gained from selling the Spider; and yes – it comes with an updated Nyan Cat wrap!',
    images: [
      'https://ozedm.com/wp-content/uploads/2015/08/purracan1.jpg',
      'https://ozedm.com/wp-content/uploads/2015/08/purracan2.jpg',
    ],
  },
  {
    id: 7,
    name: 'Nissan Qashqai N-Sport',
    price: 'CA$5,350',
    mileage: '247,200 mi',
    description: 'It’s a limited-edition version of Nissan’s popular – but poorly spelled – Qashqai, an SUV that straddles somewhere between the city-sized and medium soft roaders.',
    images: [
      'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/bLuhnrySPzQQ7SXo9xRA',
      'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/FayiYGsiRPKxvAChUulM',
      'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/mx8YpNWuTJ6dgSy7wRpf',
    ],
  },
  {
    id: 8,
    name: 'Mitsubishi Lancer X',
    price: 'CA$8,350',
    mileage: '76,000 mi',
    description: 'The Mitsubishi Lancer X is a compact sedan known for its sporty design, agile handling, and reliable performance. With a powerful engine and advanced safety features, it offers a thrilling driving experience.',
    images: [
      'https://www.automoli.com/common/vehicles/_assets/img/gallery/f43/mitsubishi-lancer-x.jpg',
      'https://www.automoli.com/common/vehicles/_assets/img/gallery/f104/mitsubishi-lancer-x.jpg',
    ],
  },
  {
    id: 9,
    name: 'Toyota AE86',
    price: 'CA$33,500',
    mileage: '21,000 mi',
    description: 'The Porsche Boxster 986 is a sleek, mid-engine convertible that combines luxury and exhilarating performance for an unforgettable driving experience.',
    images: [
      'https://bringatrailer.com/wp-content/uploads/2024/09/1985_toyota_corolla_20241006_074753-94104.jpg?fit=940%2C626',
      'https://bringatrailer.com/wp-content/uploads/2024/09/1985_toyota_corolla_20241006_074900-94146.jpg?w=620&resize=620%2C413',
      'https://bringatrailer.com/wp-content/uploads/2024/09/1985_toyota_corolla_20240928_081002-84504.jpg?w=620&resize=620%2C413',
    ],
  },
  {
    id: 10,
    name: 'Tesla Model Y',
    price: 'CA$56,950',
    mileage: '39,999 mi',
    description: 'The Tesla Model Y combines cutting-edge technology with spacious versatility, making every journey electrifying. Experience the future of driving with its impressive range and advanced safety features.',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tesla_Model_Y_1X7A6211.jpg/1920px-Tesla_Model_Y_1X7A6211.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Tesla_Model_Y_IMG_6822.jpg/1920px-Tesla_Model_Y_IMG_6822.jpg',
    ],
  },
  {
    id: 11,
    name: 'Audi Q7',
    price: 'CA$26,950',
    mileage: '145,500 mi',
    description: 'Probably the best 13 Q7 advertised. The jeep has never been adapted to a commercial jeep to save a couple of hundred on tax for the year. Has meticulously been maintained on time every time , proper seven seater not a 5 seat commercial van. This jeep will not disappoint first out will be pleasantly surprised with its overall condition. Sold with warranty and nationwide delivery.',
    images: [
      'https://media.donedeal.ie/eyJidWNrZXQiOiJkb25lZGVhbC5pZS1waG90b3MiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMH19LCJrZXkiOiJwaG90b18zMjUzOTQ3NDgifQ==?signature=626efc91f086864587fda7ab80e5b4a4415351c79d6fa670bae1282ddfe42a92',
      'https://media.donedeal.ie/eyJidWNrZXQiOiJkb25lZGVhbC5pZS1waG90b3MiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMH19LCJrZXkiOiJwaG90b18zMjUzOTQ3NDkifQ==?signature=2032da67129fe19215b6028dae955b7800b7e8784737cd2abdc31c533337ac25',
      'https://media.donedeal.ie/eyJidWNrZXQiOiJkb25lZGVhbC5pZS1waG90b3MiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMH19LCJrZXkiOiJwaG90b18zMjUzOTQ3NTAifQ==?signature=e3762da0928372fc03087184193cd8ed76588752b9b8216320e5af6488ebc5ed',
      'https://media.donedeal.ie/eyJidWNrZXQiOiJkb25lZGVhbC5pZS1waG90b3MiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMH19LCJrZXkiOiJwaG90b18zMjUzOTQ3NTEifQ==?signature=587b917f56f216c78300e7c6aee1dceae78f3882ef4f108d84dd49890b1370ec',
      'https://media.donedeal.ie/eyJidWNrZXQiOiJkb25lZGVhbC5pZS1waG90b3MiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMH19LCJrZXkiOiJwaG90b18zMjUzOTQ4MTQifQ==?signature=9848aec64db510f895eef34f6f8ddf99e83d8ad0ca7d591dcff7b5bfc8987ee5',
    ],
  },
  {
    id: 12,
    name: '2008 Audi A6',
    price: 'CA$20,790',
    mileage: '113,259mi',
    description: 'You are viewing a One Owner 2008 AUDI A6 QUATTRO / 113,259 MILES / GPS NAVIGATION / S-LINE / PREMIUM PACKAGE / TECHNOLOGY PACKAGE / COLD WEATHR PACKAGE / 18 WHEELS / HEATED FRONT SEATS / BI-XENON LIGHTS / MOONROOF / IPOD INTERFACE / SATELLITE RADIO. New Bridgestone Tires. The color combination on this vehicle is',
    images: [
      'https://www.edmunds.com/assets/m/for-sale/fe-waukh74f38n004144/img-1-960x.jpg',
      'https://www.edmunds.com/assets/m/for-sale/fe-waukh74f38n004144/img-2-960x.jpg',
      'https://www.edmunds.com/assets/m/for-sale/fe-waukh74f38n004144/img-3-960x.jpg',
      'https://www.edmunds.com/assets/m/for-sale/fe-waukh74f38n004144/img-4-960x.jpg',
      'https://www.edmunds.com/assets/m/for-sale/fe-waukh74f38n004144/img-5-960x.jpg',
      'https://www.edmunds.com/assets/m/for-sale/fe-waukh74f38n004144/img-6-960x.jpg',
    ],
  },
  {
    id: 13,
    name: 'Volvo XC90',
    price: 'CA$16,950',
    mileage: '239,999 mi',
    description: 'The car is in daily use Has a recent inspection on 09.2023 The car has small cosmetic flaws here and there, but nothing bad.. the rear window molding in the picture is still there and I will install it in the next few days. Changed haldex pump (new) and also filter and oil in the quad system. Inside, light leather interior and the car has 7 seats. ~~~~ =D !!!!1001001',
    images: [
      'https://img5.okidoki.st/c/2/4/9/149536/11696437/28433905_8.jpg',
      'https://img5.okidoki.st/c/2/4/9/149536/11696437/28433914_8.jpg',
    ],
  },
];

const CarList = () => {
  const [filter, setFilter] = useState({ name: '' });

  const handleFilterChange = (newFilter) => {

    setFilter(newFilter || { name: '' });
  };

  const filteredCars = cars.filter(car => {
    
    if (!filter.name) {
      return true;
    }
    return car.name.toLowerCase().includes(filter.name.toLowerCase());
  });

  return (
    <div className="car-list">
      <CarFilter onFilterChange={handleFilterChange} />
      {filteredCars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
};



export default CarList;
