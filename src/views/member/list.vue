<template>
  <div class="container member-list">
    <div class="inner-toolbar">
      <div class="toolbar-add toolbar-btn">
        <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true" size="small">新增</el-button>
      </div>
      <div class="toolbar-search toolbar-btn">
        <el-input placeholder="请输入会员名或手机号" size="small" v-model="search" class="input-with-select">
          <el-select v-model="select" slot="prepend" size="small" placeholder="请选择" style="width: 100px;">
            <el-option label="终端商" value="1"></el-option>
            <el-option label="经销商" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" size="small"></el-button>
        </el-input>
      </div>
    </div>
    <div class="container">
      <el-table :data="memberList" stripe style="width: 100%">
        <el-table-column prop="username" label="用户名">
        </el-table-column>
        <el-table-column prop="telephoneNumber" label="手机号">
        </el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="permission" label="权限"></el-table-column>
        <el-table-column prop="email" label="电子邮件"></el-table-column>
        <el-table-column prop="region" label="注册时间"></el-table-column>
        <el-table-column prop="prevLogin" label="上次登录时间"></el-table-column>
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="memberListPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="memberListForm" :inline="true">
        <el-form-item label="用户名" :label-width="formLabelWidth" required>
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" required>
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth" required>
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" required>
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth" required>
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地区" :label-width="formLabelWidth" required>
          <el-cascader size="large" :options="memberListForm.options" v-model="memberListForm.selectedOptions" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="固定电话" :label-width="formLabelWidth">
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth" required="">
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编" :label-width="formLabelWidth">
          <el-input v-model="memberListForm.name" autocomplete="off"></el-input>
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
import { regionDataPlus } from 'element-china-area-data';
export default {
  name: "list",
  components: {
    regionDataPlus
  },
  data () {
    return {
      memberListPage: '',
      search: '',
      select: '',
      memberList: [
        {
          id: 1,
          username: '方帅',
          telephoneNumber: 18819470675,
          email: '1105813323@qq.com',
          region: '2018-11-16 17:48:01',
          prevLogin: '2018-11-16 17:48:01',
          permission: '经销商',
          sex: '男'
        },
        {
          id: 2,
          username: '方帅',
          telephoneNumber: 18819470675,
          email: '1105813323@qq.com',
          region: '2018-11-16 17:48:01',
          prevLogin: '2018-11-16 17:48:01',
          permission: '经销商',
          sex: '男'
        },
        {
          id: 3,
          username: '方帅',
          telephoneNumber: 18819470675,
          email: '1105813323@qq.com',
          region: '2018-11-16 17:48:01',
          prevLogin: '2018-11-16 17:48:01',
          permission: '经销商',
          sex: '男'
        }
      ],
      memberListForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        options: regionDataPlus,
        selectedOptions: [],
      },
      formLabelWidth: '120px',
      dialogFormVisible: true,
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    handleEdit (row) {
      this.$router.push({ path: '/member/edit', query: { id: row.id }})
    }
  }
}
</script>

<style scoped lang="scss">
.el-pagination { margin-top: 10px; text-align: right; }
.member-list {
  background: #fff;
}
.inner-toolbar {
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 20px;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #ebeef5;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
