import React from 'react';

const Menu = () => {
  return (
    <div className="bg-background text-on-surface">
      {/* Hero / Header Section */}
      <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover brightness-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARyLLgXHi074Br6XbqAZXErBxbQlJO3A2Urvs3UM7b5mPi4SjHTSB25nLWVL1tMdb6ifbl0BkS0YR-nvXA-9QsahrkQnEoyqdqP7YY3UCeBs_i-V1ayJjSPsvujMVONHBhI9p-gtdHOxFwRw042uCgCweYV0G_cQRgEXMPCudsKsAJDFhRGJzR3agLe7HqqVWou39AyRU2guWKl1SSbkj7LwGRuI7G8_OfPh3mEZRIljnhCQ-UIz5SPohTBi4XfrK2xYtXusmz"
        />
        <div className="relative z-10 text-center px-margin-mobile">
          <span className="text-label-caps font-label-caps text-secondary-fixed tracking-[0.3em] mb-4 block uppercase">Our Culinary Sanctuary</span>
          <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-surface-container-lowest drop-shadow-lg">The Signature Menu</h1>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a className="px-6 py-3 rounded-full border border-primary text-primary text-label-caps font-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300" href="#hot-drinks">Hot Drinks</a>
          <a className="px-6 py-3 rounded-full border border-outline-variant text-on-surface-variant text-label-caps font-label-caps hover:border-primary hover:text-primary transition-all duration-300" href="#cold-drinks">Cold Drinks</a>
          <a className="px-6 py-3 rounded-full border border-outline-variant text-on-surface-variant text-label-caps font-label-caps hover:border-primary hover:text-primary transition-all duration-300" href="#food">Main Dishes</a>
          <a className="px-6 py-3 rounded-full border border-outline-variant text-on-surface-variant text-label-caps font-label-caps hover:border-primary hover:text-primary transition-all duration-300" href="#desserts">Desserts</a>
        </div>

        {/* Hot Drinks Section */}
        <section className="mb-section-gap" id="hot-drinks">
          <div className="flex items-baseline justify-between mb-8 border-b border-outline-variant/30 pb-4">
            <h2 className="text-headline-lg font-headline-lg text-primary">Hot Drinks</h2>
            <span className="text-label-caps font-label-caps text-secondary">เครื่องดื่มร้อน</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <MenuItem title="Botanical Latte" thai="ลาเต้ดอกไม้ออร์แกนิก" price="฿120" desc="Rich espresso with steamed rose-infused milk and edible petals." signature />
            <MenuItem title="Thai Gold Tea" thai="ชาไทยสีทอง" price="฿95" desc="Premium hand-picked tea leaves brewed to golden perfection." />
            <MenuItem title="Jasmine Mocha" thai="มอคค่ามะลิ" price="฿110" desc="Dark chocolate balanced with fragrant jasmine floral notes." />
          </div>
        </section>

        {/* Cold Drinks Section */}
        <section className="mb-section-gap relative" id="cold-drinks">
          <div className="flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="sticky top-24">
                <h2 className="text-headline-lg font-headline-lg text-primary mb-2">Cold Refreshments</h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant mb-6">Chilled elixirs inspired by Bangkok's tropical summer.</p>
                <div className="h-64 rounded-card overflow-hidden">
                  <img alt="Cold drinks lifestyle" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzelbMO9tOrD4nwim_AaxlpJP-useC0pIto1_ihPTL0cxo5yG3OGCesQqOlpWpU66h3om-7oo1VSySeDQ-e2mlkEQD8tlXZAp0RRGQYp3JqCcRG4XbOlEmOAOHYb9BBDnNumOiOiTVpA_XRQ2KmEgYfo1OG6ZZhW7FOOaVTWS8zQXx654j6hkONJ7JVQOVD10GRUwAZR2v_DgPqyD489bb5Q-guIupL-OljeKhtQXJ8RU_uM--fS9I-EYQ8lOtKYpJrp1h9WkU"/>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 gap-6">
              <ColdItem title="Lychee Rose Fizz" thai="ลิ้นจี่กุหลาบโซดา" price="฿135" />
              <ColdItem title="Iced Butterfly Pea Latte" thai="ลาเต้อัญชันเย็น" price="฿125" />
              <ColdItem title="Passionfruit Iced Tea" thai="ชาเย็นเสาวรส" price="฿115" />
              <ColdItem title="Emerald Lime Soda" thai="น้ำมะนาวโซดามรกต" price="฿105" />
            </div>
          </div>
        </section>

        {/* Main Food Section */}
        <section className="mb-section-gap" id="food">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-primary">Signature Cuisine</h2>
            <p className="text-label-caps font-label-caps text-secondary mt-2">เมนูอาหารแนะนำ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 bg-surface-container-low rounded-card p-8 atmospheric-shadow relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-label-caps font-label-caps text-primary bg-primary-fixed/30 px-3 py-1 rounded-full mb-4 inline-block">CHEF'S CHOICE</span>
                <h3 className="text-headline-xl-mobile md:text-headline-lg font-headline-lg mb-2">Spicy Shrimp Pad Thai</h3>
                <p className="text-body-lg font-body-lg text-on-surface-variant mb-6 italic">ผัดไทยกุ้งแม่น้ำรสจัดจ้าน</p>
                <p className="text-body-md font-body-md text-on-surface-variant/80 max-w-md mb-8">Authentic stir-fried rice noodles with jumbo river prawns, peanuts, and our secret 3-flavor tamarind sauce.</p>
                <span className="text-headline-md font-headline-md text-primary">฿320</span>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[180px] text-primary absolute -top-10 -right-10">local_florist</span>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary rounded-card p-8 atmospheric-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-headline-sm font-headline-sm mb-2">Green Curry Risotto</h3>
                <p className="text-body-md font-body-md text-on-primary/80 italic mb-4">รีซอตโต้แกงเขียวหวาน</p>
                <p className="text-body-md font-body-md text-on-primary/70">A fusion masterpiece blending Italian rice with Thai aromatic herbs.</p>
              </div>
              <span className="text-headline-md font-headline-md text-tertiary-fixed mt-8">฿280</span>
            </div>
            <FoodItem title="Crispy Pork Belly" thai="หมูกรอบคั่วพริกเกลือ" price="฿250" />
            <FoodItem title="Royal Tom Yum Goong" thai="ต้มยำกุ้งน้ำข้นสูตรชาววัง" price="฿290" />
            <FoodItem title="Garlic Butter Crab" thai="ปูผัดเนยกระเทียม" price="฿350" />
          </div>
        </section>

        {/* Desserts Section */}
        <section className="mb-section-gap" id="desserts">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-grow bg-outline-variant/50"></div>
            <h2 className="text-headline-lg font-headline-lg text-primary whitespace-nowrap px-4">Sweet Finales</h2>
            <div className="h-[1px] flex-grow bg-outline-variant/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <DessertItem 
              title="Mango Sticky Rice" 
              thai="ข้าวเหนียวมะม่วงน้ำดอกไม้" 
              price="฿160" 
              desc="Seasonal honey mango with sweet coconut sticky rice."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuC1tx47OwkuduT16s3grSlSIOPSQvnZclAf93G4wfTgkESZ_a3YUOV4MW2AY8zSisyxCcOWaPqGPFpqJl7-snT13p9r622lKXJjeLdG-FH9jAaPTH7G74zyGHY3t-S_btQP6DRSTFx4YoVcEKi9cT9KVfxbPE9aTXStg9dk-AoV8ZkpO2BXv_KUKjTt9mPS0p086CYe50I4hyt8rRhKO_y0XTDuStHlqSofiTN0kynSoH7Qg2yrylwLavyvzcoY7SVNrLcQ7s2V"
            />
            <DessertItem 
              title="Lavender Panna Cotta" 
              thai="พานาคอตต้าลาเวนเดอร์" 
              price="฿180" 
              desc="Silky cream infused with French lavender and honey nectar."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDUNBfEDvXsHlUwtCV-MenczgX0YFdQalpxID9j0jEXfeSk-S0QfwmO6y7F6peUrmzqWJJs6CrseCEutyZFf28CFP3xXMmNFT7sYjmstO0lC8nxhsDnoxc4JLZRuOs-xiPNyMU38VBPx7jRiN_6EjWtvoQnZ09FmYQU-zBz7jUbv3gPpGbFfZXyTZq2TtNeZxJxnzJ_7uIATpU9N9u9DxCIhoKz75g6gRtiq2ZK7leyQMsw5fMSc5DnEUyKplAhG1WEoeckTjSa"
            />
            <DessertItem 
              title="Chocolate Silk Cake" 
              thai="เค้กช็อกโกแลตเนื้อนุ่ม" 
              price="฿195" 
              desc="70% dark chocolate mousse with a hazelnut praline base."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuC0IJ4RORxFFBCqywuuvC2nDLlOBFhYNCKiVbCGoCGmMv2sAyWkssxH0iVsMPSKFyZ128oXhTNm6NZNkOXTt3bcz4_IRjYOP-BSXCFfz1bZYTTrh1m-Ci1utRJYhge-YbwR-ZMWwxDtntObVd09hz34ZWbFhA4mRX6E1xbDm4oN0y7zOPuupzuOmlwP7qShBQI-a_WX_zCwpLQMHMwr6z8_5c251xgKYuiDYc7rqH1SM6-tfChvw7zZNsJkKJZHe0hB4kb8rWHZ"
            />
            <DessertItem 
              title="Seasonal Fruit Parfait" 
              thai="พาร์เฟต์ผลไม้ตามฤดูกาล" 
              price="฿140" 
              desc="Fresh tropical fruits layered with homemade granola and yogurt."
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCwy21eIGt9B3w3-BXeiOjzf1tYf9isOkukePEtdjBk71pYlW8oT6GAn2zSXM34FvK8ianp8MsHNGHfD51IIuUhUfeLsh6R6Ex3ELbk4bSmjenLRWSaZ91Ve0bazkmMwblJcB8-nKZd37hbA2mqDkCPwX62sIN6I7g3PBCQEWwXO3DJDmVYIDauHbrnESICks0CKuPQpiYTbilYVkw0qcjqFP5PJXju2sT1_BYIyv9qWxMS7uLTTdab4flO1ZHqHmpjmZyIMxd1"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const MenuItem = ({ title, thai, price, desc, signature }) => (
  <div className="bg-surface-container-low p-6 rounded-card atmospheric-shadow border border-transparent hover:border-tertiary-fixed transition-all duration-500 group">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-headline-sm font-headline-sm group-hover:text-primary transition-colors">{title}</h3>
      <span className="text-body-lg font-body-lg font-semibold text-primary">{price}</span>
    </div>
    <p className="text-body-md font-body-md text-on-surface-variant mb-1 italic">{thai}</p>
    <p className="text-body-md font-body-md text-on-surface-variant/70">{desc}</p>
    {signature && (
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-label-caps font-label-caps text-tertiary">SIGNATURE</span>
      </div>
    )}
  </div>
);

const ColdItem = ({ title, thai, price }) => (
  <div className="flex justify-between items-center py-4 border-b border-outline-variant/30 hover:pl-4 transition-all duration-300">
    <div>
      <h3 className="text-headline-sm font-headline-sm">{title}</h3>
      <p className="text-body-md font-body-md text-on-surface-variant">{thai}</p>
    </div>
    <span className="text-headline-sm font-headline-sm text-secondary">{price}</span>
  </div>
);

const FoodItem = ({ title, thai, price }) => (
  <div className="md:col-span-4 bg-surface-container p-6 rounded-card border-l-4 border-tertiary-container">
    <h3 className="text-headline-sm font-headline-sm mb-1">{title}</h3>
    <p className="text-body-md font-body-md text-on-surface-variant mb-4">{thai}</p>
    <span className="text-body-lg font-body-lg font-bold text-primary">{price}</span>
  </div>
);

const DessertItem = ({ title, thai, price, desc, img }) => (
  <div className="flex gap-6 group">
    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-tertiary-fixed-dim">
      <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={img} alt={title} />
    </div>
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-headline-sm font-headline-sm">{title}</h3>
        <span className="text-body-lg font-bold text-primary">{price}</span>
      </div>
      <p className="text-body-md font-body-md text-on-surface-variant mb-2 italic">{thai}</p>
      <p className="text-body-md font-body-md text-on-surface-variant/70">{desc}</p>
    </div>
  </div>
);

export default Menu;
