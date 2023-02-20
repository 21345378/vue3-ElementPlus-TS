<template>
  <div class="login-container">
    <div class="login-Main">
      <div class="logo-Main-left">
        <img class="loge" src="@/assets/logo.png" alt="系统logo">
        <img class="banner" src="@/assets/login-banner.png" alt="">
      </div>
      <div class="logo-Main-right">
        <el-form :model="login_data" ref="ruleFormRef" :rules="rules" class="login-form">
          <div class="title-container">
            <h3 class="title">
              欢迎来到后台管理系统! 👋🏻
            </h3>
          </div>
          <div class="form-main">
            <el-form-item prop="username">
              <el-input v-model="login_data.username" :prefix-icon="User" placeholder="请输入你的账号" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input :prefix-icon="Lock" show-password="true" v-model="login_data.password" placeholder="请输入你的密码" />
            </el-form-item>
          </div>
          <div class="flex-bar">
            <el-checkbox>
              记住我
            </el-checkbox>
            <el-link type="primary" :underline="false">
              忘记密码了?
            </el-link>
          </div>

          <div class="form-loginBtn">
            <el-button :loading="load" type="primary" size="large" style="width: 100%;" @click.prevent="goto_Login(ruleFormRef)">
              登录
            </el-button>
          </div>

          <div class="sub-link">
            <span class="text">还没有帐号?</span>
            <el-link type="primary" :underline="false">
              创建新帐号
            </el-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<!--并没有使用ts语法-->
<script setup name="loginView" lang="ts">
//应用的相关图标 
import { User, Lock } from '@element-plus/icons-vue'
import { ElForm, ElFormItem, ElInput, ElButton, ElCheckbox, ElLink } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { userLogin } from '@/api/login/index'
import type { FormInstance, FormRules } from 'element-plus'
import { http } from '@/utils/http'


//路由跳转函数 
const router = useRouter()
//表单验证的相关DOM,便于在提交请求之前验证数据是否合理，减少发送请求的次数
const ruleFormRef = ref<FormInstance>()
//相关的校验规则 
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 3, max: 10, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]
})




//用户输入登录的相关数据 
const login_data = reactive({
  username: "", //账号
  password: "", //密码
})



//用户登录的函数 
const goto_Login = async (formEl:FormInstance | undefined) => {
  //用来判断是否生成了这个树，若没生成则则为undefined则返回
  if(!formEl) return
  await formEl.validate((valid,fields)=>{
    if (valid) {
      //数据合格向后台发送相关数据 
      login_action()
    } else {
      console.log('error submit!', fields)
    }
  })
}


//用户发送相关请求
const login_action = () =>{
  userLogin(login_data).then((res)=>{
    console.log(res);
    
    if(res.data.code === 200){
      ElMessage.success('登录成功！！!')
      router.push({name:'layoutView'})
    }else if(res.data.code === 404){
      ElMessage.error(res.data.message)
    }
    
  })
} 
</script>

<style scoped lang="less">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url(../../assets/login/login-background.png);
  background-size: cover;
}

.login-Main {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: var(--el-bg-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--el-box-shadow);
}

.logo-Main-left {
  position: relative;
  padding: 50px 0;
  width: 450px;
  background-color: #f5f7fa;
  overflow: hidden;

  .banner {
    width: 100%;
  }

  .loge {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background: url("../../assets/logo.png") no-repeat;
    background-size: contain;
    box-shadow: var(--el-box-shadow-light);
  }
}

.logo-Main-right {
  .login-form {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    margin-top: 30px;
    min-height: 430px;
    width: 500px;

    .title-container {
      position: relative;

      .title {
        font-size: 1.3em;
        color: var(--el-text-color-primary);
        margin: 0 auto 30px;
        font-weight: bold;
      }
    }
  }

  .form-main {
    margin-top: 20px;
  }

  .flex-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sub-link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 14px;
    color: var(--el-text-color-secondary);

    .text {
      margin-right: 10px;
    }
  }

  .el-form-item {
    margin-bottom: 24px;

    :deep(.el-input) {
      height: 42px;
      line-height: inherit;
      width: 100%;

      input {
        height: 42px;
      }

      .el-input__prefix,
      .el-input__suffix {
        display: flex;
        align-items: center;
      }

      .el-input__prefix {
        left: 10px;
      }

      .el-input__suffix {
        right: 10px;
      }
    }
  }
}
</style>