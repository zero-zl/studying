[gitHub与SSH连接资料]（https://segmentfault.com/a/1190000013154540）
# 一)Git本地环境配置
1. install git
sudo apt install git
2. 配置用户信息
$git config --global user.name "Your Name"
$ git config --global user.email Your_email@example.com
3. 初始化本地仓库配置
git init

# 二)通过SSH连接GitHub
1. 安装SSH
sudo apt install ssh
2. 创建密钥文件
ssh-keygen -t rsa -C "<你的github账号邮箱>"
默认密钥文件路径在~/.ssh,id_rsa是私钥文件，id_rsa.pub是公钥文件
3. 将公钥添加到GitHub
将id_rsa.pub文件内容全部复制
登陆到GitHub上，右上角小头像->Setting->SSH and GPG keys中，点击new SSH key。
4. SSH测试
ssh -T git@github.com
如果结果为 “ ...You've successfully authenticated, but GitHub does not provide shell access”，则说明成功。
5. 设置远程仓库
git remote add origin git@github.com:Username/Repositories_Name.git
如果手误输错，可通过git remote remove origin命令删除该远程仓库。
6. 最终测试
			
在本地创建更改
git add xxx
git commit -m "xxxxxx"
git push origin master

例子：vscode
1. view->command palette(ctrl+shift+p)
2. git:clone
3. 复制url
4. 打开，修改
5. 添加，commit
6. 第一次提交要 push -u origin master(master给了权限，推送到origin主机的master分支)

# config 配置有system级别 global（用户级别） 和local（当前仓库）三个 设置先从system-》global-》local  底层配置会覆盖顶层配置 分别使用--system/global/local 可以定位到配置文件

* 查看系统config
git config --system --list
* 查看当前用户（global）配置
git config --global --list
* 查看当前仓库配置信息
git config --local --list