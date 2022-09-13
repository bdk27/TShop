Vue.createApp({
    data() {
        return {
            checkgroup: [],
            clothesData: [
                {
                    id: 1,
                    name: '夏日涼感襯衫-拼接',
                    image: 'images/shirt/f1.jpg',
                    cost: 500,
                },
                {
                    id: 2,
                    name: '深色涼感襯衫',
                    image: 'images/shirt/n8.jpg',
                    cost: 650,
                },
                {
                    id: 3,
                    name: '夏日涼感襯衫-花語1',
                    image: 'images/shirt/f2.jpg',
                    cost: 500,
                },
                {
                    id: 4,
                    name: '夏日涼感襯衫-花語2',
                    image: 'images/shirt/f3.jpg',
                    cost: 500,
                },
                {
                    id: 5,
                    name: '夏日涼感襯衫-花語3',
                    image: 'images/shirt/f4.jpg',
                    cost: 500,
                },
                {
                    id: 6,
                    name: '夏日涼感襯衫-花語4',
                    image: 'images/shirt/f5.jpg',
                    cost: 500,
                },
                {
                    id: 7,
                    name: '舒適短褲',
                    image: 'images/shirt/n6.jpg',
                    cost: 450,
                },
                {
                    id: 8,
                    name: '夏日涼感襯衫-地圖',
                    image: 'images/shirt/n4.jpg',
                    cost: 650,
                },
            ],
            shoesData: [
                {
                    name: 'NIKE Air 1',
                    image: 'images/shoes/pexels-melvin-buezo-2529148.jpg',
                    cost: 4500,
                },
                {
                    name: 'NIKE Air 2',
                    image: 'images/shoes/pexels-ox-street-6050919.jpg',
                    cost: 2850,
                },
                {
                    name: 'NIKE Air 3',
                    image: 'images/shoes/pexels-ox-street-6050924.jpg',
                    cost: 4000,
                },
                {
                    name: 'NIKE Air 4',
                    image: 'images/shoes/pexels-ox-street-5710074.jpg',
                    cost: 5500,
                },
                {
                    name: 'NIKE Air 5',
                    image: 'images/shoes/pexels-deybson-mallony-5413291.jpg',
                    cost: 5600,
                },
                {
                    name: 'NIKE Air 6',
                    image: 'images/shoes/pexels-ox-street-6540926.jpg',
                    cost: 3500,
                },
                {
                    name: 'NIKE Air 7',
                    image: 'images/shoes/pexels-ox-street-6540973.jpg',
                    cost: 4250,
                },
                {
                    name: 'NIKE Air 8',
                    image: 'images/shoes/pexels-ox-street-6540914.jpg',
                    cost: 6500,
                },
            ],
            acceData: [
                {
                    name: '黑耀手環',
                    image: 'images/accessories/pexels-alexey-demidov-10803602.jpg',
                    cost: 550,
                },
                {
                    name: '絢麗髮箍',
                    image: 'images/accessories/pexels-castorly-stock-3641056.jpg',
                    cost: 680,
                },
                {
                    name: '花樣扁梳',
                    image: 'images/accessories/pexels-dmitry-zvolskiy-1676126.jpg',
                    cost: 450,
                },
                {
                    name: '多功能斜背包',
                    image: 'images/accessories/pexels-ge-yonk-1152077.jpg',
                    cost: 1250,
                },
                {
                    name: '有色眼鏡',
                    image: 'images/accessories/pexels-felipe-ferreira-701877.jpg',
                    cost: 980,
                },
                {
                    name: '紅色耳飾',
                    image: 'images/accessories/pexels-romina-bm-5380900.jpg',
                    cost: 2500,
                },
                {
                    name: '深秋耳飾',
                    image: 'images/accessories/pexels-superlens-photography-11655346.jpg',
                    cost: 1280,
                },
                {
                    name: '星型手環',
                    image: 'images/accessories/pexels-the-glorious-studio-5370648.jpg',
                    cost: 880,
                },
            ],
            
            quantity: 0,
        }
    },
    methods: {
      getSum() {
          let sum = 0;
          for (let i=0; i<this.checkgroup.length; i++){
              sum += this.checkgroup[i].cost;
          }
          return sum;
      },

    },
    mounted() {

    },
}).mount('#app');








