<template>
  <div class="container">
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="发布时间">
          <el-date-picker v-model="form.time" type="date" placeholder="选择日期">
          </el-date-picker>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="form.category" placeholder="请选择活动区域">
          <el-option label="储物用品" value="储物用品"></el-option>
          <el-option label="展示用品" value="beijing"></el-option>
          <el-option label="周转用品" value="beijing"></el-option>
          <el-option label="餐桌用品" value="beijing"></el-option>
          <el-option label="其他" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品编码">
        <el-col>
          <el-input v-model="form.code"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-col>
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="售价金额">
        <el-col :span="11">
          <el-input v-model="form.sp"></el-input>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-input v-model="form.fp"></el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <div class="block">
      <el-table :data="table" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="产品规格">
                <span>{{ props.row.product }}</span>
              </el-form-item>
              <el-form-item label="外箱规格">
                <span>{{ props.row.box }}</span>
              </el-form-item>
              <el-form-item label="容量">
                <span>{{ props.row.capacity }}</span>
              </el-form-item>
              <el-form-item label="材质">
                <span>{{ props.row.material }}</span>
              </el-form-item>
              <el-form-item label="产品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="产品画廊">
                <img class="gallery" v-for="pic in props.row.gallery" :key="pic" :src="pic"/>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品 ID" prop="id"></el-table-column>
        <el-table-column label="商品型号" prop="code"></el-table-column>
        <el-table-column label="缩略图" prop="imgUrl"></el-table-column>
        <el-table-column prop="tag" label="标签" width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.tag === '在售' ? 'success' : 'info'" disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="ERP信息">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" >
            <el-col>
              <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </el-col>
            <el-col>
              <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">日志</el-button>
              <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </el-col>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :total="400" layout="total, prev, pager, next, jumper"
        current-page="1" :page-size="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data(){
    return {
      form: {
        time: '',
        category: '',
        sp: '',
        fp: '',
        code: '',
        name: ''
      },
      table: [
        {
          id: 1,
          code: '2243',
          date: '2016-05-03',
          tag: '在售',
          imgUrl: '111',
          carousel: ["111", "111", "222", "222"],
          capacity: '4L',
          product: '353x226x110mm',
          box: '353x226x110mm',
          material: 'PC',
          desc: 'as的as阿萨德阿萨德阿萨德',
        },
        {
          id: 2,
          code: '2243',
          date: '2016-05-03',
          tag: '下架',
          imgUrl: '111',
          gallery: [
            "http://www.win-worlds.com/images/onlineService/lianxi.png",
            "http://www.win-worlds.com/images/onlineService/lianxi.png",
            "http://www.win-worlds.com/images/onlineService/lianxi.png",
            "http://www.win-worlds.com/images/onlineService/lianxi.png"
          ],
          capacity: '2L',
          product: '353x226x110mm',
          box: '353x226x110mm',
          material: 'PE',
          desc: 'as的as阿萨德阿萨德阿萨德',
        }
      ]
    }
  },
  mounted(){
    this.axios.get('/goods/list').then(res =>{
      this.data = res.data;
      console.log(res.data);
    })
  }
}
</script>

<style scoped lang="scss">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>
