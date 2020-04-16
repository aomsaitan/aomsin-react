import React, { Component } from 'react'
import ShopField from './shopField';

class Shop extends Component {
    render() {
        return (
            <body>
                <h1 class="textS"> ร้านแนะนำ  </h1>
                <ShopField
                    nameImg="ร้านขายเนื้อ"
                    des="ขายเนื้อวัวเกรดดี นำเข้าจากญี่ปุ่นทุกวัน ราคาถูก มีบริการส่งฟรีถึงบ้าน"
                    star={5}
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="ก๊อกแก๊กผักสด"
                    nameImg="ร้านขายผัก"
                    star={4}
                    des="ผักสดจากสวน ไม่มีร้านไหนสดเท่านี้อีกแล้วจ้า ไม่ใช้ยาฆ่าแมลงปลอดภัยแน่นอน"
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="พิมพิดาค้าขาย"
                    nameImg="ร้านขายเครื่องปรุง"
                    star={3}
                    des="(จัดโปรต้อนรับเปิดร้าน) ซอสมะเขือเทศ พริกไทย น้ำปลาถูกๆ"
                    county="จังหวัดกรุงเทพ"></ShopField>
                <ShopField
                    nameShop="เก็ตอยากขาย"
                    nameImg="ร้าน"
                    star={2}
                    des="ขายทุกอย่าง ไตก็ขาย ส่งของเฉพาะวัน จ-ศ"
                    county="จังหวัดระยอง"></ShopField>
                <ShopField
                    nameShop="ฟอร์ดขายหมู"
                    nameImg="ร้านขายหมู"
                    star={0}
                    des="ขายหมูสไลด์สำหรับชาบู สั่ง 5 แพ็คส่งฟรีทั่วโลก"
                    county="จังหวัดขอนแก่น"></ShopField>
            </body>

        )
    }

}
export default Shop



