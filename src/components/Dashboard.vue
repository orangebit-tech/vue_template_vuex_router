<template>
    <div class="display-block">
        <div class="widget">
            <h2 style="margin-top: 0px;">Cars</h2>
            <div>
                <div class="item" v-for="(car, index) in cars" :key="index">
                    <div style="width: 160px;vertical-align: top; padding-top: 0px; margin-bottom: 10px;" class="">
                        <span style="font-size: 24px; color: #c4c6c8">{{car.make}} {{car.model}}</span>
                    </div>
                    <div style="margin-right: 15px;" class="img">
                        <img :src="car.img" alt="could not load">
                    </div>
                    <div style="display: inline-block; width: 140px;vertical-align: top;" class="inner-block;">
                        <label>On Trip </label> <span style="margin-left: 20px;"> No</span>
                    </div>
                    <div style="display: inline-block; width: 220px;vertical-align: top;" class="inner-block;">
                        <label>Next Trip in </label> <span style="margin-left: 20px;"> 21h 56min</span>
                    </div>
                    <div style="display: inline-block; width: 0px;vertical-align: top; width: 190px;" class="inner-block;">
                        <label>Revenue/mo </label> <span style="margin-left: 20px;"> ${{car.rev}}</span>
                    </div>
                    <div style="display: inline-block; width: 0px;vertical-align: top; width: 170px;" class="inner-block;">
                        <label>Mileage </label> <span style="margin-left: 20px;"> {{car.miles}}</span>
                    </div>
                    <div style="display: inline-block; width: 0px;vertical-align: top; width: 170px;" class="inner-block;">
                        <label>Fuel Level </label> <span style="margin-left: 20px;"> {{car.fuel}}</span>
                    </div>
                    <div style="display: inline-block; width: 0px;vertical-align: top; width: 110px;" class="inner-block;">
                        <label>Check </label> <span style="margin-left: 20px;"> <div :class="{'pass': car.check == 'pass', 'fail': car.check == 'fail'}" class="dot"></div></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Settings',
    data(){
        return {
            cars: [
                {
                    make: 'Nissan',
                    model: 'Sentra',
                    year: '2015',
                    img: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/jahCTReORbOj9Rpi3ET45g.1440x700.jpg',
                    miles: '126197',
                    rev: '461',
                    fuel: '80%',
                    check: 'fail'
                },
                {
                    make: 'Toyota',
                    model: 'Camry',
                    year: '2018',
                    img: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/HlpC545WQqKwrXGM4bU64g.1440x700.jpg',
                    miles: '22511',
                    rev: '674',
                    fuel: '100%',
                    check: 'pass'
                },
                {
                    make: 'BMW',
                    model: 'X1',
                    year: '2018',
                    img: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/3I5SAmZESdGhWBmuszBSUA.1440x700.jpg',
                    miles: '18467',
                    rev: '851',
                    fuel: '100%',
                    check: 'pass'
                },
            ]
        }
    }
}
</script>

<style scoped>
.dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #c5c6c8;
    display: inline-block;
    opacity: 0.9;
}
.pass {
    background-color: #66fcf1;
    -webkit-box-shadow: 0 0 3px #66fcf1;
        box-shadow: 0 0 3px #66fcf1;
}
.fail {
    background-color: #F5F232;
        -webkit-box-shadow: 0 0 3px #F5F232;
        box-shadow: 0 0 3px #F5F232;
}
h4 {
    color: #c5c6c8;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
}
.img {
    display: inline-block;
}
img {
    width: 140px;
    border-radius: 6px;;
}
span {
    color: #66fcf1;
}
.item {
    padding: 5px;
    border: 1px solid #202833;
    display: block;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    text-align: left;
    padding-left: 15px;
}
.item .inner-block {
    vertical-align: top;
    width: 200px;
    display: inline-block;
    padding: 15px;
    
}
</style>