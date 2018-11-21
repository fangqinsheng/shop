<template>
    <div class="container">
        <!-- 进度条  elementUI组件-->
        <el-steps :active="active" simple>
            <el-step title="1.选择商品分类" icon="el-icon-edit"></el-step>
            <el-step title="2.填写商品信息" icon="el-icon-upload"></el-step>
            <el-step title="3.上传商品详情页" icon="el-icon-picture"></el-step>
        </el-steps>
        <!-- 进度条 -->

        <el-container class="steps-box" v-if="active === 0">
            <el-container class="clearfix select-box">
                <el-row class="select-items">
                    <el-col v-for="(item, index) in cate" :key="item.id" @click="cateSelect(item, index)"
                        :class="{'selected' : cateStatus === index}" >{{ item.name }}</el-col>
                </el-row>
                <el-row class="select-items" >
                    <el-col v-for="(item, index) in list" :key="item.id" @click="listSelect(item, index)"
                        :class="{'selected' : listStatus === index}" v-if="cateID == item.parentID"
                        >{{ item.name }}</el-col>
                </el-row>
                <el-row class="select-items">
                    <el-col :class="{'selected' : typeStatus === index}" @click="typeSelect(item, index)"
                        v-if="listID == item.parentID"
                        v-for="(item, index) in type" :key="item.id">{{ item.name }}</el-col>
                </el-row>
            </el-container>
            <!--<p>您当前选择的商品类别是：<span v-show="cateName">{{ cateName }} > </span><span v-show="listName">{{ listName }} ></span><span v-show="typeName">{{ typeName }}</span></p>-->
        </el-container>
        <div class="clearfloat steps-box" v-if="active === 1">
            <el-form ref="form" :model="form" label-width="80px">
                <h3 @click="slideDown" class="form-title">基本信息</h3>
                <!--<transition name="fade">-->
                    <div class="form-group" v-show="isHide" :style="{height: 'height'}">
                        <el-form-item label="商品名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="商品编码">
                            <el-input v-model="form.coding"></el-input>
                        </el-form-item>
                        <el-form-item label="商品描述">
                            <el-input v-model="form.coding"></el-input>
                        </el-form-item>
                        <el-form-item label="经销商价格">
                            <el-input v-model="form.bPrice"></el-input>
                        </el-form-item>
                        <el-form-item label="终端商价格">
                            <el-input v-model="form.cPrice"></el-input>
                        </el-form-item>
                    </div>
                <!--</transition>-->
                <h3>参数</h3>
                <div class="form-group">
                    <el-form-item label="产品规格">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="外线规格">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="容量">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="装数">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="可选颜色">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="库存">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <h3>seo</h3>
                <div class="form-group">
                    <el-form-item label="seo标题">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="seo关键字">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="seo关键字">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </div>

                <h3>物流/其他</h3>
                <div class="form-group">
                    <el-form-item label="运费">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="卖家承担运费"></el-radio>
                            <el-radio label="买家承担运费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <h3>关联产品</h3>
                <div class="form-group">
                    <el-form-item label="相关产品">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="卖家承担运费"></el-radio>
                            <el-radio label="买家承担运费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <h3>促销活动</h3>
                <div class="form-group">
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="steps-box clearfloat" v-if="active === 2">
            <!--<Editor ref="Editor"></Editor>-->
        </div>
        <el-row class="select-btn">
            <el-button style="margin-top: 12px;" @click="prev" v-if="active == 1 || active == 2 || active ==3">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next" v-if="active == 0 || active == 1">下一步</el-button>
            <el-button style="margin-top: 12px;" @click="jumpTo('list')" v-if="active == 2">提交</el-button>
        </el-row>
    </div>
</template>

<script>
// import Editor from '../../components/goods/add3.vue'
// console.log(Editor);
export default {
    name: "add",
    components: {
        // Editor
    },
    data(){
        return {
            isHide: true,
            height: '10',
            cateName: '',
            listName: '',
            typeName: '',
            active: 0,
            cateStatus: -1,
            cateID: '',
            listStatus: -1,
            listID: '',
            typeStatus: -1,
            isShow: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            cate: [
                { name: '储存用品', id: 1 },
                { name: '展示用品', id: 2 },
                { name: '周转用品', id: 3 }
            ],
            list: [
                { name: '保鲜盒', id: 6, parentID: 1 },
                { name: '标示盒', id: 7, parentID: 2 },
                { name: '托盘', id: 8, parentID: 2  },
                { name: '周转箱', id: 9, parentID: 1  }
            ],
            type: [
                { name: '加强保鲜盒', id: 20,  parentID: 6 },
                { name: '普通保鲜盒', id: 21,  parentID: 7 },
                { name: '带扣保鲜盒', id: 22,  parentID: 7 },
                { name: '防滑托盘', id: 23,  parentID: 7 },
                { name: '展示托盘', id: 24,  parentID: 9  }
            ],
        }
    },
    methods: {
        slideDown(){
            this.isHide = !this.isHide;
            if(this.isHide){
                this.height = 0
            }else{
                this.height = 'auto'
            }
        },
        jumpTo(url){
            this.$router.push(url);
        },
        next() {
            if (this.active++ > 2) this.active = 0;
            console.log(this.active)
        },
        prev() {
            if (this.active-- < 0) this.active = 0;
            console.log(this.active)
        },
        cateSelect: function(item, index){
            this.cateStatus = index;
            if (this.listStatus){
                this.listName = '';
                this.cateName = '';
                this.typeName = '';
            }
            this.cateName = item.name;
            this.cateID = item.id;
        },
        listSelect: function(item, index){
            this.listStatus = index;
            if (this.typeStatus){
                this.listName = '';
                this.typeName = '';
            }
            this.listName = item.name;
            this.listID = item.id;
        },
        typeSelect: function(item, index){
            this.typeStatus = index;
            this.typeName = item.name;
            console.log(index);}
    }
}
</script>

<style scoped lang="scss">
.select-box {
  justify-content: space-between;
}
.select-items {
  padding: 36px 18px; margin: 50px 30px;
  max-width: (1200-294)/3 + px; width: 100%;
  min-height: 450px; background: #fff;
  border: 1px solid #b1d2ff;
}
.select-items .el-col {
  padding: 0 20px; margin-bottom: 15px;
  line-height: 30px; font-size: 14px; color: #8c8c8c;
  border: 1px solid #fff; cursor: pointer;
}
.select-items .el-col:hover, .select-items .el-col.selected{
  border: 1px solid #b1d2ff;background: #eff8ff;
}
.select-address {

}
.select-btn {
  text-align: center;
}
.form-title {
    cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
