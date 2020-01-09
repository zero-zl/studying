# nvm(node版本管理工具)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
# node(编译器)
nvm install --lts
# cnpm(包管理)
npm install cnpm -g --registry=https://r.npm.taobao.org
# ts-node(编译器)
cnpm install -g typescript ts-node

# 下载Vscode(IDE)
1. down
* (一)curl -o "#1" https://vscode.cdn.azure.cn/stable/26076a4de974ead31f97692a0d32f90d735645c0/{code_1.41.1-1576681836_amd64.deb}

sudo dpkg -i code_1.41.1-1576681836_amd64.deb

* （二）vsvode:sudo snap install --classic  code
2. setting
* tsc --init
* tsconfig(1.map->true,outDir->./out(改为自己的路径)
           2.ctrl+shift+B(编译，改成watch可以不需要手动编译)
           ) 
# 调试工具(Unit Test)
cnpm install save-dev jest


TS vscode
ES5 < ES6 (加了面向对象)< TS（加了对象检查）