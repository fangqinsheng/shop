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
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="商品型号" prop="code"></el-table-column>
        <el-table-column label="缩略图" prop="imgUrl"></el-table-column>
        <el-table-column label="商品名称" prop="name"></el-table-column>
        <el-table-column prop="tag" label="标签" width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.tag === '在售' ? 'success' : 'info'" disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" >
            <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">确认</el-button>
            <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">打回</el-button>
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
  name: "Audit",
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
