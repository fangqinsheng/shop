<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="card-box">
          <div slot="header" class="clearfix">
            <span>品牌</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">+新增</el-button>
          </div>
          <div class="cate-item" v-for="item in goods.brands" :key="item.id">
            <div class="cate-text">{{ item.name }}</div>
            <div class="cate-btn">
              <a href="javascript:void(0)" class="primary">编辑</a>
              <a href="javascript:void(0)" class="danger">删除</a>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card-box">
          <div slot="header" class="clearfix">
            <span>类别</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">+新增</el-button>
          </div>
          <div class="cate-item"  v-for="item in goods.category" :key="item.id">
            <div class="cate-text">{{ item.name }}</div>
            <div class="cate-btn">
              <a href="javascript:void(0)" class="primary">编辑</a>
              <a href="javascript:void(0)" class="danger">删除</a>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card-box">
          <div slot="header" class="clearfix">
            <span>列表</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">+新增</el-button>
          </div>
          <div class="cate-item"  v-for="item in goods.list" :key="item.id">
            <div class="cate-text">{{ item.name }}</div>
            <div class="cate-btn">
              <a href="javascript:void(0)" class="primary">编辑</a>
              <a href="javascript:void(0)" class="danger">删除</a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth" required>
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类图片" :label-width="formLabelWidth">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview" :on-remove="handleRemove"
            :file-list="form.fileList" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</span>
          </el-upload>
        </el-form-item>
        <el-form-item label="上级分类" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择分类">
            <el-option label="" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" :label-width="formLabelWidth">
          <el-input-number v-model="form.num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        fileList: [
          {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ],
        num: 1
      },
      goods: {
        brands: [
          { name: "智浮", id: 1 },
          { name: "惠而信", id: 2 }
        ],
        category: [
          { name: "储存用品", id: 3, parentID: 2 },
          { name: "展示用品", id: 4, parentID: 2 },
          { name: "餐桌用品", id: 5, parentID: 2 },
          { name: "周转用品", id: 6, parentID: 2 },
          { name: "其他", id: 7, parentID: 2 }
        ],
        list: [
          { name: "保鲜盒", id: 90, parentID: 3 },
          { name: "标示盒", id: 91, parentID: 3 },
          { name: "储物桶", id: 92, parentID: 3 },
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card-box {
  min-height: 400px;
  /*max-width: 330px;*/
}
.cate-item {
  position: relative;
}
.cate-item:hover .cate-btn {
  display: block;
}
.cate-btn {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  line-height: 42px;
  padding: 0 10px;
  margin-left: -10px;
  a {
    margin-left: 10px;
  }
}
.cate-text {
  line-height: 42px;
  font-size: 16px;
  height: 42px;
  padding-left: 20px;
}
.cate-text:hover {
  background: #e3e3e3;
}
</style>
