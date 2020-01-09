C：configure
M:make
I:install

curl :是利用URL语法在命令行方式下使用的开源文件传输工具。curl是一个利用URL规则在命令行下工作的文本传输工具。它支持上传和下载，所以是综合传输工具，但按传统，习惯称url为下载工具。


1)./configure（查看项目运行所需要的配置是否满足,生成makefile文件(项目所需要完成的功能)）
如果有不足配置，自己进行搜索
sudo apt search [应用名]
下载sudo apt install [应用名]

进行修补
2)make(make configure 执行makefile文件)

3)make install
有可能遇到权限问题
例子：
chown $USER[当前用户] -R（目录及其子目录进行操作） [目录]

将[目录]及其以下子目录的拥有者改为$USER


